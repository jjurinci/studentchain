<template>
<table v-if="loaded" class="table text-center mt-5">
  <ProblemPopup v-for="problem in problemsSolvedByCurrentUser" :key="problem._id" :problem="problem"/>
  <SeeDeliveredSolutionPopup v-for="solution in solutionsByCurrentUser" :key="solution._id" :solution="solution"/>

  <thead class="thead-dark">
    <tr>
      <th scope="col">Problem</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
      <th scope="col">Due</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="problem in problemsSolvedByCurrentUser" :key="problem._id">
      <td>
          <button class="btn btn-secondary" data-toggle="modal" :data-target="'#problem'+problem._id">
            {{problem.title}}
          </button>
      </td>
      <td>{{prettyStatus(problem.status)}}</td>
      <td>($3) {{problem.price_eth}} ETH</td>
      <td>{{problem.due_days}} days</td>
      <td>
        <router-link v-if="problem.status != 'sent_for_review'"
                     :to="{name: 'Deliver Solution', params: {problem_id: problem._id}}"
                     class="btn btn-lg btn-success">
              Deliver
        </router-link>
                
        <button v-if="problem.status == 'sent_for_review'" class="btn btn-lg btn-success"
                     data-toggle="modal" :data-target="'#solution' + latestSolutionToProblem_IDs[problem._id]">
              See delivered
        </button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import problemService from '@/services/problemService.js'
import solutionService from '@/services/solutionService.js'

import ProblemPopup from "@/components/Marketplace/ProblemPopup.vue"
import SeeDeliveredSolutionPopup from "@/components/ProblemStatus/SolverMode/SeeDeliveredSolutionPopup.vue"

export default {
    name: "Solver Mode Table",
    components: {
        ProblemPopup,
        SeeDeliveredSolutionPopup
    },

    data(){
      return{
          currentUser: null,
          problemsSolvedByCurrentUser: [],
          activeSolutionsByCurrentUser: [],

          latestSolutionToProblem_IDs: {},
          loaded: false
      }
    },

    methods: {
      prettyStatus(statusFromDB){
        if(statusFromDB == 'being_solved') return 'Being solved'
        else if(statusFromDB == 'sent_for_review') return 'Sent for review'
      },
    },

    async mounted(){
        this.currentUser = JSON.parse(localStorage.getItem('user'))
        this.problemsSolvedByCurrentUser = await problemService.getProblemsByCurrentSolverId(this.currentUser._id)

        const problem_ids = this.problemsSolvedByCurrentUser
                                .filter(problem => problem.status == 'sent_for_review')
                                .map(problem => problem._id)

        this.solutionsByCurrentUser = await solutionService.getSolutionsByMultipleProblemIds({data: problem_ids})        

        //@TODO: Change later, latest solutions must be the solution with latest created_at_date
        this.solutionsByCurrentUser.forEach(solution => {
          this.latestSolutionToProblem_IDs[solution.problem_id] = solution._id
        })

        this.loaded=true
    }
}
</script>

<style lang="scss" scoped>
td{
    vertical-align: middle;
}
</style>