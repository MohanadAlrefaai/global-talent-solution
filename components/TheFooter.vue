<template>
    <div class="footer-section" :style="{backgroundColor: '#030e22'}">
        <div class="container">
            <!-- Footer Top Widgets Start -->
            <div class="row section-padding pt-0 mtn-30">
                <!-- Footer Widget Start -->
                <div class="col-md-4 col-sm-12 col-12 mt-30">
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
                                <a :href="`tel:${footerData.footerAboutWidget.telephone}`">{{ footerData.footerAboutWidget.telephone }}</a>
                                <a href="mailto:info@albawaba-orgwania.com">{{ footerData.footerAboutWidget.email }}</a>
                                <span> Alsuidi building, 4th Street, Al Mararr, Dubai, U.A.E. P.O. Box: 36677</span>
                            </div>
                            <!-- <div class="footer-social-inline">
                                <a :href="footerData.footerAboutWidget.twitterUrl" target="_blank">
                                    <i class="fab fa-twitter-square"></i>
                                </a>
                                <a :href="footerData.footerAboutWidget.fbUrl" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a :href="footerData.footerAboutWidget.instagramUrl" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30 ps-md-5">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ $localize('common.pages') }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <NuxtLinkLocale to="/">{{ pages().home.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale to="/about">{{ pages().about.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale to="/about">{{ pages().services.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale to="/">{{ pages().portfolio.label }}</NuxtLinkLocale>
                                </li>
                                <li>
                                    <NuxtLinkLocale to="/about">{{ pages().contact.label }}</NuxtLinkLocale>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30">
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
                    <p class="copyright">&copy; 2025 Al Bawaba Orgwania. Made by <a href="https://ofuq.ae" target="_blank">OFUQ Solutions</a></p>
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