<template>
<div class="container-fluid p-0 text-center">
    <ProfileNavbar/>
    <h1 class="mt-4">user514</h1>
    <p><i class="fas fa-user" style="font-size:150px;"></i></p>
    <p> Account type: <b>Buyer</b></p>
    <p> Total number of problems: <b>7</b></p>
    <p> Percentage of approved solutions: <b>92%</b></p>
    <p> Rating: <b>4.6/5 with 7 problems</b></p>
</div>
</template>

<script>
import ProfileNavbar from '../components/Profile/ProfileNavbar.vue'
export default {
    components: {
        ProfileNavbar
    }
}
</script>

<style lang="scss" scoped>

</style>