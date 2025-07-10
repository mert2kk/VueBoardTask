<template>
  <Tabs v-model:value="active">
    <TabList>
      <Tab
        v-if="mode === 'view'"
        value="published"
        @click="goTo(`/posts/${post.id}`)"
        >Published</Tab
      >
      <Tab
        v-if="mode === 'edit'"
        value="drafts"
        @click="goTo(`/posts/${post.id}/edit`)"
        >Drafts</Tab
      >
    </TabList>
  </Tabs>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { defineProps } from "vue";
import type { Post } from "@/store/posts/types";

const router = useRouter();
const active = ref("published");

defineProps<{
  mode: "view" | "edit";
  post: Post;
}>();

function goTo(path: string) {
  router.push(path);
}
</script>
