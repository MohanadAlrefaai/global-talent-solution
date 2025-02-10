<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Service" :title="$transalteTitle(service)" backgroundUrl= "/images/elevators/9.jpeg" />

        <!-- service section start -->
        <section class="service-details-wrapper section-padding pb-125">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mtn-40 order-2 order-lg-1">
                        <div class="service-details-widget">
                            <div class="service-single-widget mt-40" :style="{backgroundColor: '#f8faff'}">
                                <h4 class="service-widget-title">{{ $localize("pages.services.title") }}</h4>
                                <ul class="service-list">
                                    <li v-for="item in serviceData">
                                        <NuxtLinkLocale :href="`/service/${item.slug}`">{{ $transalteTitle(item) }}</NuxtLinkLocale>
                                    </li>
                                </ul>
                            </div>
                            <!-- <div class="service-single-widget mt-40" :style="{backgroundColor: '#f8faff'}">
                                <h4 class="service-widget-title">Download Brochure</h4>
                                <ul class="service-list">
                                    <li><a href="#">Brochures.PDF</a></li>
                                    <li><a href="#">Brochures.DOC</a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="service-details">
                            <div class="service-details-thumb">
                                <img :src="service.imgSrc" :alt="service.title">
                            </div>
                            <h3 class="mt-4 mb-3">{{ $transalteTitle(service) }}</h3>
                            <p v-if="!$isRTL()" v-for="paragraph in service.paragraphs">{{ paragraph }}</p>
                            <p v-else v-for="paragraph in service.paragraphs_ar">{{ paragraph }}</p>
                            <!-- <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, quo quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?</p> -->
                            <div class="row">
                                <div v-for="feature in service.features" class="col-sm-6">
                                    <div class="service-details-content mt-30">
                                        <h4>{{ $transalteTitle(feature) }}</h4>
                                        <p>{{ $translateDescription(feature) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service section end -->

        <PortfolioGallery :isHome="true" />
        <ContactSectionTwo />
        <TheFooter />
    </div>
</template>

<script setup>
    import ContactSectionTwo from '~/components/ContactSectionTwo.vue';
import serviceData from '~/data/service.json';

    const params = useRoute().params
    const slug = params.slug
    const service = computed(() => serviceData.find(ser => ser.slug === slug))
    
    setPage(pages().service(service.value))
    
   
</script>


