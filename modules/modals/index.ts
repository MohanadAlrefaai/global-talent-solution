import { createResolver, defineNuxtModule, installModule, addImports, addImportsDir, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        addImportsDir(resolve("./composables"))
        addComponentsDir({ path: resolve("./components") })
        addImportsDir(resolve("./utils"))
    }
})