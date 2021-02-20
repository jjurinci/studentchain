<template>
    <div class="container">
        <ButtonToolbarStatus/>
        <SolverModeTable/>
    </div>
</template>

<script>
import ButtonToolbarStatus from "../components/ProblemStatus/ButtonToolbarStatus.vue"
import SolverModeTable from "../components/ProblemStatus/SolverModeTable.vue"

export default {
    name: "Problem Status",
    components: {
        ButtonToolbarStatus,
        SolverModeTable
    }
}
</script>

<style lang="scss" scoped>

</style>