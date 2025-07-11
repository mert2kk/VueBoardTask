<template>
  <div>
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

const store = useStore();
const router = useRouter();

onMounted(() => {
  store.dispatch("posts/fetchPosts");
});

const posts = computed<Post[]>(() => store.state.posts.posts!);

async function createNewPost() {
  router.push(`/posts/new`);
}
</script>
