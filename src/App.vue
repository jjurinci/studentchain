<template>
  <div class="container-fluid p-0">
    <UpperNavbar/>
    <LowerNavbar/>
    <router-view/>
  </div>
</template>

<script>
import UpperNavbar from '@/components/UpperNavbar.vue'
import LowerNavbar from '@/components/LowerNavbar.vue'

export default {
  name: 'App',
  components:{
    UpperNavbar,
    LowerNavbar
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