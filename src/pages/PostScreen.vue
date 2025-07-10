<template>
  <div class="space-y-4">
    <PostEditTabs v-model="post" />

    <div class="flex justify-end">
      <Button
        v-if="isEditMode"
        label="Save"
        icon="pi pi-save"
        @click="savePost"
      />
      <Button v-else label="Edit" icon="pi pi-pencil" @click="editPost" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostEditTabs from "@/components/PostEditTabs.vue";
import { Button } from "primevue";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "@/store/useStore";

const route = useRoute();
const router = useRouter();
const PostsStore = useStore();

const post = computed(() => PostsStore.state.posts.post!);
const postId = computed(() => route.params.id);

// URL'ye göre mod belirleniyor
const isEditMode = computed(() => route.fullPath.includes("/edit"));

onMounted(() => {
  PostsStore.dispatch("posts/fetchPost", postId.value);
});

async function savePost() {
  PostsStore.dispatch("posts/savePost", post.value);
}

async function editPost() {
  router.push(`/posts/${postId.value}/edit`);
}
</script>
