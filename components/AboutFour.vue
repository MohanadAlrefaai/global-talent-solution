<template>
    <div class="section-padding-top section-padding-bottom-180 overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/content/gts.jpeg" alt="image">
                        </div>
                        
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                    <div class="mt-5 mt-lg-0">
                        <div class="section-title-two">
                            <span class="sub-title">{{ $localize('comps.aboutfour.title') }}</span>
                            <h3 class="title">{{ $localize('comps.aboutfour.subtitle') }}</h3>
                        </div>
                        <p>{{ $localize('comps.aboutfour.text') }}</p>
                        <div class="d-flex justify-start gap-4">

                            <NuxtLinkLocale to="/service" class="btn btn-primary btn-hover-secondary mt-30">Our Services</NuxtLinkLocale>
                            <NuxtLinkLocale to="/technology" class="btn btn-secondary btn-hover-primary mt-30">Check Our Technology</NuxtLinkLocale>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation')
        },
    };
</script>