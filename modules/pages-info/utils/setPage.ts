// @ts-nocheck
interface DefinedPageMeta {
    label: string
    description: string
    image?: string
    route?: string
    icon?: string
}

export default (page: DefinedPageMeta) => {
    let title = page.label
    let description = page.description
    let image = page.image
    // let url = page.route
    let url = useRoute().path

    const base_url = useRuntimeConfig().public.baseUrl
    if (!title) {
        title = $localize("common.title")
    } else {
        title = `${title} | ${$localize("common.title")}`
    }
    if (!description) {
        description = `At Al Bawaba Orgwania Company, we believe that strong relationships are the foundation of exceptional service. We understand that every client is unique, and we take the time to listen to your specific needs and challenges. Our team of experienced professionals work closely with you to develop customized elevator solutions that meet your requirements and exceed your expectations. From the initial consultation to ongoing maintenance and support, we are committed to providing personalized service and building long-term partnerships. We are dedicated to being your trusted advisor and your reliable partner in vertical transportation.`
    }
    if (!image) {
        image = "https://albawaba-orgwania/images/logo/logo-light.png"
    } else {
        if (!image.startsWith("https://")) {
            image = `${base_url}${image}`
        }
    }

    if (!url) {
        url = base_url
    } else {
        url = `${base_url}${url}`
    }

    useSeoMeta({
        title: title,
        description: description,
        ogUrl: url,
        ogTitle: title,
        ogType: "website",
        ogDescription: description,
        ogImage: image,
        ogSiteName: "Al Bawaba Orgwania",
        ogImageHeight: 200,
        ogImageWidth: 300,
        ogImageAlt: "Blog Image",
        twitterCard: 'summary_large_image',
        twitterSite: url,
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: image,
    })

    useLocaleHead()
}