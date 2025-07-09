import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/home-board.vue'
import PostsPage from '../pages/posts-page.vue'
import PostDetails from '@/pages/post-page/post-details.vue'
import PostEdit from '@/pages/post-page/post-draft.vue'



const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/posts', component: PostsPage },
    { path: '/posts/:id', component: PostDetails },
    { path: '/posts/:id/edit', component: PostEdit }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router