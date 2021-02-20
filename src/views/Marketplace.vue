<template>
    <div class="container-fluid p-0">
        <CategoriesNavbar/>
        <ButtonToolbar/>        

        <div class="row ml-5 mr-5 mt-5">
            <div class="col-4 mb-5"><ProblemCard/></div>
            <div class="col-4 mb-5"><ProblemCard/></div>
            <div class="col-4 mb-5"><ProblemCard/></div>
            <div class="col-4 mb-5"><ProblemCard/></div>
            <div class="col-4 mb-5"><ProblemCard/></div>
            <div class="col-4 mb-5"><ProblemCard/></div>
            <div class="col-4 mb-5"><ProblemCard/></div>
        </div>
    </div>
</template>

<script>
import CategoriesNavbar from '@/components/Marketplace/CategoriesNavbar.vue'
import ProblemCard from '@/components/Marketplace/ProblemCard.vue'
import ButtonToolbar from '@/components/Marketplace/ButtonToolbar.vue'

export default {
    name: "Marketplace",
    components: {
        CategoriesNavbar,
        ProblemCard,
        ButtonToolbar,
    }
}
</script>

<style lang="scss" scoped>

</style>