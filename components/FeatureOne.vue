<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle :title="$localize(`common.our_services`)" :sub-title="$localize(`common.our_services_title`)" add-class-name="mb-60" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(feature, index) in serviceData" :key="index">
                    <div class="icon">
                        <img class="w-100 h-100" :src="feature.imgSrc" :alt="feature.title">
                    </div>
                    <div class="icon-box text-center pt-3 rounded-0" :class="addClassName">
                        <div class="content">
                            <NuxtLinkLocale :to="`/service`" class="link"><h3 class="title">{{ $transalteTitle(feature) }}</h3></NuxtLinkLocale>
                            <!-- <div class="desc">
                                <p>{{ $transalteText(feature) }}</p>
                            </div> -->
                            <!-- <NuxtLinkLocale :to="`/service/${feature.slug}`" class="link">{{ $localize('common.btn-details') }}</NuxtLinkLocale> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import serviceData from '~/data/features.json'
    export default {
        props: ["addClassName"],

        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
        },

        data() {
            return {
                serviceData
            }
        },
    };
</script>

<style scoped>
.icon {
    aspect-ratio: 3/2;
}
img {
    object-fit: cover;
    object-position: center;
}
</style>