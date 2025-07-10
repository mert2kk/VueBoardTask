<template>
  <Tabs v-model:value="activeTab">
    <TabList>
      <Tab value="published">Published</Tab>
      <Tab value="draft">Draft</Tab>
    </TabList>

    <TabPanel value="published">
      <h3 class="text-xl mb-2">{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </TabPanel>

    <TabPanel value="draft">
      <InputText
        v-model="post.title"
        placeholder="Başlık"
        class="w-full mb-2"
      />
      <Textarea
        v-model="post.body"
        rows="10"
        class="w-full"
        placeholder="İçerik"
      />
    </TabPanel>
  </Tabs>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanel from "primevue/tabpanel";
import type { Post } from "@/store/posts/types";

const post = defineModel<Post>({ required: true });

const route = useRoute();
const router = useRouter();

const activeTab = ref<"published" | "draft">(
  route.fullPath.includes("/edit") ? "draft" : "published"
);

watch(activeTab, (newTab) => {
  const postId = route.params.id;
  if (newTab === "draft") {
    router.replace(`/posts/${postId}/edit`);
  } else {
    router.replace(`/posts/${postId}`);
  }
});
</script>
