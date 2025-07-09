<template>
  <header>
    <div class="bg-red-200"><router-view /></div>
    <div class="p-6 bg-gray-100 min-h-screen">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">
        Tailwind + PrimeVue Test
      </h1>
      <Button label="Kaydet" class="p-button-success mr-2" />
      <Button label="Sil" class="p-button-danger" />
    </div>
  </header>

  <main></main>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>
