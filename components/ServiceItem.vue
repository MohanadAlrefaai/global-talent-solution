<template>
    <div class="border border-1  rounded overflow-hidden text-center m-2" :class="addClassName">
        <!-- <div class="icon"> -->
            <img class="mb-4" :src="service.imgSrc" :alt="service.title">
        <!-- </div> -->
        <div class="content">
            <h3 class="title">{{ $transalteTitle(service) }}</h3>
            <div class="desc">
                <p>{{ $transalteText(service) }}</p>
            </div>
            <NuxtLinkLocale :to="`/service/${service.slug}`" class="link">{{ $localize("common.btn-details") }}</NuxtLinkLocale>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service', 'addClassName']
    };
</script>

<style>
img {
    object-fit: cover;
    object-position: center;
    aspect-ratio: 3/2;
}
</style>