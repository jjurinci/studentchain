<template>
<!-- Modal -->
<div v-if="problem" class="modal fade" :id="'problem' + problem.id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">By: user514 | Rating: 4.6/5 with 7 problems</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <h4 style="font-weight: bold;">{{problem.title}}</h4>
                <p>{{problem.description}}</p>
                <p class="text-center mt-4"><i>Attached files:</i></p>
                <p v-for="file in problem.attached_files" :key="file" class="text-center mr-4 d-inline">
                    <i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> {{file}}
                </p>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <p class="mb-1 p-0">Due: <b>{{problem.due_days}} days</b></p>
                        <p class="mb-1 p-0">Price: <b> ($3) {{problem.price_eth}} ETH</b></p>
                    </div>
                    <div class="col-6 text-right">
                        <button class="btn btn-lg btn-success">Solve</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Problem Popup",
    props: ["problem"],

    mounted(){
    }
}
</script>

<style lang="scss" scoped>
.darkGreenBackground{
    background-color: #43896D;
    color: white;
}
</style>