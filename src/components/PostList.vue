<template>
  <section>
    <h2 class="flex justify-center">Post list</h2>
    <div v-if="posts.length">
      <DataTable :value="posts" tableStyle="min-width: 50rem">
        <Column field="userId" header="UserId"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="body" header="Post Content"></Column>
      </DataTable>
    </div>
    <div v-else>There is no posts loaded</div>
  </section>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { onMounted, computed } from "vue";
import { useStore } from "@/store/useStore";
import { Post } from "@/store/posts/types";

const PostsStore = useStore();

onMounted(() => {
  PostsStore.dispatch("posts/fetchPosts");
});

const posts = computed<Post[]>(() => PostsStore.state.posts.posts);
</script>
