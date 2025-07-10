<template>
  <div class="flex flex-col items-center">
    <header>
      <h1 class="flex flex-col items-center">VueBoard</h1>
    </header>

    <main>
      <div class="flex flex-col"><Toast /><router-view /></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
</script>
