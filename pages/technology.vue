<script setup lang="ts">
const title = computed(() => $localize('pages.technology.title'))

import items from '~/data/technology.json';

setPage(pages().technology)
</script>

<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Why GTS" :title="title" backgroundUrl="/images/slides/gts-4.jpeg" />


        <div class="container">
            <!-- Section Title Two Start -->
            <div class="mt-5 section-title text-center" data-aos="fade-up">
                <h2 class="title">{{ $localize('comps.technology.title') }}</h2>
                <p class="sub-title">{{ $localize('comps.technology.subtitle') }}</p>
            </div>
            <!-- Section Title Two End -->
            <CardItem v-for="(item, index) in items" :item="item" :index="index" />
        </div>

        <CallToActionTwo />
        <TheFooter />
    </div>
</template>
