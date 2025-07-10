<template>
  <div class="space-y-3">
    <Panel v-for="comment in comments" :key="comment.id" :header="comment.name">
      <p class="text-sm text-gray-600 mb-1">
        {{ comment.email }}
      </p>
      <p>{{ comment.body }}</p>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { Panel } from "primevue";
import { defineProps } from "vue";
import type { Comment } from "@/store/comments/types";

defineProps<{
  comments: Comment[];
}>();
</script>
