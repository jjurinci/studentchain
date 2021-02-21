<template>
<div v-if="loaded" class="container text-center mt-5">
    <h4>Review: <b>{{problem.title}} - </b> <b>($5) {{problem.price_eth}} ETH</b> </h4>
    <h5 class="mt-3"><i>Solved by: {{solutionToReview.solver.username}} | 4.7/5 with 12 problems</i></h5>

    <form class="w-50 mx-auto mt-4" onsubmit="return false;">
        <div class="form-group">
            <label for="solutionText" style="font-size:22px;"><b>Solution text</b></label>
            <textarea readonly rows="10" class="form-control" id="solutionText"
                      style="background-color: white; color: #32373B"
                      :value="solutionToReview.solution_text">
            </textarea>
        </div>
        
        <div class="form-group text-center">
            <p class="mt-3"><i>Attached files:</i></p>
            <p v-for="file in solutionToReview.attached_files" :key="file">
                <i class="far fa-file-pdf mr-1" style="font-size:25px;"></i>
                {{file}}
            </p>
        </div>

        <div class="form-group mt-4">
            <RejectSolutionPopup/>
            <button data-toggle="modal" data-target="#RejectSolutionModal"
                    class="btn btn-lg btn-secondary mr-5">REJECT</button>
            <router-link to="/transaction_approved"
                         class="btn btn-lg btn-success">APPROVE</router-link>
        </div>
    </form>
</div>
</template>

<script>
import problemService from "@/services/problemService.js"
import solutionService from '@/services/solutionService.js'
import RejectSolutionPopup from '../BuyerMode/RejectSolutionPopup.vue'

export default {
    components:{
        RejectSolutionPopup,
    },
    data(){
        return {
            loaded: false,
            problem: null,
            solutionToReview: null
        }
    },

    async mounted(){
        const problem_id = this.$route.params.problem_id
        this.problem    = await problemService.getProblemById(problem_id)
        const solutions = await solutionService.getSolutionsByProblemId(problem_id)

        //@TODO: Clean up later, solution with latest created_at_date should be selected
        //       Not the latest in the array
        this.solutionToReview = solutions[solutions.length-1]
        this.loaded = true
    }
}
</script>

<style lang="scss" scoped>

</style>