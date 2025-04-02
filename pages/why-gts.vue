<script setup lang="ts">
const title = computed(() => $localize('pages.whyus.title'))

setPage(pages().whyus)
import items from '~/data/whyus.json';
</script>

<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Why GTS" :title="title" backgroundUrl= "/images/slides/gts-4.jpeg" />
        
        <WhyUs />
        <div class="container">
            <!-- Section Title Two Start -->
            <div class="pt-0 section-title text-center" data-aos="fade-up">
                <h2 class="title">{{ $localize('comps.whygts-section2.title') }}</h2>
                <p class="sub-title">{{ $localize('comps.whygts-section2.subtitle') }}</p>
            </div>
            <!-- Section Title Two End -->
            <CardItem v-for="(item, index) in items" :item="item" :index="index" />
        </div>
        <!-- <AboutFour />
        <FunfactWithTitle /> -->
        <!-- <AboutTwo class="section-padding-top about-section-padding-bottom-200" /> -->
        <!-- <CallToActionVideo /> -->
        <!-- <AboutOne /> -->
        <!-- <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" /> -->
        <CallToActionTwo />
        <TheFooter />
    </div>
</template>


