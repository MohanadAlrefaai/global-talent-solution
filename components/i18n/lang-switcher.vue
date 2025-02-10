<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i !== locale.value).map(i => ({
    code: i,
    title: i == "en" ? "English" : "العربية"
  }))
})

const otherLocale = computed(() => availableLocales.value[0] || {})
</script>

<template>
  <NuxtLink :external="true" :key="otherLocale.code" :to="switchLocalePath(otherLocale.code)">
    {{ otherLocale.title }}
  </NuxtLink>
</template>