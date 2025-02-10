export default (obj: any, prop: string) => {
    const { locale, defaultLocale } = useI18n()
    const current = locale.value
    const toSearchPropsDefault = [
        // prop
        prop,
        // prop_en
        `${prop}_${defaultLocale}`
    ]
    if (current == defaultLocale) {
        for (const p of toSearchPropsDefault) {
            if (p in obj) return obj[p]
        }
    }
    const capitalizeCurrent = `${current.charAt(0).toUpperCase()}${current.slice(1)}`
    const toSearchProps = [
        // prop_ar
        `${prop}_${current}`,
        // propAr
        `${prop}${capitalizeCurrent}`,
        // prop_Ar
        `${prop}${capitalizeCurrent}`,
        // prop_en => prop_ar
        prop.endsWith(`_${defaultLocale}`) ?
         `${prop.replace(`_${defaultLocale}`, `_${current}`)}` : undefined
    ]

    for (const p of toSearchProps) {
        if (p && p in obj) return obj[p]
    }
    return obj[prop]
}