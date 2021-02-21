<template>
    <div class="container-fluid p-0">
        <CategoriesNavbar/>
        <ButtonToolbar/>        

        <div class="row ml-5 mr-5 mt-5">
            <div v-for="problem in problems" :key="problem.id" class="col-4 mb-5">
                <ProblemCard :problem="problem"/>
            </div>
        </div>
    </div>
</template>

<script>
import CategoriesNavbar from '@/components/Marketplace/CategoriesNavbar.vue'
import ProblemCard from '@/components/Marketplace/ProblemCard.vue'
import ButtonToolbar from '@/components/Marketplace/ButtonToolbar.vue'

import problemService from '@/services/problemService.js'

export default {
    name: "Marketplace",
    components: {
        CategoriesNavbar,
        ProblemCard,
        ButtonToolbar,
    },

    data(){
        return{
            problems: []
        }
    },

    async mounted(){
        this.problems = await problemService.getAllProblems()
    }
}
</script>

<style lang="scss" scoped>

</style>