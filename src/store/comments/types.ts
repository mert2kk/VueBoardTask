export interface Comment {
    postId: number
    id: number | undefined
    name: string
    email: string
    body: string
}

export interface CommentsState {
    comments: Comment[]
    comment: Comment
}