<template>
  <div class="menu">
    <button @click="goToDetails">Details</button>
    <button @click="goToEdit">Edit</button>
    <button @click="deletePost">Delete</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps({ postId: Number });
const router = useRouter();

const goToDetails = () => router.push(`/posts/${props.postId}`);
const goToEdit = () => router.push(`/posts/${props.postId}/edit`);
const deletePost = () => {
  console.log(`Deleted post ${props.postId}`);
};
</script>
