<template>
    <div class="section-padding-t110-b120 newsletter-section bg-cover overflow-hidden" data-overlay="0.7" :style="{ backgroundImage: `url('/images/bg/newsletter.jpg')` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="cta-content text-center">
                        <SectionTitle title="Ready to Transform Your Talent Strategy?" sub-title="Connect with GTS today and discover how our innovative solutions can drive your business forward." add-class-name="color-light" />
                        <NuxtLinkLocale to="/contact-us" class="btn btn-primary btn-hover-secondary mt-6">Get Started</NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>

        <!-- <ShapeWithAnimation add-class-name="shape-1" data-depth="1" img-src="/images/shape-animation/newsletter-shape.png" /> -->
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
            ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
        },
    };
</script>