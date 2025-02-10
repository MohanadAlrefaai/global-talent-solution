export default () => {
    return [
        pages().home,
        {
            ...pages().services,
        },
        pages().about,
        pages().contact
    ]
}