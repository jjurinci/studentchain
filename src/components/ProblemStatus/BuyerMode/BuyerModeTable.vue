<template>
<table v-if="loaded" class="table text-center mt-5">
  <EditProblemPopup v-for="problem in problemsBoughtByCurrentUser" :key="problem.id" :problem="problem"/>
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
    <tr v-for="problem in problemsBoughtByCurrentUser" :key="problem.id">
      <td>
          <button class="btn btn-secondary" data-toggle="modal" :data-target="'#problemEdit' + problem.id">
            {{problem.title}}
          </button>
      </td>
      <td>{{prettyStatus(problem)}}</td>
      <td>($5) {{problem.price_eth}} ETH</td>
      <td>X days</td>
      <td>
        <router-link v-if="problem.status == 'waiting_for_review'" 
                    :to="{name: 'Review Solution', params: {problem_id: problem.id } }"
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
    components: {
        EditProblemPopup
    },

    data(){
      return {
        currentUser: null,
        problemsBoughtByCurrentUser: [],
        loaded: false
      }
    },

    methods: {
      prettyStatus(problem){
        if(problem.status == 'unsolved') return "Unsolved"
        else if(problem.status == 'being_solved') return "Being solved by " + problem.solver.username 
        else if(problem.status == 'waiting_for_review') return "Waiting for review"
      }
    },

    async mounted(){
      this.currentUser = JSON.parse(localStorage.getItem('user'))
      this.problemsBoughtByCurrentUser = await problemService.getProblemsByBuyerId(this.currentUser.id)
      this.loaded = true
    }
}
</script>

<style lang="scss" scoped>
td{
    vertical-align: middle;
}
</style>