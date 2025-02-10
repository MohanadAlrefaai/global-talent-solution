<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Portfolio Gallery" :title="$localize('pages.portfolios.title')" backgroundUrl= "/images/elevators/9.jpeg" />
        
        <PortfolioGallery />

        <CallToActionOne />
        <TheFooter />
    </div>
</template>

<script setup>
setPage(pages().portfolio)
</script>


