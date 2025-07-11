export interface Post {
    userId: number | undefined
    id: number | undefined
    title: string
    body: string
}

export interface PostsState {
    posts: Post[]
    post: Post | null
}