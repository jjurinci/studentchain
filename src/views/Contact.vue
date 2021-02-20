<template>
    <div class="container">
        <h1 class="text-center mt-4">Contact Us</h1>
        <form class="w-50 text-center mx-auto mt-4" onsubmit="return false;">
            <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" type="email" id="email" placeholder="Your email"/>
            </div>

            <div class="form-group">
                <label for="description">Describe the situation:</label>
                <textarea rows="10" class="form-control" id="description"
                      placeholder="Situation description."/>
            </div>
            <div class="form-group text-center">
                <button class="btn btn-lg btn-secondary">Contact</button>
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