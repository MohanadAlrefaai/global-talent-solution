<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Service" :title="$localize('pages.services.title')" backgroundUrl= "/images/slides/gts-4.jpeg" />
        
        <ServiceWrapper />
        <AboutTwo class="mb-60 pb-5"/>
        <!-- <SuccessStory :style="{backgroundColor: '#f8faff'}" /> -->
        <!-- <AboutFour /> -->
        <ContactSectionTwo/>
        <TheFooter />
    </div>
</template>


