<template>
  <div class="flex flex-row justify-between">
    <TabNav :post="post" mode="view" />
    <div class="flex">
      <Button label="Edit" icon="pi pi-save" @click="editPost" />
    </div>
  </div>

  <PostCard v-model="post" mode="view" />
</template>

<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import TabNav from "@/components/TabNav.vue";
import { Button } from "primevue";

import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "@/store/useStore";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const PostsStore = useStore();

const post = computed(() => PostsStore.state.posts.post!);
const postId = computed(() => route.params.id);

onMounted(() => {
  PostsStore.dispatch("posts/fetchPost", postId.value);
});

async function editPost() {
  router.push(`/posts/${postId.value}/edit`);
}
</script>
