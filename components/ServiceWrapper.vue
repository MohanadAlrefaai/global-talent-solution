<template>
    <div class="section-padding-t90 section-padding-bottom overflow-hidden">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32">{{ $localize('comps.services-wrapper.title') }}</h2>
                <!-- <p class="sub-title ">{{ $localize('comps.services-wrapper.sub-title') }}</p> -->
            </div>
            <!-- Section Title End -->

            <!-- About Wrapper Start -->
            <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(service, index) in serviceData" :key="index">
                    <ServiceItem2 :service="service" addClassName="box-border" />
                </div>

                <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
            </div>
            <!-- About Wrapper End -->
        </div>
    </div>
</template>

<script>
    import serviceData from '~/data/service.json';

    export default {
        components: {
            ServiceItem: () => import('@/components/ServiceItem'),
            ServiceItem2: () => import('@/components/ServiceItem2'),
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },

        data() {
            return {
                serviceData
            }
        },
    };
</script>