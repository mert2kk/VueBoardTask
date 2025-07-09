export interface Post {
    UserId: number
    id: number
    title: string
    body: string
}

export interface PostsState {
    posts: Post[]
    post: Post | null
}