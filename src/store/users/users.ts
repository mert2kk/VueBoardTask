import { Module } from 'vuex'
import axios from 'axios'
import { RootState } from '../types'
import { ActionContext } from 'vuex'

import { UsersState, User } from './types'


const state: UsersState = {
    users: [],
    currentUser: null
}

const mutations = {
    setUsers(state: UsersState, users: User[]) {
        state.users = users
    },
    setCurrentUser(state: UsersState, user: User) {
        state.currentUser = user
    }
}

const actions = {
    async fetchUsers({ commit }: ActionContext<UsersState, RootState>) {
        try {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', response.data)
        } catch (err) {
            console.error('User fetch error', err)
        }
    },
    selectUser({ commit }: ActionContext<UsersState, RootState>, user: User) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        commit('setCurrentUser', user)
    }
}

const users: Module<UsersState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default users