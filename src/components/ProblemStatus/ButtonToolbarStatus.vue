<template>
<div class="row mt-4 ml-5 mr-5">
    <div class="col-4">
        <button class="btn btn-lg btn-secondary mr-2">Active</button>
        <button class="btn btn-lg btn-secondary">Past</button>
    </div>
    
    <div class="col-4"></div>
    
    <div class="col-4">
        <div class="row">
            <div class="col-6 text-center">
                <button @click="changeView('solver')"
                        class="btn btn-lg btn-secondary mr-2" style="white-space:nowrap;">Solver mode</button>    
                <small style="color: gray;">Problems that you are solving.</small>
            </div>
            <div class="col-6 text-center">
                <button @click="changeView('buyer')"
                        class="btn btn-lg btn-secondary" style="white-space:nowrap;">Buyer mode</button>
                <small style="color: gray;">Problems that others are solving for you.</small>
            </div>
        </div>
    </div>        
</div>
</template>

<script>
export default {
    methods: {
        changeView(mode){
            this.$emit('ChangeView', mode)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>