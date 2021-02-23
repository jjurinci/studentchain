<template>
<div class="card w-100">
  <div class="card-header">
    <router-link :to="{ name:'Profile', params: {user_id: problem.buyer._id} }" style="color: inherit;">
      By: {{problem.buyer.username}} | Rating: 4.6/5 with 8 problems
    </router-link>
  </div>
  
  <div class="card-body text-center mb-3">
    <h5 class="card-title">{{problem.title}}</h5>
    <p class="card-text mb-2">{{problem.description}}</p>
    <i v-if="problem.attached_files.length>0" class="card-text">Has attached files.</i>
  </div>

  <div class="card-footer">
    <div class="row">
        <div class="col-6 text-left" style="font-size:14px;">
            <p class="mb-1 p-0">Due: <b>{{problem.due_days}} days</b></p>
            <p class="mb-1 p-0">Price: <b> {{problem.price_eth}} ETH</b></p>
        </div>
        <div class="col-6 text-right align-middle">
            <ProblemPopup @popupReservedProblemEvent="reservedProblemEvent" :problem="problem"/>
            <SolveProblemModal :problem="problem"/>
            
            <button class="btn btn-secondary mr-2" data-toggle="modal" :data-target="'#problem' + problem._id" >Details</button>
            <button :class="[currentUser && currentUser.account_type == 'solver' && currentUser._id != problem.buyer_id ? 'btn btn-success' : 'btn btn-success disabled']"
                    @click="solveProblem()">Solve</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import web3 from '@/contracts/web3.js';
import problemContract from '@/contracts/problemContract.js'

import problemService from '@/services/problemService.js'

import ProblemPopup from '../Marketplace/ProblemPopup.vue'
import SolveProblemModal from '../Marketplace/SolveProblemPopup.vue'

export default {
    name: "Problem Card",
    props: ['problem', 'currentUser'],
    components: {
        ProblemPopup,
        SolveProblemModal
    },

    data(){
      return {
        loaded: false
      }
    },

    methods: {
      async solveProblem(){
        if(!web3) return;
        
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

          //crypto part
          let crypto_problem_id = cleanedProblem.crypto_id
          const cryptoAccount = (await web3.eth.getAccounts())[0]
          
          let crypto_failed = false;
          await problemContract.methods
                               .solveProblem(crypto_problem_id)
                               .send({from: cryptoAccount})
                               .catch(() => {crypto_failed = true})
            
          if(crypto_failed) return;

          const response = await problemService.updateProblem(cleanedProblem._id, doc)
          if(response.status == 200){
            /*const delay = async ms => new Promise(res => setTimeout(res, ms));
            await delay(1500)

            let closeBtn = document.getElementById('solve' + cleanedProblem._id)
            closeBtn.click()*/

            this.reservedProblemEvent(cleanedProblem._id)
          }
        } 
      },

      reservedProblemEvent(problem_id){
        this.$emit("reservedProblemEvent", problem_id)
      }
    },

    mounted(){
      this.loaded = true
    }
}
</script>

<style lang="scss" scoped>
.card-header{
    background-color: #404447;
    color: white;
}

.card-footer{
    padding-bottom:5px;
}

.card-title{
    font-size: 21px;
    font-weight: 900;
}

.disabled{
  background-color: lightgray !important;
  border: 1px solid lightgray !important;
  color: gray !important;
  pointer-events: none !important;
  cursor: not-allowed !important;
}

</style>