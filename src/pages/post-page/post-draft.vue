<template>
  <div>
    <div></div>
    <TabNav :post="post" mode="edit" />
    <PostCard v-model="post" mode="edit" />
  </div>
  <div class="flex justify-end">
    <Button label="Save" icon="pi pi-save" @click="savePost" />
  </div>
</template>

<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import TabNav from "@/components/TabNav.vue";

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

function savePost() {
  // PostsStore.dispatch("posts/savePost", post.value);
}
</script>
