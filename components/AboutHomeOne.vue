<template>
    <div class="section-padding-t90 pb-5 overflow-hidden">
        <div class="container">
            <!-- Section Title Start --> 
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title">{{ $localize('comps.aboutone.title') }}</h2>
                <p class="sub-title">{{ $localize('comps.aboutone.subtitle') }}</p>
            </div>
            
            <!-- Section Title End -->

            <!-- About Wrapper Start -->
            <div class="row">
                <!-- About Image Area Start -->
                <div class="col-xl-7 col-lg-6" data-aos="fade-up">
                    <div class="about-image-area">
                        <!-- <div class="about-image js-tilt">
                            <img src="/images/elevators/5.jpeg" style="object-fit: contain; object-position: center;" width="400" height="300" alt="images">
                        </div> -->
                        <div class="about-image js-tilt mt-5">
                            <img style="object-fit: cover; object-position: center;" src="/images/content/image-girl-1.jpeg" width="500" height="350" alt="images">
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <!-- About Image Area Start -->

                <!-- About Start -->
                <div class="col-xl-5 col-lg-6" data-aos="fade-up">
                    <div class="about-content-area about-one">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">{{ $localize('comps.aboutone.section2.title') }}</span>
                            <h3 class="title">{{ $localize('comps.aboutone.section2.subtitle') }}</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <p>{{ $localize('comps.aboutone.section2.text') }}.</p>
                        <NuxtLinkLocale to="/about" class="btn btn-primary btn-hover-secondary mt-4">{{ $localize('common.btn-about-us') }}</NuxtLinkLocale>
                    </div>
                </div>
                <!-- About Start -->
            </div>
            <!-- About Wrapper End -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>