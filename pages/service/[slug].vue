<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Service" :title="$transalteTitle(service)" backgroundUrl= "/images/slides/gts-4.jpeg" />

        <!-- service section start -->
        <section class="service-details-wrapper mt-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="d-none d-md-block col-lg-4 mtn-40 order-2 order-lg-1">
                        <div class="service-details-widget">
                            <div class="service-single-widget mt-40" :style="{backgroundColor: '#f8faff'}">
                                <h4 class="service-widget-title">{{ $localize("pages.services.title") }}</h4>
                                <ul class="service-list">
                                    <li v-for="item in serviceData">
                                        <NuxtLinkLocale :href="`/service/${item.slug}`">{{ $transalteTitle(item) }}</NuxtLinkLocale>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="service-details">
                            <div class="service-details-thumb">
                                <img :src="service.imgSrc" :alt="service.title">
                            </div>
                            <h3 class="mt-4 mb-3">{{ $transalteTitle(service) }}</h3>
                            <p v-for="paragraph in $translate(service, 'paragraphs')">{{ paragraph }}</p>
                            <div v-if="service.highlights" v-for="highlight in $translate(service, 'highlights')">
                                <p><span class="text-secondary fs-5 fw-bold me-1">{{ highlight.title }}</span>
                                {{ highlight.description }}</p>
                            </div>
                            <div class="row mt-3" v-if="service.features">
                                <span class="text-gray-200 fw-bold" v-if="service.features.title">{{ service.features.title }}</span>
                                <ul>

                                    <li v-for="feature in service.features.items" class="col-12 ms-3">
                                        <div class="service-details-content mt-1">
                                            <p class="text-secondary fw-bold">{{ feature }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="row mt-3" v-if="service.titledFeatures">
                                <span class="text-gray-200 fw-bold" v-if="service.titledFeatures.title">{{ service.titledFeatures.title }}</span>
                                <div v-for="feature in service.titledFeatures.items" class="col-sm-6">
                                    <div class="service-details-content mt-3">
                                        <h4>{{ $transalteTitle(feature) }}</h4>
                                        <p>{{ $translateDescription(feature) }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-start gap-4">
                                <NuxtLinkLocale :to="`${pages().service(service).route}#service-${service.id}-contactus`" class="btn btn-primary btn-hover-secondary mt-30">Apply for This Service</NuxtLinkLocale>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">

            <hr>
        </div>
        <AccordionService :service="service"/>
        <!-- service section end -->

        <!-- <PortfolioGallery :isHome="true" /> -->
         <!-- <CallToActionTwo /> -->
        <ContactSectionTwo :id="`service-${service.id}-contactus`" />
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


