<template>
  <section>
    <h2 class="flex justify-center">Post list</h2>
    <div v-if="posts.length">
      <DataTable :value="posts" tableStyle="min-width: 50rem">
        <Column field="userId" header="UserId"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="body" header="Post Content"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <ActionMenu :postId="slotProps.data.id" />
          </template>
        </Column>
      </DataTable>
    </div>
    <div v-else>There is no posts loaded yet</div>
  </section>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import type { Post } from "@/store/posts/types";

import { defineProps } from "vue";
import ActionMenu from "./ActionMenu.vue";

defineProps<{
  posts: Post[];
}>();
</script>
