<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <HeroSliderOne />
        <AboutHomeOne />
        <FeatureOne :style="{backgroundColor: '#f8faff'}" />
        <!-- <PortfolioGallery :is-home="true"/> -->
        <!-- <FunfactWithTitle /> -->
        <!-- <AboutOne /> -->
        <!-- <SuccessStory /> -->
        <!-- <BlogSectionOne /> -->
        <!-- <Newsletter /> -->
        <CallToActionTwo />
         <!-- <AboutFour /> -->
        <FaqOne />
        <!-- <CallToActionOne /> -->
        <ContactSectionTwo />
        <TheFooter />
    </div>
</template>     

<script setup>

setPage(pages().home)
</script>


