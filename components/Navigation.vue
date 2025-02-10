<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <NuxtLinkLocale to="/">{{ pages().home.label }}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale to="/about">{{ pages().about.label }}</NuxtLinkLocale>
            </li>
            <li class="has-children">
                <NuxtLinkLocale to="/service">{{ pages().services.label }}</NuxtLinkLocale>
                <ul class="sub-menu">
                    <li v-for="service in serviceData">
                        <NuxtLinkLocale :href="`/service/${service.slug}`">{{ $transalteTitle(service) }}</NuxtLinkLocale>
                    </li>
                </ul>
            </li>
            <li>
                <NuxtLinkLocale to="/portfolio-gallery">{{pages().portfolio.label}}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale to="/contact-us">{{ pages().contact.label }}</NuxtLinkLocale>
            </li>
            <li>
                <I18nLangSwitcher />
            </li>
        </ul>
    </nav>
</template>

<script setup>
    import serviceData from '~/data/service.json';
</script>