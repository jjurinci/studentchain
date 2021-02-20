<template>
<!-- Modal -->
<div class="modal fade" id="SeeDeliveredSolutionModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">DELIVERED: Turn FA into right-linear grammar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <form>
                     <div class="form-group">
                        <label for="description">Solution text</label>
                        <textarea rows="5" class="form-control" id="description">Hey! I've provided a solution in the attached files below. If you have any issues, send me a message.
                        </textarea>
                    </div>
                    <div class="form-group">
                        <p class="text-center mt-3"><i>Attached files:</i></p>
                        <p class="d-inline text-center mr-4"><i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> solution1.pdf</p>
                        <p class="d-inline text-center mr-4"><i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> solution2.pdf</p>
                    </div>
                </form>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <p class="mb-1 p-0">Review due: <b>3 days</b></p>
                        <p class="mb-1 p-0">Price: <b> ($3) 0.0017 ETH</b></p>
                    </div>
                    <div class="col-6 text-right">
                        <button class="btn btn-lg btn-success">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.darkGreenBackground{
    background-color: #43896D;
    color: white;
}

label{
    font-size:18px;
    font-weight: bold;
}
</style>