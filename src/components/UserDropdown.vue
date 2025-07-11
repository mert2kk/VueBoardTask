<template>
  <Select
    v-model="selectedUser"
    :options="users"
    optionLabel="name"
    placeholder="Kullanıcı Seç"
    @change="selectUser"
  />
</template>

<script setup lang="ts">
import { Select } from "primevue";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const users = computed(() => store.state.users.users);
const selectedUser = ref(null);

const selectUser = () => {
  store.dispatch("users/selectUser", selectedUser.value);
};
onMounted(() => {
  store.dispatch("users/fetchUsers");
});
</script>
