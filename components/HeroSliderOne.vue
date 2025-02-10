<template>
    <div class="intro-slider">
        <swiper
            :speed="1000"
            :loop="false"
            :navigation="swiperOptions.navigation"
            :effect="'fade'"
        >
            <swiper-slide v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                    <h2 class="title pt-5">{{ $translate(banner, "heading") }}</h2>
                                    <div class="desc">
                                        <p>{{ $translate(banner, "text") }}</p>
                                    </div>
                                    <NuxtLinkLocale to="/contact-us" class="btn btn-primary btn-hover-secondary">
                                        {{ $translate(banner, "callToAction") }}
                                    </NuxtLinkLocale>
                                    <!-- <NuxtLink to="/about" class="btn btn-outline-white btn-hover-primary">Learn More</NuxtLink> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <!-- pagination class -->
            <div v-if="$isRTL()" class="home-slider-prev swiper-button-prev main-slider-nav">
                <i class="fa fa-angle-right"></i>
            </div>
            <div v-else class="home-slider-prev swiper-button-prev main-slider-nav">
                <i class="fa fa-angle-left"></i>
            </div>
            <div v-if="$isRTL()"  class="home-slider-next swiper-button-next main-slider-nav">
                <i class="fa fa-angle-left"></i>
            </div>
            <div v-else class="home-slider-next swiper-button-next main-slider-nav">
                <i class="fa fa-angle-right"></i>
            </div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, EffectFade } from 'swiper/core'
    SwiperCore.use([Navigation, EffectFade ])

    import "swiper/css"
    import 'swiper/css/effect-fade';

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "Al Bawaba Orgwania for Fast and Accurate Elevator Solutions",
                        headingAr: "البوابة الأرجوانية: سرعة في الإنجاز ودقة في التركيب",
                        text: "Keeping your elevators running smoothly. Fast and accurate maintenance, installation, and programming.",
                        textAr: "نضمن سلاسة تشغيل مصاعدك. صيانة وتركيب وبرمجة سريعة ودقيقة",
                        bgImgSrc: "/images/elevators/1.jpeg",
                        callToAction: "Contact Us",
                        callToActionAr: "تواصل معنا"
                    },
                    {
                        id: 2,
                        heading: "Reliable Elevator Maintenance",
                        headingAr: "صيانة مصاعد آمنة وموثوقة",
                        text: "Keeping your elevators running smoothly and safely. Expert maintenance you can depend on.",
                        textAr: "مصاعدك في أيدٍ أمينة، تعمل بسلاسة وأمان. صيانة خبيرة يمكنك الاعتماد عليها",
                        bgImgSrc: "/images/elevators/6.jpeg",
                        callToAction: "Request a Maintenance Quote",
                        callToActionAr: "اطلب عرض سعر صيانة"
                    },
                    {
                        id: 3,
                        heading: "Expert Elevator Programming & Control Solutions",
                        headingAr: "حلول متخصصة في برمجة و تحكم المصاعد",
                        text: "Optimizing performance and safety with advanced programming and control solutions.",
                        textAr: "تحقيق الأداء الأمثل والسلامة من خلال حلول برمجة وتحكم متقدمة",
                        bgImgSrc: "/images/elevators/10.jpeg",
                        callToAction: "Contact Us for a Consultation",
                        callToActionAr: "تواصل معنا لمزيد من المعلومات"
                    }
                ]
            }
        },
    };
</script>