<template>
<!-- Modal -->
<div class="modal fade" :id="'solve' + problem._id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">{{problem.title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <h4>Problem successfully reserved.</h4>
                <h4 class="mt-4">
                    Check <span style="font-weight: bold; font-family: Monospace">PROBLEM STATUS</span> tab for more information.
                </h4>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-3"></div>
                    <div class="col-6 text-center">
                        <button class="btn btn-lg btn-secondary" data-dismiss="modal">Back</button>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Solve Problem Popup",
    props: ["problem"]
}
</script>

<style lang="scss" scoped>
.darkGreenBackground{
    background-color: #43896D;
    color: white;
}
</style>