<template>
<div v-if="currentUser" class="row mt-4 ml-5 mr-5">
    <div class="col-4">
        <button @click="changeActive('active')"
                :class="[currentActive == 'active' ? 'btn btn-lg btn-secondary mr-2': 'inactive btn btn-lg btn-secondary mr-2']">
            Pending
        </button>
        
        <button @click="changeActive('done')"
                :class="[currentActive == 'done' ? 'btn btn-lg btn-secondary mr-2': 'inactive btn btn-lg btn-secondary mr-2']">
            Done
        </button>
    </div>
    
    <div class="col-4"></div>
    
    <div class="col-4">
        <div class="row">
            <div class="col-6 text-center">
                <button v-if="currentUser.account_type == 'solver'"
                        @click="changeView('solver')"
                        :class="[currentMode == 'solver' ? 'btn btn-lg btn-secondary mr-2' : 'inactive btn btn-lg btn-secondary mr-2' ]"
                        style="white-space:nowrap;">Solver mode</button>    

                <small v-if="currentUser.account_type == 'solver'"
                       style="color: gray;">Problems that you are solving.</small>
            </div>
            <div class="col-6 text-center">
                <button @click="changeView('buyer')"
                        :class="[currentMode == 'buyer' ? 'btn btn-lg btn-secondary mr-2' : 'inactive btn btn-lg btn-secondary mr-2' ]"
                        style="white-space:nowrap;">Buyer mode</button>
                <small style="color: gray;">Problems that others are solving for you.</small>
            </div>
        </div>
    </div>        
</div>
</template>

<script>
import problemService from '@/services/problemService.js'
export default {
    data(){
        return {
            currentUser: null,
            currentMode: '',
            currentActive: 'active',

            problemsSolvedByCurrentUser: [],
            problemsBoughtByCurrentUser: []
        }
    },

    methods: {
        changeView(mode){
            this.currentMode = mode
            this.$emit('ChangeView', mode)
        },
        changeActive(active){
            this.currentActive = active
            this.$emit('ChangeActive', active)
        }
    },

    async mounted(){
        this.currentUser = JSON.parse(localStorage.getItem('user'))
        this.currentMode = this.currentUser.account_type
        this.changeView(this.currentMode)

        if(this.currentMode == 'buyer'){
            this.problemsBoughtByCurrentUser = await problemService.getProblemsByBuyerId(this.currentUser._id)
        }
    }
}
</script>

<style lang="scss" scoped>
.inactive{
    background-color: white !important;
    color: black !important;
}

</style>