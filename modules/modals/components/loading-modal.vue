<template>
    <div id="loading-modal"  data-bs-backdrop="static" data-bs-keyboard="false"  class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalStore.loading.title }}</h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center">
                        <p class="text-center">{{ modalStore.loading.message }}</p>
                    </div>
                    <!-- <div class="progress mx-5" role="progressbar" aria-label="Animated striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style="width: 100%"></div>
                    </div> -->
                    <div class="d-flex justify-content-center mt-4">
                        <div class="spinner-grow text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const modalStore = useModal()
</script>