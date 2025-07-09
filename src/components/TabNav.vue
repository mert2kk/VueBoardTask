<template>
  <Tabs v-model:value="active">
    <TabList>
      <Tab value="published" @click="goTo('/post-page')">Published</Tab>
      <Tab value="drafts" @click="goTo('/post-page/draft')">Drafts</Tab>
    </TabList>
  </Tabs>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { ref } from "vue";

const router = useRouter();
const active = ref("published");

function goTo(path: string) {
  router.push(path);
}
</script>
