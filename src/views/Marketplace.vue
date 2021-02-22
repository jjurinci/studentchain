<template>
    <div class="container-fluid p-0">
        <CategoriesNavbar v-if="allProblems.length > 0"
                          :allProblems="allProblems"
                          @changeCategoryEvent="changeCategoryHandler"/>

        <ButtonToolbar @successfulPost="handleSuccessfulPost"/>        

        <div class="row ml-5 mr-5 mt-5">
            <div v-for="problem in filteredByCategoryProblems" :key="problem._id" class="col-4 mb-5">
                <ProblemCard @reservedProblemEvent="handleReservedProblem" :problem="problem" :currentUser="currentUser"/>
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
            allProblems: [],
            filteredByCategoryProblems: [],
            currentUser: null
        }
    },

    methods: {
        // @TODO: See more needs to be updated later. For now it returns all problems.
        changeCategoryHandler(category_id){
            if(category_id == 'all' || category_id == 'see_more') 
                this.filteredByCategoryProblems = this.allProblems
            else
                this.filteredByCategoryProblems = this.allProblems.filter(problem => problem.category_id == category_id)
        },

        // New POST request from the database is necessary because FK's need to be joined
        async handleSuccessfulPost(problem_id){
            const response = await problemService.getProblemById(problem_id)
            const problem = response.data
            this.allProblems.push(problem)
            this.$forceUpdate()
        },

        async handleReservedProblem(problem_id){
            const index = this.allProblems.findIndex(problem => problem._id == problem_id)
            this.allProblems.splice(index, 1)
        }
    },

    async mounted(){
        this.currentUser = JSON.parse(localStorage.getItem('user'))
        this.allProblems = (await problemService.getAllProblems())
                           .filter(problem => problem.status == "unsolved")

        this.filteredByCategoryProblems = this.allProblems
    }
}
</script>

<style lang="scss" scoped>

</style>