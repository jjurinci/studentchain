<template>
<div class="row mt-4 ml-5 mr-5">
  <div class="col-2">
    <PostProblemPopup @successfulPost="successfulPost"/>
    <button class="btn btn-lg btn-success" data-toggle="modal" data-target="#PostProblemModal">
      Post a problem
    </button>
  </div>
  
  <div class="col-6 text-center"></div>
  
  <div class="col-4 text-right">
    <p style="font-family: Trebuchet MS">Alpha version of Studentchain.<br/>Not production ready.</p>
    <!--<button class="btn btn-lg btn-secondary mr-2">Filter</button>
    <button class="btn btn-lg btn-secondary">Sort</button> -->
  </div>
</div>
</template>

<script>
import PostProblemPopup from '../Marketplace/PostProblemPopup.vue'
export default {
  name: "Button Toolbar",
  components: {
    PostProblemPopup
  },

  methods: {
    successfulPost(problem_id){
      this.$emit("successfulPost", problem_id)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>