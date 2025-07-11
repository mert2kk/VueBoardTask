import { Module } from 'vuex'
import axios from 'axios'

import { CommentsState, Comment } from './types'
import { RootState } from '../types'
import { ActionContext } from 'vuex'
import posts from '../posts/posts'


const initialState = (): CommentsState => ({
    comments: [],
    comment: {} as Comment
})

const state: CommentsState = initialState()

const mutations = {
    setComments(state: CommentsState, comments: Comment[]) {
        state.comments = comments
    },
    addComment(state: CommentsState, comment: Comment) {
        state.comments.push(comment)
    },
    resetComment(state: CommentsState) {
        state.comment = {
            postId: state.comment.postId,
            id: undefined,
            name: '',
            email: '',
            body: ''
        }
    }

}

const actions = {
    async fetchComments({ commit }: ActionContext<CommentsState, RootState>, postId: number) {
        try {
            const response = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            commit('setComments', response.data)
        } catch (error) {
            console.error('Error while fetching the comments', error)
        }
    },
    async createComment({ commit, }: ActionContext<CommentsState, RootState>, comment: Comment) {
        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/comments`, comment);

            const createdComment = {
                ...comment,
                id: response.data.id, // jsonplaceholder sadece id dönüyor
            };

            commit("addComment", createdComment);
            // dispatch("fetchComments", comment.postId); // Doesnt make sense  with Mock Api

        } catch (error) {
            console.error("sharing comment error", error);
            throw error;
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
