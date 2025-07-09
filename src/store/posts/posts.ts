import { Module } from 'vuex'
import axios from 'axios'
import { PostsState, Post } from './types'
import { RootState } from '../types'
import { ActionContext } from 'vuex'



const initialState = (): PostsState => ({
    posts: [],
    post: null
})

const state: PostsState = initialState()

const getters = {
    postLength: (state: PostsState) => state.posts.length
}

const mutations = {
    setPosts(state: PostsState, posts: Post[]) {
        state.posts = posts
    },
    addPost(state: PostsState, post: Post) {
        state.posts.push(post)
    }
}

const actions = {
    async fetchPosts({ commit }: ActionContext<PostsState, RootState>) {
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            commit('setPosts', response.data)
        } catch (error) {
            console.error('Error while fetching the posts', error)
        }
        commit('setPosts', state.posts)
    }
}

const posts: Module<PostsState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default posts