<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <NuxtLinkLocale :to="pages().home.route">{{ pages().home.label }}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="pages().about.route">{{ pages().about.label }}</NuxtLinkLocale>
            </li>
            <li class="has-children">
                <NuxtLinkLocale :to="pages().services.route">{{ pages().services.label }}</NuxtLinkLocale>
                <ul class="sub-menu">
                    <li v-for="service in serviceData">
                        <NuxtLinkLocale :to="`/service/${service.slug}`">{{ $transalteTitle(service) }}</NuxtLinkLocale>
                    </li>
                </ul>
            </li>
            
            <li>
                <NuxtLinkLocale :to="pages().technology.route">{{pages().technology.label}}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="pages().whyus.route">{{pages().whyus.label}}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="pages().contact.route">{{ pages().contact.label }}</NuxtLinkLocale>
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