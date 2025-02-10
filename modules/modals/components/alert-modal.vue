<template>
    <div id="alert-modal"  data-bs-backdrop="static" data-bs-keyboard="false"  class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalStore.alert.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>{{ modalStore.alert.message }}</p>
                </div>
                <div class="modal-footer">
                    <button @click="onOK" type="button" class="btn btn-primary">{{ $t('modals.alert.ok') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const modalStore = useModal()

const onOK = () => {
    modalStore.hideAlert()
}
</script>