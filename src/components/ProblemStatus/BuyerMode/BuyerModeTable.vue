<template>
<table class="table text-center mt-5">
  <EditProblemPopup/>
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
          <button class="btn btn-secondary" data-toggle="modal" data-target="#EditProblemModal">
            Convert images in Java
          </button>
      </td>
      <td>Not being solved</td>
      <td>($5) 0.0028 ETH</td>
      <td>3 days</td>
      <td></td>
    </tr>
    <tr>
      <td>
          <button class="btn btn-secondary" data-toggle="modal" data-target="#EditProblemModal">
            Differentiation problems
          </button>
      </td>
      <td>Being solved by james54</td>
      <td>($3) 0.0017 ETH</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
          <button class="btn btn-secondary" data-toggle="modal" data-target="#EditProblemModal">
            Permutations proof
          </button>
      </td>
      <td>Delivered</td>
      <td>($5) 0.0028 ETH</td>
      <td></td>
      <td><router-link to="/review_solution" class="btn btn-lg btn-success">Review</router-link></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import EditProblemPopup from "../BuyerMode/EditProblemPopup.vue"
export default {
    name: "Buyer Mode Table",
    components: {
        EditProblemPopup
    }
}
</script>

<style lang="scss" scoped>
td{
    vertical-align: middle;
}
</style>