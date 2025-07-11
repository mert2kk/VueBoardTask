// src/store/index.ts
import { createStore, StoreOptions } from 'vuex'
import type { RootState } from './types'

import posts from './posts/posts'
import comments from './comments/comments'
import users from './users/users'



const storeOptions: StoreOptions<RootState> = {
    modules: {
        users,
        posts,
        comments

    }
}

const store = createStore<RootState>(storeOptions)

export default store
