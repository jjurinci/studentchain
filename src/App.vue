<template>
  <div class="container-fluid p-0">
    <UpperNavbar/>
    <router-view/>
  </div>
</template>

<script>
import UpperNavbar from '@/components/UpperNavbar.vue'

export default {
  name: 'App',
  components:{
    UpperNavbar,
  }
}
</script>

<style lang="scss">
#app {
  color: #32373B;
  font-family: Tahoma ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>