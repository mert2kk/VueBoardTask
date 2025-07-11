<template>
  <div class="h-screen flex flex-col">
    <div class="w-full shadow-md px-6 py-3 flex justify-between items-center">
      <Menubar :model="items" class="flex-1 mr-4 border-none shadow-none" />
      <UserDropdown />
    </div>

    <div v-if="!currentUser">
      <Message severity="warn" :closable="false">
        Please sign in to continue.
      </Message>
    </div>

    <div v-else class="flex-1 p-[3rem] overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";
import { useStore } from "@/store/useStore";

import UserDropdown from "@/components/UserDropdown.vue";
import Message from "primevue/message";

const store = useStore();
const currentUser = computed(() => store.state.users.currentUser);

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
