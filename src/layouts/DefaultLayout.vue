<template>
  <div class="flex min-h-screen bg-dark-bg text-gray-200">
    <AppSidebar :currentTab="currentTab" @change-tab="(tab) => $emit('change-tab', tab)" />

    <div class="flex-1 flex flex-col">
      <AppHeader />

      <main class="p-8 bg-[radial-gradient(circle_at_center,_#0a0a15_0%,_#000000_100%)] flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppSidebar from '../components/AppSidebar.vue';

defineProps({
  currentTab: String
});
defineEmits(['change-tab']);
</script>