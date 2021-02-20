<template>
<!-- Modal -->
<div class="modal fade" id="PostProblemModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">Post a problem</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
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
                        <option v-for="category in allCategories" :key="category.id" :value="category.id">
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
                            <label for="price">Price</label>
                            <input v-model="insertedPrice"
                                   class="form-control" id="price" placeholder="0.0017 ETH ($3)"/>
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
import problemService from '@/services/problemService.js'
import categoryService from '@/services/categoryService.js'

export default {
    data(){
        return {
            allCategories: [],

            insertedTitle: '',
            insertedDescription: '',
            insertedAttachedFiles: ['example1.pdf', 'example2.pdf'],
            insertedCategoryId: '',
            insertedDueDays: '',
            insertedPrice: '',
        }
    },

    methods: {
        makeid(l)
        {
            var text = "";
            var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i=0; i < l; i++ )  
                text += char_list.charAt(Math.floor(Math.random() * char_list.length));    
            return text;
        },

        async postProblem(){
            let problem = {
                id: this.makeid(16),
                created_at: new Date().toISOString(),
                title: this.insertedTitle,
                description: this.insertedDescription,
                attached_files: this.insertedAttachedFiles,
                due_days: this.insertedDueDays,
                price: this.insertedPrice,
                category_id: this.insertedCategoryId,
                buyer_id: "randomBuyerIdChangeLater",  //@TODO: Change later when login is done
                solver_id: null,
                status: "unsolved"
            }
            console.log(problem.category_id)
            
            const data = {data: problem}
            const response = await problemService.postProblem(data)
            console.log(response)
        }
    },

    async mounted(){
        const response = await categoryService.getAllCategories()
        this.allCategories = response.data
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