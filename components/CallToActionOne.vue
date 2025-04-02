<template>
    <div class="section-padding-t90-b100 overflow-hidden">
        <div class="container shape-animate">
            <!-- Section Title Start -->
            <SectionTitle :title="$localize('comps.call-to-action.title')" :sub-title="$localize('comps.call-to-action.subtitle')" add-class-name="mb-30" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon mx-3">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">{{ $localize("comps.contact.locations") }}</h4>
                            <span class="info-text">Address: 1881 Steeles Ave W, Toronto, ON M3H 5Y4, Canada </span>
                        </div>
                    </div>
                </div>

                <!-- <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon mx-3">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">{{ $localize("comps.contact.call") }}</h4>
                            <span class="info-text"> 0XXXXXXXXXX</span>
                        </div>
                    </div>
                </div> -->

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon mx-3">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">{{ $localize("comps.contact.email") }}</h4>
                            <span class="info-text">
                                <a href="mailto:info@gts-globaltalentsolution.com">info@gts-globaltalentsolution.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <shape-with-animation add-class-name="shape-1" data-depth="4" img-src="/images/shape-animation/video-shape-1.png" />

        </div>
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
