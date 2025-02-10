import { createResolver, defineNuxtModule, installModule, addImports, addImportsDir } from '@nuxt/kit'
import type { ModuleOptions } from '@nuxtjs/i18n'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // paths needs to be resolved so absolute paths are used
    const moduleOptions: ModuleOptions = {
      langDir: resolve('./lang'),
      locales: [
        {
          code: 'en', 
          language: 'en-US',
          iso: 'en-US',
          file: resolve('./lang/en.json'),
        },
        {
          code: 'ar',
          language: 'ar-AE',
          iso: 'ar-AE',
          file: resolve('./lang/ar.json'),
        },
      ],
      strategy: 'prefix_except_default',
      defaultLocale: 'en',
      detectBrowserLanguage: false,
      baseUrl: process.env.NUXT_BASE_URL,
    }
    await installModule('@nuxtjs/i18n', moduleOptions)

    nuxt.options.i18n = moduleOptions

    addImportsDir(resolve("./utils"))
  }
})