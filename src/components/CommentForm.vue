<template>
  <Textarea
    v-model="comment.name"
    rows="10"
    class="w-full m-8"
    placeholder="share your comment"
    style="resize: none"
  />

  <Textarea
    v-model="comment.email"
    rows="10"
    class="w-full m-8"
    placeholder="share your comment"
    style="resize: none"
  />

  <Textarea
    v-model="comment.body"
    rows="10"
    class="w-full m-8"
    placeholder="share your comment"
    style="resize: none"
  />

  <Button type="submit" @click="handleSubmit">Share</Button>
</template>

<script setup lang="ts">
import { Button, Textarea } from "primevue";
import { defineModel, defineEmits } from "vue";
import type { Comment } from "@/store/comments/types";

const comment = defineModel<Comment>("comment", { required: true });

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  emit("submit", comment.value);
  comment.value = {
    postId: comment.value.postId,
    id: undefined,
    name: "",
    email: "",
    body: "",
  };
};
</script>
