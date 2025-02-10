<template>
    <div class="contact-form-section section-padding-t90-b100" :style="{ backgroundColor: '#f8faff' }">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8">
                    <!-- Section Title Start -->
                    <div class="section-title text-center" data-aos="fade-up">
                        <h2 class="title fz-32">{{ $localize('common.btn-touch') }}</h2>
                        <p class="sub-title">{{ $localize("comps.contact-section-2.subtitle") }}</p>
                    </div>
                    <!-- Section Title End -->
                    <div class="contact-form">
                        <form>
                            <div class="row mtn-30">
                                <div class="col-md-6 col-12 mt-30">
                                    <input  v-model="form.name" type="text" :placeholder="$localize('forms.contact.name')" name="name">
                                </div>
                                <div class="col-md-6 col-12 mt-30">
                                    <input  v-model="form.email" type="email" name="email" :placeholder="$localize('forms.contact.email')">
                                </div>
                                <div class="col-12 mt-30">
                                    <textarea  v-model="form.message" name="message" :placeholder="$localize('forms.contact.message')"></textarea>
                                </div>
                                <div class="col-12 text-center mt-30">
                                    <button @click="onSubmit" type="button"
                                        class="btn btn-primary btn-hover-secondary">{{ $localize('common.btn-submit') }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const form = ref({})

const onSubmit = async () => {
    
    const { $mail } = useNuxtApp()

    const data = form.value
    if (!data) return
    if (data.email && !isEmail(data.email)) {
        showAlert($localize("layout.footer.email-invalid-title"), $localize("layout.footer.email-invalid-message"))
        return
    }
    if (!data.email || !data.message || !data.name) {
        showAlert($localize('layout.footer.invalid-data'), $localize('layout.footer.fill-all'))
        return
    }
    showLoading()
    const res = await $mail.send({
        from: 'Website Form',
        subject: `${data.name} - Contact Form`,
        text: `name: ${data.name}\n
email: ${data.email}\n
message: ${data.message}`,
    })
    console.log(res)
    hideLoading()

    showAlert($localize("layout.footer.email-success-title"), $localize("layout.footer.email-success-message"))
    form.value = {}

}
</script>