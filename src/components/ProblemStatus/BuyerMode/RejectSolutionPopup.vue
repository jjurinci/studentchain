<template>
<!-- Modal -->
<div class="modal fade" id="RejectSolutionModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center darkGrayBackground">
                <h5 class="modal-title">Reject Solution</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-left mt-2">
                <h5 style="font-weight: bold;">Reason for rejecting the solution</h5>
                <textarea rows="5" class="form-control mt-3" id="description"
                                  placeholder="Why are you rejecting the solution?"/>
              
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <button class="btn btn-lg btn-secondary">Back</button>
                    </div>
                    <div class="col-6 text-right">
                        <button class="btn btn-lg btn-secondary" style="background-color: black;">Reject</button>
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

.darkGrayBackground{
    background-color: #404447;
    color: white;
}
</style>