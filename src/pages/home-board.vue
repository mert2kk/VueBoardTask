<template>
  <div class="flex justify-center">{{ currentUser?.name }}'s Home Page</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "@/store/useStore";

const store = useStore();

const currentUser = computed(() => store.state.users.currentUser);
</script>

<style lang="scss" scoped></style>
