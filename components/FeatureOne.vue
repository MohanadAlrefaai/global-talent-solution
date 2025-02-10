<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle :title="$localize(`common.our_services`)" :sub-title="$localize(`common.our_services_title`)" add-class-name="mb-60" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(feature, index) in serviceData.slice(0, 3)" :key="index">
                    <div class="icon-box text-center" :class="addClassName">
                        <div class="icon">
                            <img :src="feature.iconSrc" :alt="feature.title">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ $transalteTitle(feature) }}</h3>
                            <div class="desc">
                                <p>{{ $transalteText(feature) }}</p>
                            </div>
                            <NuxtLinkLocale :to="`/service/${feature.slug}`" class="link">{{ $localize('common.btn-details') }}</NuxtLinkLocale>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import serviceData from '~/data/service.json'
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