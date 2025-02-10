<template>
    <div>
        <AlertModal />
        <ConfirmModal />
        <LoadingModal />
    </div>
</template>

<script setup>
import * as bootstrap from 'bootstrap'

onMounted(() => {
    nextTick(() => {
        useModal().initModals(bootstrap, window.document)
    })
})
</script>