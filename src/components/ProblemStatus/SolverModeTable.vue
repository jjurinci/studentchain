<template>
<table class="table text-center mt-5">
  <ProblemPopup/>
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
    <tr>
      <td>
          <button class="btn btn-secondary" data-toggle="modal" data-target="#ProblemPopupModal">
            Turn FA to right-linear grammar
          </button>
      </td>
      <td>Being solved</td>
      <td>($3) 0.0017 ETH</td>
      <td>2 days</td>
      <td><button class="btn btn-lg btn-success">Deliver</button></td>
    </tr>
    <tr>
      <td>
          <button class="btn btn-secondary" data-toggle="modal" data-target="#ProblemPopupModal">
            Proof that sequence converges
          </button>
      </td>
      <td>Being solved</td>
      <td>($5) 0.0028 ETH</td>
      <td>3 days</td>
      <td><button class="btn btn-lg btn-success">Deliver</button></td>
    </tr>
    <tr>
      <td>
          <button class="btn btn-secondary" data-toggle="modal" data-target="#ProblemPopupModal">
            C++ problems
          </button>
      </td>
      <td>Sent for review</td>
      <td>($5) 0.0028 ETH</td>
      <td></td>
      <td><button class="btn btn-lg btn-success">See delivered</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import ProblemPopup from "../Marketplace/ProblemPopup.vue"
export default {
    name: "Solver Mode Table",
    components: {
        ProblemPopup
    }
}
</script>

<style lang="scss" scoped>
td{
    vertical-align: middle;
}
</style>