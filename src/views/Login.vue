<template>
    <div class="container">
        <h1 class="text-center mt-4">Login</h1>
        <form class="w-50 text-center mx-auto mt-4" onsubmit="return false;">
            <div class="form-group">
                <label for="username">Enter username:</label>
                <input v-model="insertedUsername"
                       class="form-control" type="text" id="username" placeholder="Your username"/>
            </div>

            <div class="form-group">
                <label for="password">Enter password:</label>
                <input v-model="insertedPassword"
                       class="form-control" type="password" id="password" placeholder="Your password"/>
            </div>

            <div class="form-group text-center">
                <button @click="login" class="btn btn-lg btn-secondary">Login</button>
                <p class="mt-4" style="color: red;">{{feedback}}</p>
            </div>
        </form>
    </div>
</template>

<script>
import userService from '../services/userService.js'

export default {
    data(){
        return{
            insertedUsername: '',
            insertedPassword: '',
            feedback: ''
        }
    },

    methods: {
        async login(){
            try{
                let user = {
                    username: this.insertedUsername,
                    password: this.insertedPassword
                }
                const data = {data: user}
                const response = await userService.login(data)                

                let loggedInUser = response.data.user
                loggedInUser.token = response.token
                localStorage.setItem("user", JSON.stringify(loggedInUser))

                this.$router.push('/')
            }catch(err){
                this.feedback = err.response.data.message
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>