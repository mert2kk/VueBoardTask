import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/home-board.vue'
import PostsPage from '../pages/posts-page.vue'
import PostScreen from '../pages/PostScreen.vue'
import NotFound from '../pages/not-found.vue'
import Albums from "../pages/albums-page.vue"
import NewPost from '../pages/new-post.vue'
import store from "@/store";




const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/posts', component: PostsPage },
    { path: '/posts/:id/edit', component: PostScreen },
    { path: '/posts/:id', component: PostScreen },
    { path: '/albums', component: Albums },
    { path: '/posts/new', component: NewPost },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.users.currentUser;

    if (!isAuthenticated && to.path !== "/") {
        next("/");
    } else {
        next();
    }
});

export default router