<template>
    <div class="container">
        <h1 class="text-center mt-4">Register</h1>
        <form class="w-50 text-center mx-auto mt-4" onsubmit="return false;">
            <div class="form-group">
                <label for="email">Email:</label>
                <input v-model="insertedEmail"
                       class="form-control" type="email" id="email" placeholder="Your email"/>
            </div>

            <div class="form-group">
                <label for="username">Username:</label>
                <input v-model="insertedUsername"
                       class="form-control" type="username" id="username" placeholder="Your username"/>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input v-model="insertedPassword"
                       class="form-control" type="password" id="password" placeholder="Your password"/>
            </div>

            <div class="form-group">
                <label for="accountType">Account type:</label>
                <select v-model="insertedAccountType" class="form-control" id="accountType">
                    <option value="buyer" selected>Buyer (you buy solutions)</option>
                    <option value="solver">Solver (you solve problems)</option>
                </select>
            </div>

            <div class="form-group text-center">
                <button @click="register" class="btn btn-lg btn-secondary">Register</button>
                <p class="mt-4" style="color:red;">{{feedback}}</p>
            </div>
        </form>
    </div>
</template>

<script>
import userService from '../services/userService.js'
export default {
    data(){
        return{
            insertedEmail: '',
            insertedUsername: '',
            insertedPassword: '',
            insertedAccountType: '',
            feedback: ''
        }
    },

    methods: {
        makeid(l)
        {
            var text = "";
            var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i=0; i < l; i++ )  
                text += char_list.charAt(Math.floor(Math.random() * char_list.length));    
            return text;
        },

        async register(){
            try{
                let user = {
                    id: this.makeid(16),
                    email: this.insertedEmail,
                    username: this.insertedUsername,
                    password: this.insertedPassword,
                    account_type: this.insertedAccountType
                }

                const data = {data: user}
                const response = await userService.register(data)
                
                let loggedInUser = response.data.user
                loggedInUser.token = response.token
                localStorage.setItem("user", JSON.stringify(loggedInUser))

                this.$router.push({name: 'Marketplace'}, () => this.$router.go(0))
            }
            catch(err){
                this.feedback = err.response.data.message
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>