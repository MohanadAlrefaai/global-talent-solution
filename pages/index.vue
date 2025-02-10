<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <HeroSliderOne />
        <FeatureOne :style="{backgroundColor: '#f8faff'}" />
        <FunfactWithTitle />
        <PortfolioGallery :is-home="true"/>
        <AboutOne />
        <!-- <SuccessStory /> -->
        <!-- <BlogSectionOne /> -->
        <!-- <Newsletter /> -->
        <FaqOne />
        <!-- <CallToActionOne /> -->
        <ContactSectionTwo />
        <TheFooter />
    </div>
</template>     

<script setup>

setPage(pages().home)
</script>


