<template>
  <div class="space-y-4">
    <div class="flex justify-end">
      <Button label="Create" icon="pi pi-plus" @click="createNewPost" />
    </div>
    <PostList :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import { Button } from "primevue";
import { onMounted, computed } from "vue";
import { useStore } from "@/store/useStore";
import { useRouter } from "vue-router";

import type { Post } from "@/store/posts/types";

const PostsStore = useStore();
const router = useRouter();

onMounted(() => {
  PostsStore.dispatch("posts/fetchPosts");
});

const posts = computed<Post[]>(() => PostsStore.state.posts.posts);

async function createNewPost() {
  const newPostId = await PostsStore.dispatch("posts/createEmptyPost");
  router.push(`/posts/${newPostId}/edit`);
}
</script>
