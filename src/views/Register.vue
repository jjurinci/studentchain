<template>
    <div class="container">
        <h1 class="text-center mt-4">Register</h1>
        <form class="w-50 text-center mx-auto mt-4" onsubmit="return false;">
            <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" type="email" id="email" placeholder="Your email"/>
            </div>

            <div class="form-group">
                <label for="username">Username:</label>
                <input class="form-control" type="username" id="username" placeholder="Your username"/>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input class="form-control" type="password" id="password" placeholder="Your password"/>
            </div>

            <div class="form-group">
                <label for="accountType">Account type:</label>
                <select class="form-control" id="accountType">
                    <option value="buyer" selected>Buyer (you buy solutions)</option>
                    <option value="solver">Solver (you solve problems)</option>
                </select>
            </div>

            <div class="form-group text-center">
                <button class="btn btn-lg btn-secondary">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>