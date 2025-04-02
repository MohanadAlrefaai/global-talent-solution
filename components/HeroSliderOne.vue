<template>
    <div class="intro-slider">
        <swiper
            :speed="1000"
            :loop="false"
            :navigation="swiperOptions.navigation"
            :pagination="swiperOptions.pagination"
            :autoplay="swiperOptions.autoplay"
            :effect="'fade'"
        >
            <swiper-slide v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover relative" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="overlay position-absolute top-0 bottom-0 left-0 right-0 h-100 w-100"></div>
                        
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
            
            <!-- Add Pagination -->
            <div class="position-absolute bottom-5 left-0 right-0 w-100 d-flex justify-content-center">

                <div class="swiper-pagination with-bg"></div>
            </div>
            <!-- pagination class -->
            <div v-if="$isRTL()" class="home-slider-prev swiper-button-prev main-slider-nav d-none d-md-block">
                <i class="fa fa-angle-right"></i>
            </div>
            <div v-else class="home-slider-prev swiper-button-prev main-slider-nav d-none d-md-block">
                <i class="fa fa-angle-left"></i>
            </div>
            <div v-if="$isRTL()"  class="home-slider-next swiper-button-next main-slider-nav d-none d-md-block">
                <i class="fa fa-angle-left"></i>
            </div>
            <div v-else class="home-slider-next swiper-button-next main-slider-nav d-none d-md-block">
                <i class="fa fa-angle-right"></i>
            </div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/core'
    // import { Autoplay } from 'swiper/modules'
    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade ])

    import "swiper/css"
    import 'swiper/css/effect-fade';

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                
                modules: [Navigation, EffectFade, Autoplay],
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                    },
                    autoplay: {
                        delay:4000
                    }
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "GTS Global Talent Solution",
                        headingAr: "",
                        text: " Innovative Technology for a World Where Talent Knows No Borders.",
                        textAr: "",
                        // bgImgSrc: "/images/slides/gts-4.jpeg",
                        bgImgSrc: "/images/slides/gts-5.jpeg",
                        callToAction: "Get Started",
                        to: "/contact",
                        callToActionAr: "تواصل معنا"
                    },
                    {
                        id: 2,
                        heading: "GTS Smart Match Algorithm® For Recruitment & Job Search",
                        headingAr: "",
                        text: "GTS leverages artificial intelligence, machine learning, and predictive analytics to revolutionize the recruitment process.",
                        textAr: "",
                        bgImgSrc: "/images/slides/ai.jpeg",
                        callToAction: "Learn More",
                        to: "/technology",
                        callToActionAr: "اطلب عرض سعر صيانة"
                    },
                    {
                        id: 3,
                        heading: "Candidate Training & Development Roadmaps",
                        headingAr: "",
                        text: "GTS offers personalized development roadmaps and coaching services tailored to match employers' specific roles.",
                        textAr: "",
                        bgImgSrc: "/images/slides/choaching.jpeg",
                        callToAction: "Our Services",
                        to: "/services",
                        callToActionAr: ""
                    },
                ]
            }
        },
    };
</script>

<style lang="scss">
@import "@/assets/scss/variables";
.swiper-pagination {
		// bottom: 20px;
		// left: 50% !important;
		z-index: 1;
		// position: absolute;
		// transform: translateX(-50%);
		.swiper-pagination-bullet {
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background-color: $secondary;
			display: inline-block;
			& + .swiper-pagination-bullet {
				margin-left: 10px;
			}
		}
	}

/* ---Swiper Pagination--- */
.swiper-pagination{
	&-bullet{
		&-active{
			background-color: $secondary;
		}
	}
	&.with-bg{
		.swiper-pagination{
			&-bullet{
				background-color: $white;
				opacity: 1;
				&-active{
					background-color: $secondary;
				}
			}
		}
	}
	&.without-absolute{
		position: relative;
		padding-top: 20px;
		bottom: 0;
	}
}

.bottom-5 {
    bottom: 5%;
}
</style>