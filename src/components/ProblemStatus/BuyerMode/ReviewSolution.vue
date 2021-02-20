<template>
<div class="container text-center mt-5">
    <h4>Review: <b>Permutations proof - </b> <b>($5) 0.0028 ETH</b> </h4>
    <h5 class="mt-3"><i>Solved by: zadd24 | 4.7/5 with 12 problems</i></h5>

    <form class="w-50 mx-auto mt-4" onsubmit="return false;">
        <div class="form-group">
            <label for="solutionText" style="font-size:22px;"><b>Solution text</b></label>
            <textarea readonly rows="10" class="form-control" id="solutionText"
                      style="background-color: white; color: #32373B">
                Hey the proof is in the PDF below, hope you like it.
            </textarea>
        </div>
        
        <div class="form-group text-center">
            <p class="mt-3"><i>Attached files:</i></p>
            <p><i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> proof.pdf</p>
        </div>

        <div class="form-group mt-4">
            <RejectSolutionPopup/>
            <button data-toggle="modal" data-target="#RejectSolutionModal"
                    class="btn btn-lg btn-secondary mr-5">REJECT</button>
            <button data-toggle="modal" data-target="#ApproveSolutionModal"
                    class="btn btn-lg btn-success">APPROVE</button>
        </div>
    </form>
</div>
</template>

<script>
import RejectSolutionPopup from '../BuyerMode/RejectSolutionPopup.vue'
export default {
    components:{
        RejectSolutionPopup,
    }
}
</script>

<style lang="scss" scoped>

</style>