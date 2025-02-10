export default () => {
    const { locale } = useI18n()
    return locale.value.includes("ar")
}

