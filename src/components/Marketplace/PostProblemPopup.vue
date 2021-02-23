<template>
<!-- Modal -->
<div v-if="loaded" class="modal fade" id="PostProblemModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">Post a problem</h5>
                <button id="closeBtn" type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <form onsubmit="return false;">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input v-model="insertedTitle"
                               class="form-control" id="title" placeholder="Give problem a clear title."/>
                    </div>
                     <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="insertedDescription"
                                  rows="5" class="form-control" id="description" placeholder="Describe the problem."/>
                    </div>

                    <div class="form-group">
                        <label for="category">Problem category</label>
                        <select v-model="insertedCategoryId" class="form-control" id="category">
                        <option v-for="category in allCategories" :key="category._id" :value="category._id">
                            {{category.name}}
                        </option>
                        </select>
                    </div>

                    <div class="form-group mt-4">
                        <button class="btn btn-success mr-2">Attach files</button>
                        <small style="color: #B7B5B5;">(max. 5 MB)</small>
                    </div>

                    <div class="row mt-4">
                        <div class="col-6">
                            <label for="dueDays">Due</label>
                            <input v-model="insertedDueDays"
                                   class="form-control" id="dueDays" placeholder="2 days"/>
                        </div>
                        <div class="col-6">
                            <label for="price">Price (ETH)</label>
                            <input v-model="insertedPrice"
                                   class="form-control" id="price" placeholder="0.0017 ETH"/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <button data-dismiss="modal" class="btn btn-lg btn-secondary">Cancel</button>
                    </div>
                    <div class="col-6 text-right">
                        <button @click="postProblem" class="btn btn-lg btn-success">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import web3 from '@/contracts/web3.js';
import problemContract from '@/contracts/problemContract.js'

import problemService from '@/services/problemService.js'
import categoryService from '@/services/categoryService.js'


export default {
    data(){
        return {
            currentUser: null,
            allCategories: [],

            insertedTitle: '',
            insertedDescription: '',
            insertedAttachedFiles: ['example1.pdf', 'example2.pdf'],
            insertedCategoryId: '',
            insertedDueDays: '',
            insertedPrice: '',

            loaded: false
        }
    },

    methods: {

        makeCryptoId(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        async postProblem(){
            //crypto part
            if(!web3) return;

            let crypto_problem_id = this.makeCryptoId()
            const cryptoAccount = (await web3.eth.getAccounts())[0]
            const price_wei = web3.utils.toWei(String(this.insertedPrice), 'ether');
            
            let crypto_failed = false;
            await problemContract.methods
                                 .createProblem(crypto_problem_id)
                                 .send({from: cryptoAccount , value: price_wei})
                                 .catch(() => {crypto_failed = true})
            
            if(crypto_failed) return;

            let problem = {
                crypto_id: crypto_problem_id,
                created_at: new Date().toISOString(),
                title: this.insertedTitle,
                description: this.insertedDescription,
                attached_files: this.insertedAttachedFiles,
                due_days: this.insertedDueDays,
                price_eth: this.insertedPrice,
                category_id: this.insertedCategoryId,
                buyer_id: this.currentUser._id,
                current_solver_id: null,
                status: "unsolved"
            }
            
            const data = {data: problem}
            const response = await problemService.postProblem(data)
            if(response.status == 200){
                let closeBtn = document.getElementById("closeBtn")
                closeBtn.click()

                problem._id = response.data.id

                this.$emit("successfulPost", problem._id)
            }
            this.resetState()
        },

        resetState(){
            this.insertedTitle = ''
            this.insertedDescription = ''
            this.insertedAttachedFiles = ['example1.pdf', 'example2.pdf']
            this.insertedCategoryId = ''
            this.insertedDueDays = ''
            this.insertedPrice = ''
        }
    },

    beforeMount(){

    },

    async mounted(){
        this.currentUser = JSON.parse(localStorage.getItem('user'))
        const response = await categoryService.getAllCategories()
        this.allCategories = response.data

        this.loaded = true
    }
}
</script>

<style lang="scss" scoped>
.darkGreenBackground{
    background-color: #43896D;
    color: white;
}

label{
    font-size:18px;
    font-weight: bold;
}
</style>