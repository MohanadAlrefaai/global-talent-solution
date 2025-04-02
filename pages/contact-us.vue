<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Contact Us" :title="$localize('pages.contact.title')" backgroundUrl= "/images/slides/gts-4.jpeg" />
        <CallToActionOne />

        
        <ContactForm />
        <!--Google Map Area Start-->
        <div class="google-map-area section-padding-bottom">
            <div class="container">
                <div class="contact-map-area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23042.619424798897!2d-79.46512329687359!3d43.786818392030554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d4dc16beb9b%3A0x700194eeeb05f029!2s1881%20Steeles%20Ave%20W%2C%20North%20York%2C%20ON%20M3H%205Y4%2C%20Canada!5e0!3m2!1sen!2sae!4v1742900848224!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
        </div>
        <!--Google Map Area Start-->
        <TheFooter />
    </div>
</template>


<script setup>

setPage(pages().contact)
</script>