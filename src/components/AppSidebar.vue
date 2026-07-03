<template>
  <aside class="w-64 bg-black border-r border-neon-blue h-screen sticky top-0 flex flex-col transition-all duration-300">
    <div class="p-6 border-b border-gray-900">
      <h2 class="text-neon-blue font-bold text-xl tracking-tighter drop-shadow-[0_0_8px_#00f3ff]">
        Adeath <span class="text-white">anime</span>
      </h2>
    </div>

    <nav class="flex-1 px-4 py-6 space-y-2">
      <button 
        @click="$emit('change-tab', 'anime')" 
        :class="['nav-link w-full text-left', currentTab === 'anime' ? 'active' : '']"
      >
        <i class="fas fa-fire w-6"></i>
        <span>Trending Anime</span>
      </button>
      
      <button 
        @click="$emit('change-tab', 'manga')" 
        :class="['nav-link w-full text-left', currentTab === 'manga' ? 'active' : '']"
      >
        <i class="fas fa-book w-6"></i>
        <span>Manga List</span>
      </button>
    </nav>
    <button 
        @click="$emit('change-tab', 'about')" 
        :class="['nav-link w-full text-left', currentTab === 'about' ? 'active' : '']"
      >
        <i class="fas fa-info-circle w-6"></i>
        <span>Tentang</span>
      </button>

  </aside>
</template>

<script setup>
defineProps({
  currentTab: String
});
defineEmits(['change-tab']);
</script>

<style scoped>
.nav-link {
  @apply flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 transition-all duration-200 border border-transparent hover:text-white hover:bg-gray-900;
}

.nav-link.active {
  @apply text-neon-blue bg-neon-blue/10 border-neon-blue/30 shadow-[0_0_10px_rgba(0,243,255,0.1)];
}
</style>