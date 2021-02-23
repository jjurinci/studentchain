<template>
<div v-if="loaded" class="container text-center mt-5">
    <h4>Deliver: <b>{{problem.title}}</b></h4>
    <h5 class="mt-3"><i>By: {{problem.buyer.username}} | 4.6/5 with 7 problems</i></h5>

    <form onsubmit="return false;" class="w-50 mx-auto mt-4">
        <div class="form-group">
            <label for="solutionText" style="font-size:22px;"><b>Solution text</b></label>
            <textarea v-model="insertedSolutionText"
                      rows="10" class="form-control" id="solutionText"
                      placeholder="Provide a solution here or a message to the buyer if your solution is in attached files."/>
        </div>
        <div class="form-group">
            <button class="btn btn-lg btn-success">Attach files</button>
            <p class="mt-2" style="color: #B7B5B5;">(max. 5 MB)</p>
        </div>

        <div class="form-group">
            <button @click="sendForReview" class="btn btn-lg btn-success">SEND FOR REVIEW</button>
        </div>
    </form>
</div>
</template>

<script>
import problemService from '@/services/problemService.js'
import solutionService from '@/services/solutionService.js'

export default {
    data(){
        return{
            currentUser: null,
            problem: null,
            loaded: false,

            insertedSolutionText: ''
        }
    },

    methods: {
        async sendForReview(){
            let solution = {
                created_at : new Date().toISOString(),
                solution_text: this.insertedSolutionText,
                solver_id : this.currentUser._id,
                attached_files : ["solution1.pdf", "solution2.txt", "solution3.zip"],
                problem_id : this.problem._id,
                review_id : null
            }

            const doc = {data: solution}
            await solutionService.postSolution(doc)
            this.$router.push("/problem_status")

        }
    },

    async mounted(){
        this.currentUser = JSON.parse(localStorage.getItem('user'))
        
        const problem_id = this.$route.params.problem_id
        const response   = await problemService.getProblemById(problem_id)
        this.problem     = response.data
        this.loaded = true
    }
}
</script>

<style lang="scss" scoped>

</style>