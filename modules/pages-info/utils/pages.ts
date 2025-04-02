// @ts-nocheck

export default () => ({
    home: {
        label: $localize("pages.home.title"),
        description: $localize("pages.home.description"),
        icon: "i-heroicons-home",
        route: "/"
    },
    about: {
        label: $localize("pages.about.title"),
        description: $localize("pages.about.description"),
        icon: "i-heroicons-home",
        route: "/about"
    },
    contact: {
        label: $localize("pages.contact.title"),
        description: $localize("pages.contact.description"),
        icon: "i-heroicons-home",
        route: "/contact-us"
    },
    technology: {
        label: $localize("pages.technology.title"),
        description: $localize("pages.technology.description"),
        icon: "i-heroicons-home",
        route: "/technology"
    },
    whyus: {
        label: $localize("pages.whyus.title"),
        description: $localize("pages.whyus.description"),
        icon: "i-heroicons-home",
        route: "/why-gts"
    },
    services: {
        label: $localize("pages.services.title"),
        description: $localize("pages.services.description"),
        icon: "i-heroicons-home",
        route: "/service"
    },
    service: (service: any) => ({
        label: $transalteTitle(service),
        description: $transalteText(service),
        icon: "i-heroicons:newspaper",
        route: `/service/${service.slug}`
    })
})