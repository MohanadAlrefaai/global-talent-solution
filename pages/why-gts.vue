<script setup lang="ts">
const title = computed(() => $localize('pages.whyus.title'))

setPage(pages().whyus)
</script>

<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Why GTS" :title="title" backgroundUrl= "/images/slides/gts-4.jpeg" />
        
        <h2 class="title text-center my-5">To be implemented...</h2>
        <!-- <AboutFour />
        <FunfactWithTitle /> -->
        <!-- <AboutTwo class="section-padding-top about-section-padding-bottom-200" /> -->
        <!-- <CallToActionVideo /> -->
        <!-- <AboutOne /> -->
        <!-- <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" /> -->
        <!-- <ContactSectionTwo /> -->
        <TheFooter />
    </div>
</template>


