<template>
    <div class="blog">
        <div class="thumbnail">
            <NuxtLinkLocale :to="`/blog/${blog.slug}`" class="image">
                <img :src="blog.imgSrc" :alt="blog.title">
            </NuxtLinkLocale>
        </div>
        <div class="info">
            <ul class="meta">
                <li><i class="far fa-calendar"></i>{{ blog.date }}</li>
                <li><i class="far fa-eye"></i>{{ blog.view }} Views</li>
            </ul>
            <h3 class="title">
                <NuxtLinkLocale :to="`/blog/${blog.slug}`">{{ blog.title }}</NuxtLinkLocale>
            </h3>
            <NuxtLinkLocale :to="`/blog/${blog.slug}`" class="link">
                <mark>Read More</mark>
            </NuxtLinkLocale>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>