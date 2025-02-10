<template>
    <div id="confirm-modal"  data-bs-backdrop="static" data-bs-keyboard="false"  class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalStore.confirm.title }}</h5>
                    <button type="button" class="btn-close" @click="onCancel" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>{{ modalStore.confirm.message }}</p>
                </div>
                <div class="modal-footer">
                    <button @click="onCancel" type="button" class="btn btn-outline-secondary">{{ $t('modals.confirm.cancel') }}</button>
                    <button @click="onConfirm" type="button" class="btn btn-secondary">{{ $t('modals.confirm.confirm') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const modalStore = useModal()

const onConfirm = () => {
    if (modalStore.confirm.onConfirm) {
        modalStore.confirm.onConfirm()
    }
    modalStore.hideConfirm()
}

const onCancel = () => {
    if (modalStore.confirm.onCancel) {
        modalStore.confirm.onCancel()
    }
    modalStore.hideConfirm()
}
</script>