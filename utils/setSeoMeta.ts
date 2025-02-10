const base_url = "https://ofuq.ae"

export default (title: string, description: string, image?: string, url?: string) => {
  if (!title) {
    title = "OFUQ"
  } else {
    title = `${title} | OFUQ`
  }
  if (!description) {
    description = `At OFUQ, we're more than just a software development agency; we're your strategic partner in digital innovation.`
  }
  if (!image) {
    image = "https://ofuq.ae/img/logo/svg/logo.svg"
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
    ogSiteName: "OFUQ Solutions",
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
