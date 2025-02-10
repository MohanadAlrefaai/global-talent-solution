<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Service" :title="$localize('pages.services.title')" backgroundUrl= "/images/elevators/9.jpeg" />
        <ServiceWrapper />
        <!-- <SuccessStory :style="{backgroundColor: '#f8faff'}" /> -->
        <AboutFour />
        <FunfactWithTitle />
        <ContactSectionTwo />
        <TheFooter />
    </div>
</template>


