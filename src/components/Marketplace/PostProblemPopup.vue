<template>
<!-- Modal -->
<div class="modal fade" id="PostProblemModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">Post a problem</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" id="title" placeholder="Give problem a clear title."/>
                    </div>
                     <div class="form-group">
                        <label for="description">Description</label>
                        <textarea rows="5" class="form-control" id="description" placeholder="Describe the problem."/>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success mr-2">Attach files</button>
                        <small style="color: #B7B5B5;">(max. 5 MB)</small>
                    </div>
                    <div class="row mt-4">
                        <div class="col-6">
                            <label for="dueDays">Due</label>
                            <input class="form-control" id="dueDays" placeholder="2 days"/>
                        </div>
                        <div class="col-6">
                            <label for="price">Price</label>
                            <input class="form-control" id="price" placeholder="0.0017 ETH ($3)"/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <button class="btn btn-lg btn-secondary">Cancel</button>
                    </div>
                    <div class="col-6 text-right">
                        <button class="btn btn-lg btn-success">Post</button>
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