<template>
<div class="card">
  <div class="card-header">
    <router-link :to="{ name:'Profile', params: {user_id: problem.buyer._id} }" style="color: inherit;">
      By: {{problem.buyer.username}} | Rating: 4.6/5 with {{problem.buyer.total_number_problems}} problems
    </router-link>
  </div>
  
  <div class="card-body text-center mb-3">
    <h5 class="card-title">{{problem.title}}</h5>
    <p class="card-text mb-2">{{problem.description}}</p>
    <i v-if="problem.attached_files.length>0" class="card-text">Has attached files.</i>
  </div>

  <div class="card-footer">
    <div class="row">
        <div class="col-6 text-left">
            <p class="mb-1 p-0">Due: <b>{{problem.due_days}} days</b></p>
            <p class="mb-1 p-0">Price: <b> ($3) {{problem.price_eth}} ETH</b></p>
        </div>
        <div class="col-6 text-right align-middle">
            <ProblemPopup      :problem="problem"/>
            <SolveProblemModal :problem="problem"/>
            
            <button class="btn btn-secondary mr-2" data-toggle="modal" :data-target="'#problem' + problem._id" >Details</button>
            <button class="btn btn-success" data-toggle="modal" :data-target="'#solve' + problem._id">Solve</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import ProblemPopup from '../Marketplace/ProblemPopup.vue'
import SolveProblemModal from '../Marketplace/SolveProblemPopup.vue'
export default {
    name: "Problem Card",
    props: ['problem'],
    components: {
        ProblemPopup,
        SolveProblemModal
    },
    methods: {
      
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

</style>