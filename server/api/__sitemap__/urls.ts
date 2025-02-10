let urls = [
  "/service/elevator-maintenance",
  "/service/elevator-installation",
  "/service/elevator-programming",

]
export default defineSitemapEventHandler(async () => {
  try {
  } catch (err) {
    console.log(err)
  }
  return [
    ...urls.map(url => ({
      loc: url,
      _i18nTransform: true,
    })),
    // {
    //   loc: '/services/business-emails-2/starter/get-started',
    //   // will end up in the pages sitemap
    //   _sitemap: 'pages',
    // },
    
  ]
})