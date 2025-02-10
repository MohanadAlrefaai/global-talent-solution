import { acceptHMRUpdate } from 'pinia'

export const useModal = defineStore("useModal", {
    state: () => ({
        loading: {},
        alert: {},
        confirm: {},
        modals: {}
    }),
    hydrate(state, initialState) {
        // in this case we can completely ignore the initial state since we
        // want to read the value from the browser
    },
    actions: { 
        initModals(bootstrap, document) {
            try {
                this.modals.alert = bootstrap.Modal.getOrCreateInstance(document.getElementById('alert-modal'))
                this.modals.confirm = bootstrap.Modal.getOrCreateInstance(document.getElementById('confirm-modal'))
                this.modals.loading = bootstrap.Modal.getOrCreateInstance(document.getElementById('loading-modal'))
                
            } catch (err) {
                console.error(err)
                return null
            }
        },
        showAlert(title, message) {
            this.alert = {
                title,
                message
            }
            this.modals.alert.show()
        },
        hideAlert() {
            setTimeout(() => {
                this.alert = {}
            }, 500)
            this.modals.alert.hide()
        },

        showConfirm(onConfirm, title, message, onCancel) {
            this.confirm = {
                onConfirm,
                onCancel,
                title: title || $localize("modals.confirm.title"),
                message: message || $localize("modals.confirm.message")
            }
            this.modals.confirm.show()
        },
        hideConfirm() {
            this.confirm = {}
            this.modals.confirm.hide()
        },

        showLoading(message, title) {
            this.loading = {
                title: title || $localize("modals.loading.title"),
                message: message || $localize("modals.loading.message")
            }
            this.modals.loading.show()
        },
        hideLoading() {
            this.loading = {}
            this.modals.loading.hide()
        }
    }
})

if (import.meta.hot) 
    import.meta.hot.accept(acceptHMRUpdate(useModal, import.meta.hot))