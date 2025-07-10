import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/home-board.vue'
import PostsPage from '../pages/posts-page.vue'
import PostScreen from '../pages/PostScreen.vue'
import NotFound from '../pages/not-found.vue'
import Albums from "../pages/albums-page.vue"



const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/posts', component: PostsPage },
    { path: '/posts/:id/edit', component: PostScreen },
    { path: '/posts/:id', component: PostScreen },
    { path: '/albums', component: Albums },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router