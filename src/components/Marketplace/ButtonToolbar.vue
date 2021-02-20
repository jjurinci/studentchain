<template>
<div class="row mt-4 ml-5 mr-5">
  <div class="col-2">
    <PostProblemPopup/>
    <button class="btn btn-lg btn-success" data-toggle="modal" data-target="#PostProblemModal">Post a problem</button>
  </div>
  <div class="col-8"></div>
  <div class="col-2 text-right">
    <button class="btn btn-lg btn-secondary mr-2">Filter</button>
    <button class="btn btn-lg btn-secondary">Sort</button>
  </div>
</div>
</template>

<script>
import PostProblemPopup from '../Marketplace/PostProblemPopup.vue'
export default {
  name: "Button Toolbar",
  components: {
    PostProblemPopup
  }
};
</script>

<style lang="scss" scoped>
</style>