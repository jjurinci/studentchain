<template>
<nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
        <li @click="changeCategory( {_id: 'all', name:'all'} )"
            :class="[selectedCategory == 'all' ? 'nav-item active' : 'nav-item']">
            <a class="nav-link"> All</a>
        </li>
        
        <li v-for="category in fourCategoriesOnly" :key="category._id"
            @click="changeCategory(category)"
            :class="[selectedCategory == category.name ? 'nav-item active' : 'nav-item']">
            <a class="nav-link"> {{category.name}}</a>
        </li>
        
        <li @click="changeCategory( {_id: 'see_more', name:'see_more'} )"
            :class="[selectedCategory == 'see_more' ? 'nav-item active' : 'nav-item']">
            <a class="nav-link"> See more...</a>
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
import categoryService from '@/services/categoryService.js'

export default {
    name: 'Categories Navbar',
    props: ['allProblems'],

    data(){
        return {
            allCategories: [],
            fourCategoriesOnly: [], //Four categories that will be on UI display 
            selectedCategory: 'all'
        }
    },

    methods: {
        changeCategory(category){
            this.selectedCategory = category.name
            this.$emit('changeCategoryEvent', category._id)
        }
    },

    async mounted(){
        const response = await categoryService.getAllCategories()
        this.allCategories = response.data
        this.fourCategoriesOnly = this.allCategories.slice(0, 4)
    }
}
</script>

<style lang="scss" scoped>
.navbar{
    background-color: #404447;
    font-size:16px;
    font-family: "monospace", "Verdana";
}

.navbar a, .navbar li{
    color: white;
}

.navbar-nav li{
    margin-right: 100px;
    cursor: pointer;
}

.active{
    border-bottom: 1px solid white;
}
</style>