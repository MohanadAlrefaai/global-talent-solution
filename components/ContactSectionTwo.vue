<template>
    <div class="section-padding contact-section fix bg-cover overflow-hidden" data-overlay="0.7" 
    :style="{backgroundImage: `url('/images/elevators/9.jpeg')`}"
    >
    <!-- :style="{backgroundImage: `url('/images/bg/contact-bg.jpg')`}" -->
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 align-items-center">
                <div class="col">
                    <!-- Contact Information -->
                    <div class="contact-Information mr-xl-7">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two color-light">
                            <span class="sub-title">{{ $localize('common.company_name') }}</span>
                            <h3 class="title">{{ $localize('comps.contact-section-2.subtitle') }}</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info info-light" data-vivus-hover>
                            <div class="icon ms-3 me-3">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-map-white.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">{{ $localize('comps.contact.locations') }}</h4>
                                <span class="info-text"> Alsuidi building, 4th Street,<br/> Al Mararr, Dubai, U.A.E.<br/> P.O. Box: 36677 </span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info info-light" data-vivus-hover>
                            <div class="icon ms-3 me-3">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt-white.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">{{ $localize('comps.contact.call') }}</h4>
                                <span class="info-text">
                                    <a href="callto:+97123695177 "> 023695177 </a>
                                </span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info info-light" data-vivus-hover>
                            <div class="icon ms-3 me-3">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text-white.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">{{ $localize('comps.contact.email') }}</h4>
                                <span class="info-text">
                                    <a href="mailto:info@albawaba-orgwania.com">info@albawaba-orgwania.com</a>
                                </span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->
                    </div>
                    <!-- Contact Information -->
                </div>

                <div class="col">
                    <!-- Contact Form Start -->
                    <div class="contact-form-area box-shadow">
                        <!-- Section Title Start -->
                        <div class="section-title text-center mb-7">
                            <h2 class="title fz-28">{{ $localize('comps.contact.form.title') }}</h2>
                            <p class="sub-title">{{ $localize('comps.contact-section-2.form.subtitle') }}</p>
                        </div>
                        <!-- Section Title End -->
                        <form >
                            <div class="row mb-n4">
                                <div class="col-md-12 col-12 mb-4">
                                    <input v-model="form.name" type="text" :placeholder="$localize(`forms.contact.name`)" name="name">
                                </div>
                                <div class="col-md-12 col-12 mb-4">
                                    <input v-model="form.email" type="email":placeholder="$localize(`forms.contact.email`)" name="email">
                                </div>
                                <div class="col-12 mb-30">
                                    <textarea v-model="form.message" name="message" :placeholder="$localize(`forms.contact.message`)"></textarea>
                                </div>
                                <div class="col-12 text-center mb-4">
                                    <button type="button" @click="onSubmit" class="btn btn-primary btn-hover-secondary">{{ $localize('comps.contact-section-2.submit') }}</button>
                                </div>
                            </div>
                        </form>
                        
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/contact-shape.png" />
                    </div>
                    <!-- Contact Form End -->
                </div>
            </div>
        </div>

        <!-- Animation Shape Start -->
        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/newsletter-shape.png" />

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