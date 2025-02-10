<script setup lang="ts">
const title = computed(() => $localize('pages.about.title'))

setPage(pages().about)
</script>

<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="About Us" :title="title" backgroundUrl= "/images/elevators/9.jpeg" />
        
        <AboutFour />
        <FunfactWithTitle />
        <!-- <AboutTwo class="section-padding-top about-section-padding-bottom-200" /> -->
        <!-- <CallToActionVideo /> -->
        <AboutOne />
        <!-- <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" /> -->
        <ContactSectionTwo />
        <TheFooter />
    </div>
</template>


