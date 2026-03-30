// Mapped and Conditional types

// Mapped Type

type User = {
    id: string,
    name: string,
    isAdmin: boolean
}
/*
    for each key K in User:
    create property K with type User[K]
*/
type guestUser = {
    [K in keyof User]?: User[K]
}