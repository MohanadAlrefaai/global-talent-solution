<template>
    <div class="icon-box text-center" :class="addClassName">
        <div class="icon">
            <img class="svgInject" :src="service.iconSrc" :alt="service.title">
        </div>
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