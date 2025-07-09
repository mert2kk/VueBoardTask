// src/store/index.ts
import { createStore, StoreOptions } from 'vuex'
import type { RootState } from './types'

import posts from './posts/posts'
// import comments from './comments/comments'



const storeOptions: StoreOptions<RootState> = {
    modules: {
        posts
    }
}

const store = createStore<RootState>(storeOptions)

export default store
