<template>
  <div class="custom-design" :lang="lang" :dir="dir">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

const { locale } = useI18n()

const lang = computed(() => locale.value)

const dir = computed(() => {
  let prevDir = ''
  let nextDir = ''
  if (lang.value.includes('ar')) {
    prevDir = 'ltr'
    nextDir = 'rtl'
  } else {
    prevDir = 'rtl'
    nextDir = 'ltr'
  }
  useHead({
    htmlAttrs: {
      lang: lang.value
    }
  })
  if (process.client) {
    // const bodyClasses = document.body.classList
    // bodyClasses.remove(prevDir)
    // bodyClasses.add(nextDir)
    //document.documentElement.lang = lang.value
  }
  return nextDir
})


</script>

<style></style>