<template>
  <div class="menu">
    <div class="card flex justify-center">
      <Button
        icon="pi pi-ellipsis-v"
        severity="secondary"
        size="small"
        class="p-button-text"
        @click="toggleMenu"
        aria-label="Post actions"
      />
      <Menu ref="menu" :model="items" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "primevue/menu";
import { Button } from "primevue";
import { useToast } from "primevue/usetoast";
import { useStore } from "@/store/useStore";
import { useRouter } from "vue-router";
import { defineProps, ref } from "vue";

const toast = useToast();
const router = useRouter();
const PostsStore = useStore();

const props = defineProps<{
  postId: number;
}>();

const goToDetails = () => router.push(`/posts/${props.postId}`);

const goToEdit = () => router.push(`/posts/${props.postId}/edit`);

const deletePost = () => {
  toast.add({
    severity: "warn",
    summary: "Delete",
    detail: "Post Deleted",
    life: 3000,
  });
  PostsStore.dispatch("posts/deletePost", props.postId);
};

const menu = ref();
const items = [
  { label: "View", icon: "pi pi-eye", command: () => goToDetails() },
  { label: "Edit", icon: "pi pi-pencil", command: () => goToEdit() },
  { separator: true },
  {
    label: "Delete",
    icon: "pi pi-trash",
    command: () => deletePost(),
    class: "text-red-600",
  },
];

function toggleMenu(event: MouseEvent) {
  menu.value?.toggle(event);
}
</script>
