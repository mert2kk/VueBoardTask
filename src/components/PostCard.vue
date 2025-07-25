<template>
  <Tabs v-model:value="activeTab">
    <TabList>
      <Tab value="published">Published</Tab>
      <Tab v-if="isEditMode" value="draft">Draft</Tab>
    </TabList>

    <TabPanel value="published">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </TabPanel>

    <TabPanel value="draft">
      <InputText v-model="post.title" placeholder="Title" class="w-full mb-2" />
      <Textarea
        v-model="post.body"
        rows="10"
        class="w-full"
        placeholder="Content"
        style="resize: none"
      />
    </TabPanel>
    <CommentList :comments="comments" />
    <CommentForm :comment="comment" @submit="addNewComment" />
  </Tabs>
</template>

<script setup lang="ts">
import store from "@/store";
import { defineModel } from "vue";
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanel from "primevue/tabpanel";
import type { Post } from "@/store/posts/types";
import type { Comment } from "@/store/comments/types";
import CommentList from "./CommentList.vue";
import CommentForm from "./CommentForm.vue";
import { Textarea, InputText, useToast } from "primevue";

const post = defineModel<Post>("post", { required: true });
const comments = defineModel<Comment[]>("comments", { required: true });
const comment = defineModel<Comment>("comment", { required: true });

const route = useRoute();
const router = useRouter();
const toast = useToast();

const activeTab = ref<"published" | "draft">("published");

const isEditMode = computed(() => activeTab.value === "draft");

watch(
  () => route.fullPath,
  (path) => {
    activeTab.value = path.includes("/edit") ? "draft" : "published";
  },
  { immediate: true }
);

watch(activeTab, (newTab) => {
  const postId = route.params.id;
  if (newTab === "draft") {
    router.replace(`/posts/${postId}/edit`);
  } else {
    router.replace(`/posts/${postId}`);
  }
});

const addNewComment = async (comment: Comment) => {
  try {
    await store.dispatch("comments/createComment", comment);
    toast.add({ severity: "success", summary: "Comment Added", life: 2000 });
  } catch (error) {
    toast.add({ severity: "error", summary: "Sharing is failed", life: 2000 });
    console.error("Save error", error);
  }
};
</script>
