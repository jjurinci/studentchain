<template>
<!-- Modal -->
<div class="modal fade" id="EditProblemModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">Edit a problem</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" id="title" value="Convert images in Java."/>
                    </div>
                     <div class="form-group">
                        <label for="description">Description</label>
                        <textarea rows="5" class="form-control" id="description"
                                  value="Algorithm that converts images from jpg to png, tiff, gif is needed. Deliver Java files and comment the code."/>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success mr-2">Attach files</button>
                        <small style="color: #B7B5B5;">(max. 5 MB)</small>
                        <p class="text-left mt-3"><i>Attached files:</i></p>
                        <p class="text-left">X <i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> problem.pdf</p>
                    </div>
                    <div class="row mt-4">
                        <div class="col-6">
                            <label for="dueDays">Due</label>
                            <input class="form-control" id="dueDays" value="3 days"/>
                        </div>
                        <div class="col-6">
                            <label for="price">Price</label>
                            <input class="form-control" id="price" value="0.0028 ETH ($5)"/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-4 text-left">
                        <button class="btn btn-lg btn-secondary">Cancel</button>
                    </div>
                    <div class="col-4 text-center">
                        <button class="btn btn-lg btn-secondary" style="background-color: black;">Delete</button>
                    </div>
                    <div class="col-4 text-right">
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