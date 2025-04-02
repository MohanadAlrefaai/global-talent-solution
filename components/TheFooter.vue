<template>
    <div class="footer-section" :style="{backgroundColor: '#030e22'}">
        <div class="container">
            <!-- Footer Top Widgets Start -->
            <div class="row section-padding pt-0 mtn-30">
                <!-- Footer Widget Start -->
                <div class="col-md-3 col-sm-12 col-12 mt-30">
                    <div class="footer-widget">
                        <!-- <div class="footer-logo">
                            <NuxtLinkLocale to="/">
                                <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo">
                            </NuxtLinkLocale>
                        </div> -->
                        <LogoFooter />
                        <div class="footer-widget-content">
                            <div class="content">
                                <span>{{ $localize("common.company_name") }}</span>
                                <!-- <a :href="`tel:${footerData.footerAboutWidget.telephone}`">{{ footerData.footerAboutWidget.telephone }}</a> -->
                                <a class="text-white"  href="mailto:info@gts-globaltalentsolution.com">{{ footerData.footerAboutWidget.email }}</a>
                                <span>Address: 1881 Steeles Ave W, Toronto, ON M3H 5Y4, Canada                                </span>
                            </div>
                            <div class="footer-social-inline">
                                <!-- <a :href="footerData.footerAboutWidget.twitterUrl" target="_blank">
                                    <i class="fab fa-twitter-square"></i>
                                </a>
                                <a :href="footerData.footerAboutWidget.fbUrl" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a :href="footerData.footerAboutWidget.instagramUrl" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a> -->
                                <span>Follow Us:<a class="ms-3 d-inline-block" :href="footerData.footerAboutWidget.linkedinUrl" target="_blank">
                                    <i class="d-inline-block fab fa-linkedin display-1"></i>
                                </a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
                <!-- Footer Widget Start -->
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-30 ps-md-5">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ $localize('common.pages') }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <NuxtLinkLocale  :to="pages().home.route">{{ pages().home.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale  :to="pages().services.route">{{ pages().services.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale  :to="pages().technology.route">{{ pages().technology.label }}</NuxtLinkLocale>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
                 <!-- Footer Widget Start -->
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ $localize('common.information') }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <NuxtLinkLocale :to="pages().contact.route">{{ pages().contact.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale :to="pages().about.route">{{ pages().about.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale :to="pages().whyus.route">{{ pages().whyus.label }}</NuxtLinkLocale>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
                <!-- Footer Widget Start -->
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ $t('common.our_services') }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li v-for="service in serviceData">
                                    <NuxtLinkLocale :href="`/service/${service.slug}`">{{ $transalteTitle(service) }}</NuxtLinkLocale>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->

                

                
            </div>
            <!-- Footer Top Widgets End -->

            <!-- Footer Copyright Start -->
            <div class="row">
                <div class="col">
                    <p class="copyright">Global Talent Solution 2025 &copy;</p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
    </div>
</template>

<script>
    import footerData from '~/data/footer.json';
    import serviceData from '~/data/service.json';

    export default {
        data() {
            return {
                footerData,
                serviceData
            }
        },
    };
</script>