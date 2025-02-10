export default (key: string) => {
    const { $i18n } = useNuxtApp();
    return $i18n.t(key)
}