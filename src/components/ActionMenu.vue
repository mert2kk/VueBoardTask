<template>
  <div class="menu">
    <div class="card flex justify-center">
      <SplitButton
        icon="pi pi-ellipsis-v"
        :model="items"
        severity="secondary"
        size="small"
        buttonClass="p-button-text"
        aria-label="Post actions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SplitButton from "primevue/splitbutton";
import { useToast } from "primevue/usetoast";

const toast = useToast();

import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps<{
  postId: number;
}>();

const router = useRouter();

const items = [
  {
    label: "Details",
    command: () => {
      goToDetails();
    },
  },
  {
    label: "Edit",
    command: () => {
      goToEdit();
    },
  },
  {
    separator: true,
  },
  {
    label: "Delete",
    command: () => {
      toast.add({
        severity: "warn",
        summary: "Delete",
        detail: "Post Deleted",
        life: 3000,
      });
      deletePost();
    },
  },
];

const goToDetails = () => router.push(`/posts/${props.postId}`);
const goToEdit = () => router.push(`/posts/${props.postId}/edit`);
const deletePost = () => {
  console.log(`Deleted post ${props.postId}`);
};
</script>
