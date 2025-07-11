<!-- NewPostPage.vue -->
<template>
  <InputText placeholder="Title" class="w-full mb-2" v-model="post.title" />
  <Textarea
    rows="10"
    class="w-full"
    placeholder="Content"
    style="resize: none"
    v-model="post.body"
  />
  <Button type="submit" @click="submitPost">Add</Button>
</template>

<script setup lang="ts">
import store from "@/store";
import { Button, Textarea, InputText, useToast } from "primevue";
import { useRouter } from "vue-router";
import { computed } from "vue";

const toast = useToast();
const router = useRouter();

const post = computed(() => store.state.posts.post!);

const submitPost = async () => {
  try {
    await store.dispatch("posts/createPost", post.value);
    toast.add({ severity: "success", summary: "Created", life: 2000 });
    router.push(`/posts`);
  } catch (error) {
    toast.add({ severity: "error", summary: "Creation is failed", life: 2000 });
    console.error("Save error", error);
  }
};
</script>
