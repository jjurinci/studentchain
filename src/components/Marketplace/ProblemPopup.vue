<template>
<!-- Modal -->
<div v-if="problem" class="modal fade" :id="'problem' + problem._id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 v-if="currentUser" class="modal-title">By: {{problem.buyer.username}} | Rating: 4.6/5 with 7 problems</h5>
                <button :id="'problem' + problem._id" type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <h4 style="font-weight: bold;">{{problem.title}}</h4>
                <p>{{problem.description}}</p>
                <p class="text-center mt-4"><i>Attached files:</i></p>
                <p v-for="file in problem.attached_files" :key="file" class="text-center mr-4 d-inline">
                    <i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> {{file}}
                </p>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <p class="mb-1 p-0">Due: <b>{{problem.due_days}} days</b></p>
                        <p class="mb-1 p-0">Price: <b> ($3) {{problem.price_eth}} ETH</b></p>
                    </div>
                    <div class="col-6 text-right">
                        <button disabled v-if="$route.path != '/problem_status'"
                                :class="[currentUser && currentUser.account_type == 'solver' ? 'btn btn-lg btn-success' : 'btn btn-lg btn-success disabled']"
                                @click="solveProblem">Solve</button>
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
    name: "Problem Popup",
    props: ["problem"],

    data(){
        return {
            currentUser: null
        }
    },

    methods: {
        async solveProblem(){
            const response = await problemService.getProblemById(this.problem._id)
            const freshProblemFromDB = response.data

            if(freshProblemFromDB.status == "unsolved"){
                //deep copy so deletes don't mess up the DOM
                let cleanedProblem = JSON.parse(JSON.stringify(this.problem)); 
                
                delete cleanedProblem.buyer
                delete cleanedProblem.current_solver
                delete cleanedProblem.category

                cleanedProblem.current_solver_id = this.currentUser._id
                cleanedProblem.status = "being_solved"

                let doc = {data: cleanedProblem}
                
                const response = await problemService.updateProblem(cleanedProblem._id, doc)
                if(response.status == 200){
                    const delay = async ms => new Promise(res => setTimeout(res, ms));
                    await delay(500)

                    let closeBtn = document.getElementById('problem' + cleanedProblem._id)
                    closeBtn.click()

                    this.$emit("popupReservedProblemEvent", cleanedProblem._id)
                }
            } 
        } 
    },

    mounted(){
        this.currentUser = JSON.parse(localStorage.getItem('user'))
    }
}
</script>

<style lang="scss" scoped>
.darkGreenBackground{
    background-color: #43896D;
    color: white;
}

.disabled{
  background-color: lightgray !important;
  border: 1px solid lightgray !important;
  color: gray !important;
  pointer-events: none !important;
  cursor: not-allowed !important;
}
</style>