<template>
  <div class="py-4">
    <div class="flex justify-end py-10">
      <Button
        v-if="isEditMode"
        label="Save"
        icon="pi pi-save"
        @click="savePost"
      />
      <Button v-else label="Edit" icon="pi pi-pencil" @click="editPost" />
    </div>
    <PostCard v-model="post" />
  </div>
</template>

<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import { Button, useToast } from "primevue";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "@/store/useStore";

const route = useRoute();
const router = useRouter();
const PostsStore = useStore();
const toast = useToast();

const post = computed(() => PostsStore.state.posts.post!);
const postId = computed(() => route.params.id);

// URL'ye göre mod belirleniyor
const isEditMode = computed(() => route.fullPath.includes("/edit"));

onMounted(() => {
  PostsStore.dispatch("posts/fetchPost", postId.value);
});

async function editPost() {
  router.push(`/posts/${postId.value}/edit`);
}

async function savePost() {
  try {
    await PostsStore.dispatch("posts/savePost", post.value);
    toast.add({ severity: "success", summary: "Saved", life: 2000 });
    router.push(`/posts/${postId.value}`);
  } catch (error) {
    toast.add({ severity: "error", summary: "Save failed", life: 2000 });
    console.error("Save error", error);
  }
}
</script>
