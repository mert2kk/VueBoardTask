import { Module } from 'vuex'
import axios from 'axios'

import { CommentsState, Comment } from './types'
import { RootState } from '../types'
import { ActionContext } from 'vuex'


const initialState = (): CommentsState => ({
    comments: [],
    comment: {} as Comment
})

const state: CommentsState = initialState()

const mutations = {
    setComments(state: CommentsState, comments: Comment[]) {
        state.comments = comments
    },

}

const actions = {
    async fetchComments({ commit }: ActionContext<CommentsState, RootState>, postId: number) {
        try {
            const response = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            commit('setComments', response.data)
        } catch (error) {
            console.error('Error while fetching the comments', error)
        }
    }
}


















const comments: Module<CommentsState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
};

export default comments;
