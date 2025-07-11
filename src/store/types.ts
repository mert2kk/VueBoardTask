import type { PostsState } from './posts/types'
import type { CommentsState } from './comments/types'
import type { UsersState } from './users/types'

export interface RootState {
    posts: PostsState
    comments: CommentsState
    users: UsersState

}