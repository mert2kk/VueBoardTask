import { PostsState } from './posts/types'
import { CommentsState } from './comments/types'

export interface RootState {
    posts: PostsState
    comments: CommentsState
}