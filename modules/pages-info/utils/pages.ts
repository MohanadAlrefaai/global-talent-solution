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
        route: "/about-us"
    },
    contact: {
        label: $localize("pages.contact.title"),
        description: $localize("pages.contact.description"),
        icon: "i-heroicons-home",
        route: "/contact-us"
    },
    portfolio: {
        label: $localize("pages.portfolios.title"),
        description: $localize("pages.portfolios.description"),
        icon: "i-heroicons-home",
        route: "/portfolio-gallery"
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