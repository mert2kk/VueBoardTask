<template>
  <div class="h-screen">
    <div>
      <Menubar :model="items" />
    </div>

    <div class="flex-1 p-[5rem] overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => router.push("/"),
  },
  {
    label: "Posts",
    icon: "pi pi-list",
    command: () => router.push("/posts"),
  },
  {
    label: "Albums",
    icon: "pi pi-images",
    command: () => router.push("/albums"),
  },
]);
</script>
