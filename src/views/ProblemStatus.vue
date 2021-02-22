<template>
    <div class="container">
        <ButtonToolbarStatus @ChangeView = "handleChangeView" @ChangeActive = "handleChangeActive"/>
        <SolverModeTable v-if="mode == 'solver'" :active="active"/>
        <BuyerModeTable  v-if="mode == 'buyer'"  :active="active"/>
    </div>
</template>

<script>
import ButtonToolbarStatus from "../components/ProblemStatus/ButtonToolbarStatus.vue"
import SolverModeTable from "../components/ProblemStatus/SolverMode/SolverModeTable.vue"
import BuyerModeTable from "../components/ProblemStatus/BuyerMode/BuyerModeTable.vue"
export default {
    name: "Problem Status",
    components: {
        ButtonToolbarStatus,
        SolverModeTable,
        BuyerModeTable
    },

    data(){
        return {
            mode: "solver",
            active: "pending"
        }
    },
    methods: {
        handleChangeView(mode){
            this.mode = mode
        },
        handleChangeActive(active){
            this.active = active
        }
    }
}
</script>

<style lang="scss" scoped>

</style>