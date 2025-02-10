export default (onConfirm: () => void, title: string, message: string, onCancel: () => void) => {
    useModal().showConfirm(onConfirm, title, message, onCancel)
}