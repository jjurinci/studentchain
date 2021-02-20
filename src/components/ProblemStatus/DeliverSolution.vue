<template>
<div class="container text-center mt-5">
    <h4>Deliver: <b>Turn FA to right-linear grammar</b></h4>
    <h5 class="mt-3"><i>By: user514 | 4.6/5 with 7 problems</i></h5>

    <form class="w-50 mx-auto mt-4">
        <div class="form-group">
            <label for="solutionText" style="font-size:22px;"><b>Solution text</b></label>
            <textarea rows="10" class="form-control" id="solutionText"
                      placeholder="Provide a solution here or a message to the buyer if your solution is in attached files."/>
        </div>
        <div class="form-group">
            <button class="btn btn-lg btn-success">Attach files</button>
            <p class="mt-2" style="color: #B7B5B5;">(max. 5 MB)</p>
        </div>

        <div class="form-group">
            <button class="btn btn-lg btn-success">SEND FOR REVIEW</button>
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