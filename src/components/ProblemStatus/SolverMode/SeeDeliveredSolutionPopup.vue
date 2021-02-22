<template>
<!-- Modal -->
<div class="modal fade" :id="'solution' + solution._id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header darkGreenBackground">
                <h5 class="modal-title">DELIVERED: {{solution.problem.title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: white;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center mt-3">
                <form>
                     <div class="form-group">
                        <label for="description">Solution text</label>
                        <textarea rows="5" class="form-control" id="description" :value="solution.solution_text">
                            
                        </textarea>
                    </div>
                    <div class="form-group">
                        <p class="text-center mt-3"><i>Attached files:</i></p>
                        <p v-for="file in solution.problem.attached_files" :key="file" class="d-inline text-center mr-4">
                            <i class="far fa-file-pdf mr-1" style="font-size:25px;"></i> {{file}}
                        </p>
                    </div>
                </form>
            </div>
            
            <div class="modal-footer">
                <div class="row w-100">
                    <div class="col-6 text-left">
                        <p class="mb-1 p-0">Review due: <b>3 days</b></p>
                        <p class="mb-1 p-0">Price: <b> ($3) {{solution.problem.price_eth}} ETH</b></p>
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
    name: "See delivered solution",
    props: ['solution']
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