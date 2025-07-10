import { Module } from 'vuex'
import axios from 'axios'
import { PostsState, Post } from './types'
import { RootState } from '../types'
import { ActionContext } from 'vuex'



const initialState = (): PostsState => ({
    posts: [],
    post: {} as Post
})

const state: PostsState = initialState()

const getters = {
    postLength: (state: PostsState) => state.posts.length
}

const mutations = {
    setPosts(state: PostsState, posts: Post[]) {
        state.posts = posts
    },
    setPost(state: PostsState, post: Post) {
        state.post = post
    },
    addPost(state: PostsState, post: Post) {
        state.posts.push(post)
    },
    removePost(state: PostsState, postId: number
    ) {
        state.posts = state.posts.filter(post => post.id !== postId);
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
    }, async fetchPost({ commit }: ActionContext<PostsState, RootState>, postId: number) {
        try {
            const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            commit('setPost', response.data)
        } catch (error) {
            console.error('Error while fetching the post', error)
        }
    },
    async deletePost({ commit }: ActionContext<PostsState, RootState>, postId: number) {
        try {
            await axios.delete<Post[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            commit('removePost', postId);
        } catch (error) {
            console.error('Error while deleting the post', error)
        }
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