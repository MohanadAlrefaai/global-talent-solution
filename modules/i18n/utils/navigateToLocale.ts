export default (route: string) => {
    const localePath = useLocalePath()

    return navigateTo(localePath(route))
}