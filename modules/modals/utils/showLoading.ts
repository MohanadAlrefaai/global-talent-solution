export default (message: string, title: string) => {
    useModal().showLoading(message, title)
}