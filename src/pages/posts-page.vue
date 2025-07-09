<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import { onMounted, computed } from "vue";
import { useStore } from "@/store/useStore";
import type { Post } from "@/store/posts/types";

const PostsStore = useStore();

onMounted(() => {
  PostsStore.dispatch("posts/fetchPosts");
});

const posts = computed<Post[]>(() => PostsStore.state.posts.posts);
</script>
