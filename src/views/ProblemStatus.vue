<template>
    <div class="container">
        <ButtonToolbarStatus @ChangeView = "handleChangeView"/>
        <SolverModeTable v-if="mode == 'solver'"/>
        <BuyerModeTable  v-if="mode == 'buyer'"/>
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
        }
    },
    methods: {
        handleChangeView(mode){
            this.mode = mode
        }
    }
}
</script>

<style lang="scss" scoped>

</style>