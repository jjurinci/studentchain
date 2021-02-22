<template>
    <div class="container-fluid p-0">
        <CategoriesNavbar v-if="allProblems.length > 0"
                          :allProblems="allProblems"
                          @changeCategoryEvent="changeCategoryHandler"/>

        <ButtonToolbar @successfulPost="handleSuccessfulPost"/>        

        <div class="row ml-5 mr-5 mt-5">
            <div v-for="problem in filteredByCategoryProblems" :key="problem._id" class="col-4 mb-5">
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
            allProblems: [],
            filteredByCategoryProblems: []
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

        async handleSuccessfulPost(problem_id){
            const response = await problemService.getProblemById(problem_id)
            const problem = response.data
            this.allProblems.push(problem)
            this.$forceUpdate()
        }
    },

    async mounted(){
        this.allProblems = await problemService.getAllProblems()
        this.filteredByCategoryProblems = this.allProblems
    }
}
</script>

<style lang="scss" scoped>

</style>