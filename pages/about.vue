<script setup lang="ts">
const title = computed(() => $localize('pages.about.title'))

setPage(pages().about)
</script>

<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="About Us" :title="title" backgroundUrl= "/images/slides/gts-4.jpeg" />
        
        <!-- <h2 class="title text-center my-5">To be implemented...</h2> -->
         
        <!-- <AboutHomeOne /> -->
        <AboutOne />
        <AboutTwo />
        <!-- <AboutThree /> -->
        <AboutFour />
        <AboutFive />
        <!-- <FunfactWithTitle /> -->
        <!-- <CallToActionVideo /> -->
        <!-- <AboutOne /> -->
        <!-- <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" /> -->
        <CallToActionTwo />
        <TheFooter />
    </div>
</template>


