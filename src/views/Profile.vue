<template>
<div v-if="loaded" class="container-fluid p-0 text-center">
    <ProfileNavbar v-if="currentProfile._id == loggedInUser._id"/>
    <h1 class="mt-4">{{currentProfile.username}}</h1>
    <p><i class="fas fa-user" style="font-size:150px;"></i></p>
    <p> Account type: <b>{{currentProfile.account_type}}</b></p>
    <p> Total number of problems: <b>{{currentProfile.total_number_problems}}</b></p>
    <p> Percentage of approved solutions: <b>{{calculatePercentage(currentProfile)}}</b></p>
    <p> Rating: <b>4.6/5 with {{currentProfile.total_number_problems}} problems</b></p>
</div>
</template>

<script>
import userService from '../services/userService.js'
import ProfileNavbar from '../components/Profile/ProfileNavbar.vue'

export default {
    components: {
        ProfileNavbar
    },

    data(){
        return{
            loggedInUser: null,
            currentProfile: null,
            loaded: false
        }
    },

    methods: {
        calculatePercentage(profile){
            let total_problems    = Number(profile.total_number_problems)
            if(total_problems == 0) return "0%"

            let approved_problems = Number(profile.approved_problems)
            let percentage = Math.floor((approved_problems/total_problems) * 100) + "%"
            return percentage
        }
    },

    async mounted(){
        this.loggedInUser = JSON.parse(localStorage.getItem('user'))
        const currentProfileId = this.$route.params.user_id

        if(this.loggedInUser._id == currentProfileId) this.currentProfile = this.loggedInUser
        else this.currentProfile = await userService.getUserById(currentProfileId)

        this.loaded=true
    }
}
</script>

<style lang="scss" scoped>

</style>