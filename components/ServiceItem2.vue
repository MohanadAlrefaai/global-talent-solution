<template>
    <div class="work">
        <div class="thumbnail">
            <NuxtLinkLocale  :to="pages().service(service).route" class="image">
                <img :src="service.imgSrc" :alt="service.title">
            </NuxtLinkLocale>
        </div>
        <div class="info">
            <h3 class="title">
                <NuxtLinkLocale  :to="pages().service(service).route">{{ service.title }}</NuxtLinkLocale>
            </h3>
            <p class="desc">{{ service.desc }}</p>
            <NuxtLinkLocale :to="pages().service(service).route">View Details</NuxtLinkLocale>
        </div>
    </div>
</template>

<script >
export default {
    props: ['service', 'addClassName']
};
</script>

<style scoped>
img {
    object-fit: cover;
    object-position: center;
    aspect-ratio: 3/2;
}
</style>