<template>
<div class="card">
  <div class="card-header">
    By: user514 | Rating: 4.6/5 with 7 problems
  </div>
  
  <div class="card-body text-center mb-3">
    <h5 class="card-title">Turn FA to right-linear grammar</h5>
    <p class="card-text mb-2">All details are in the attached files...</p>
    <i class="card-text">Has attached files.</i>
  </div>

  <div class="card-footer">
    <div class="row">
        <div class="col-6 text-left">
            <p class="mb-1 p-0">Due: <b>3 days</b></p>
            <p class="mb-1 p-0">Price: <b> ($3) 0.0017 ETH</b></p>
        </div>
        <div class="col-6 text-right align-middle">
            <ProblemPopup/>
            <SolveProblemModal/>
            <button class="btn btn-secondary mr-2" data-toggle="modal" data-target="#ProblemPopupModal">Details</button>
            <button class="btn btn-success" data-toggle="modal" data-target="#SolveProblemModal">Solve</button>
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
    components: {
        ProblemPopup,
        SolveProblemModal
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