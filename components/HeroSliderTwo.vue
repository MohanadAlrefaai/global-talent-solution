<template>
    <div class="intro-slider">
        <swiper
            :speed="1000"
            :loop="true"
            :effect="'fade'"
            :navigation="swiperOptions.navigation"
        >
            <swiper-slide v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content m-auto text-center">
                                    <h2 class="title">{{ banner.heading }}</h2>
                                    <div class="desc">
                                        <p>{{ banner.text }}</p>
                                    </div>
                                    <NuxtLinkLocale to="/about" class="btn btn-primary btn-hover-secondary">Get Started</NuxtLinkLocale>
                                    <NuxtLinkLocale to="/about" class="btn btn-outline-white btn-hover-primary">Learn More</NuxtLinkLocale>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <!-- pagination class -->
            <div class="home-slider-prev swiper-button-prev main-slider-nav">
                <i class="fa fa-angle-left"></i>
            </div>
            <div class="home-slider-next swiper-button-next main-slider-nav">
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
                        prevEl: '.swiper-button-prev',
                    }
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "Al Bawaba Orgwania: Fast and Accurate Elevator Solutions",
                        text: "Keeping your elevators running smoothly is our priority. At Albawaba Orgwania, we deliver fast and accurate maintenance, installation, and programming services to minimize downtime and maximize efficiency.",
                        bgImgSrc: "/images/elevators/6.jpeg"
                    },
                    {
                        id: 2,
                        heading: "Proactive Elevator Maintenance: Preventing Problems Before They Happen",
                        text: "Our comprehensive maintenance programs are designed to keep your elevators operating at peak performance. We identify and address potential issues proactively, minimizing disruptions and extending the lifespan of your equipment.",
                        bgImgSrc: "/images/elevators/1.jpeg"
                    },
                    {
                        id: 2,
                        heading: "Intelligent Elevator Programming & Control: Optimizing Performance and Safety",
                        text: "We leverage the latest advancements in elevator technology and programming to provide intelligent solutions that enhance safety, efficiency, and passenger experience. Our expertise in control systems ensures optimal performance and reliable operation.",
                        bgImgSrc: "/images/elevators/10.jpeg"
                    }
                ]
            }
        },
    };
</script>