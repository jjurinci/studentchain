<template>
<table v-if="loaded" class="table text-center mt-5">
  <EditProblemPopup v-for="problem in problemsBoughtByCurrentUser" :key="problem._id" :problem="problem"
                    @triggerDeleteEvent="handleDeleteProblem"/>
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
    <tr v-for="problem in problemsBoughtByCurrentUser" :key="problem._id">
      <td>
          <button class="btn btn-secondary" data-toggle="modal" :data-target="'#problemEdit' + problem._id">
            {{problem.title}}
          </button>
      </td>
      <td>{{prettyStatus(problem)}}</td>
      <td>($5) {{problem.price_eth}} ETH</td>
      <td>X days</td>
      <td>
        <router-link v-if="problem.status == 'sent_for_review'" 
                    :to="{name: 'Review Solution', params: {problem_id: problem._id } }"
                    class="btn btn-lg btn-success">Review solution</router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import problemService from '@/services/problemService.js'
import EditProblemPopup from "../BuyerMode/EditProblemPopup.vue"
export default {
    name: "Buyer Mode Table",
    props: ["active"],
    components: {
        EditProblemPopup
    },

    data(){
      return {
        currentUser: null,
        allProblemsBoughtByUser: [], 
        problemsBoughtByCurrentUser: [],
        loaded: false
      }
    },

    methods: {
      prettyStatus(problem){
        if(problem.status == 'unsolved') return "Unsolved"
        else if(problem.status == 'being_solved') return "Being solved by " + problem.solver.username 
        else if(problem.status == 'sent_for_review') return "Waiting for review"
        else if(problem.status == 'approved') return "Approved"
        else if(problem.status == 'rejected') return "Rejected"
      },

      async handleDeleteProblem(problem_id){
          let index = this.problemsBoughtByCurrentUser.findIndex(prob => prob._id == problem_id)
          this.problemsBoughtByCurrentUser.splice(index, 1)
      }
    },

    async mounted(){
      this.currentUser = JSON.parse(localStorage.getItem('user'))
      this.problemsBoughtByCurrentUser = await problemService.getProblemsByBuyerId(this.currentUser._id)

      this.pendingProblems = this.problemsBoughtByCurrentUser.filter(problem => problem.status != 'approved' && problem.status != 'rejected')
      this.doneProblems    = this.problemsBoughtByCurrentUser.filter(problem => problem.status == 'approved' || problem.status == 'rejected')

      this.problemsBoughtByCurrentUser = this.pendingProblems;

      this.loaded = true
    },

    watch: {
      active: function(val) {
        if(val == 'active') this.problemsBoughtByCurrentUser = this.pendingProblems
        else if(val == 'done') this.problemsBoughtByCurrentUser = this.doneProblems
      }
    }
}
</script>

<style lang="scss" scoped>
td{
    vertical-align: middle;
}
</style>