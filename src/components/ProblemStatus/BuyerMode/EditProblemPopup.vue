<template>
<!-- Modal -->
<div v-if="editedProblem" class="modal fade" :id="'problemEdit' + editedProblem._id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">Edit a problem</h5>
                <button :id="'closeModalBtn' + editedProblem._id" type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <form onsubmit="return false;">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input v-model="editedProblem.title" class="form-control" id="title"/>
                    </div>
                     <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="editedProblem.description"
                                  rows="5" class="form-control" id="description"/>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success mr-2">Attach files</button>
                        <small style="color: #B7B5B5;">(max. 5 MB)</small>
                        <p class="text-left mt-3"><i>Attached files:</i></p>
                        <p v-for="file in editedProblem.attached_files" :key="file" class="text-left">
                            X <i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> {{file}}
                        </p>
                    </div>
                    <div class="row mt-4">
                        <div class="col-6">
                            <label for="dueDays">Due days</label>
                            <input v-model="editedProblem.due_days" class="form-control" id="dueDays"/>
                        </div>
                        <div class="col-6">
                            <label for="price">Price (ETH)</label>
                            <input v-model="editedProblem.price_eth" class="form-control" id="price"/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-4 text-left">
                        <button class="btn btn-lg btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    <div class="col-4 text-center">
                        <button @click="deleteProblem()"
                                class="btn btn-lg btn-secondary" style="background-color: black;">Delete</button>
                    </div>
                    <div class="col-4 text-right">
                        <button @click="editProblem()" class="btn btn-lg btn-success">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import problemService from '@/services/problemService.js'
export default {
    name: "Edit Problem Popup",
    props: ["problem"],

    data(){
        return {
            editedProblem: null
        }
    },

    methods:{
        async deleteProblem(){
            const response = await problemService.deleteProblem(this.problem._id)
            
            if(response.status == 200){
                let closeBtn = document.getElementById('closeModalBtn' + this.problem._id)
                closeBtn.click()
                this.$emit('triggerDeleteEvent', this.problem._id)
            }
        },

        async editProblem(){
            //deep copy so deletes don't mess up the DOM
            let cleanedEditedProblem = JSON.parse(JSON.stringify(this.editedProblem));
            
            delete cleanedEditedProblem.buyer
            delete cleanedEditedProblem.current_solver
            delete cleanedEditedProblem.category

            let doc = {data: cleanedEditedProblem}
            const response = await problemService.updateProblem(this.editedProblem._id, doc)
            if(response.status == 200){
                let closeBtn = document.getElementById('closeModalBtn' + this.problem._id)
                closeBtn.click()
            }
        }
    },

    mounted(){
        this.editedProblem = this.problem
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