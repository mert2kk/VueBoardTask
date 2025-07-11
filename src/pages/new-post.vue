<!-- NewPostPage.vue -->
<template>
  <form @submit.prevent="submitPost">
    <InputText placeholder="Title" class="w-full mb-2" />
    <Textarea
      rows="10"
      class="w-full"
      placeholder="Content"
      style="resize: none"
    />
    <Button type="submit">Add</Button>
  </form>
</template>

<script setup lang="ts">
import { Button, Textarea, InputText } from "primevue";
// import { defineModel } from "vue";
// import type { Post } from "@/store/posts/types";

const submitPost = async () => {};
</script>
