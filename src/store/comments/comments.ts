import { Module } from 'vuex'
import { CommentsState, Comment } from './types'
import { RootState } from '../types'

export const comments: Module<CommentsState, RootState> = {
    namespaced: true,
    state: () => ({
        comments: []
    }),
    mutations: {
        setComments(state, comments: Comment[]) {
            state.comments = comments
        }
    },
    actions: {
        async fetchComments({ commit }) {
            const comments = await Promise.resolve([
                { id: 1, postId: 1, text: 'Great post!' }
            ])
            commit('setComments', comments)
        }
    },
    getters: {
        commentsByPost: (state) => (postId: number) =>
            state.comments.filter(comment => comment.postId === postId)
    }
}