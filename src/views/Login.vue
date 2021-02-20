<template>
    <div class="container">
        <h1 class="text-center mt-4">Login</h1>
        <form class="w-50 text-center mx-auto mt-4" onsubmit="return false;">
            <div class="form-group">
                <label for="username">Enter username:</label>
                <input class="form-control" type="text" id="username" placeholder="Your username"/>
            </div>

            <div class="form-group">
                <label for="password">Enter password:</label>
                <input class="form-control" type="password" id="password" placeholder="Your password"/>
            </div>

            <div class="form-group text-center">
                <button class="btn btn-lg btn-secondary">Login</button>
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