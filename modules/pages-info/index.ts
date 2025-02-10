import { createResolver, defineNuxtModule, installModule, addImports, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addImportsDir(resolve("./utils"))
  }
})