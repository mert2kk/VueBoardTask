import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import PostsPage from '@/pages/PostsPage.vue'
import PostDetailsPage from '@/pages/PostDetailsPage.vue'
import PostEditPage from '@/pages/PostEditPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/posts'
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        name: 'PostDetails',
        component: PostDetailsPage,
        props: true
    },
    {
        path: '/posts/:id/edit',
        name: 'PostEdit',
        component: PostEditPage,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router