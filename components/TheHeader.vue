<template>
    <div class="header-section header-transparent" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">

                    <!-- Header Logo Start -->
                    <div class="col-xl-2 col-auto order-0">
                        <!-- <div class="header-logo">
                            <NuxtLinkLocale to="/">
                                <img class="dark-logo" src="/images/logo/logo-light.png" alt="Agency Logo">
                                <img class="light-logo" src="/images/logo/logo-light.png" alt="Agency Logo">
                            </NuxtLinkLocale>
                        </div> -->
                        <LogoHeader />
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Main Menu Start -->
                    <div class="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                        <div class="menu-column-area d-none d-xl-block position-static">
                            <Navigation />
                        </div>

                        <!-- Header Mobile Menu Toggle Start -->
                        <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                            <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                        <!-- Header Mobile Menu Toggle End -->
                    </div>
                    <!-- Header Main Menu End -->

                    <!-- Header Right Start -->
                    <div class="col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2">
                        <NuxtLinkLocale to="/contact-us" class="btn btn-light btn-hover-primary">{{ $localize('common.btn-get-started') }}</NuxtLinkLocale>
                    </div>
                    <!-- Header Right End -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            //offcanvas search 
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-popup');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>