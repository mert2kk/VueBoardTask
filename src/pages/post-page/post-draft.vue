<template>
  <div>
    <TabNav mode="edit" />
    <PostCard v-model="post" mode="edit" />
  </div>
</template>

<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "@/store/useStore";

const route = useRoute();
const PostsStore = useStore();

const post = computed(() => PostsStore.state.posts.post!);

onMounted(() => {
  const postId = route.params.id;
  PostsStore.dispatch("posts/fetchPost", postId);
});
</script>
