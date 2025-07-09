<template>
  <div>
    <template v-if="mode === 'edit'">
      <input v-model="post.title" />
      <textarea v-model="post.body"></textarea>
      <button @click="save">Save</button>
    </template>
    <template v-else>
      <h2>{{ post?.title }}</h2>
      <p>{{ post?.body }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/store/posts/types";
import { defineProps, defineModel } from "vue";

const post = defineModel<Post>({ required: true });

defineProps<{
  mode: "view" | "edit";
}>();

const save = () => {
  console.log("Post saved", post);
};
</script>
