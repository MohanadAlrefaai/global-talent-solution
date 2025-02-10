export default (imageUrl: string) => {
    // check provider if drive.ofuq.ae =>
    // if doesn't end with download or preview
    // add download or preview
    const url = new URL(imageUrl)
    if (url.host == "drive.ofuq.ae") {
        let href = url.href
        if (url.pathname.endsWith("download")) {
            href = href.replace("download", "preview")
        }
        if (!href.endsWith("preview") ) {
            href = `${href}/preview`
        }

        return `/api/v1/drive-image?image=${href}`
    }
    return imageUrl
  }