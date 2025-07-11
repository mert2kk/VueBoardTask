export interface User {
    id: number
    name: string
    username: string
    email: string
}

export interface UsersState {
    users: User[]
    currentUser: User | null
}