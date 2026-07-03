<template>
  <DefaultLayout :currentTab="activeTab" @change-tab="switchTab">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-gray-100 tracking-wide drop-shadow-[0_0_10px_#00f3ff] capitalize">
          🔥 {{ activeTab === 'about' ? 'System Information' : `Top Trending ${activeTab}` }}
        </h2>
        <div class="h-[2px] flex-1 bg-gradient-to-r from-neon-blue to-transparent ml-6 hidden sm:block"></div>
      </div>
      
      
      <div v-if="activeTab === 'about'" class="bg-card-bg border border-gray-800 rounded-xl p-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden">
        <div class="absolute top-0 left-0 w-[4px] h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"></div>
        
        <h3 class="text-xl font-bold text-neon-blue mb-4">MonZy Anime & Manga Web System</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-6">
          Aplikasi web dashboard ini dirancang menggunakan komponen modern berbasis <strong>Vue 3 (Composition API)</strong> dan dikombinasikan dengan utility-first framework <strong>Tailwind CSS</strong> untuk menghasilkan antarmuka bertema fiksi ilmiah/cyberpunk yang responsif dan performan.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div class="bg-black/40 p-4 rounded-lg border border-gray-900">
            <h4 class="text-white font-semibold mb-2"><i class="fas fa-code-branch text-neon-red mr-2"></i> Sumber Data API</h4>
            <p class="text-gray-400">Mengonsumsi data secara asinkron (real-time fetch) menggunakan library Axios yang terintegrasi langsung dengan <strong>Jikan API</strong> (Official Unofficial MyAnimeList API).</p>
          </div>
          
          <div class="bg-black/40 p-4 rounded-lg border border-gray-900">
            <h4 class="text-white font-semibold mb-2"><i class="fas fa-layer-group text-neon-blue mr-2"></i> Konsep Layouting</h4>
            <p class="text-gray-400">Menerapkan arsitektur layout terpisah (Sidebar, Header, dan Main Content) yang dinamis guna mempermudah manajemen state serta mempercepat rendering komponen.</p>
          </div>
        </div>
      </div>

      
      <div v-else-if="loading" class="flex flex-col items-center justify-center p-24 gap-4">
        <div class="w-12 h-12 border-4 border-transparent border-t-neon-blue rounded-full animate-spin shadow-[0_0_15px_#00f3ff]"></div>
        <p class="text-neon-blue font-medium tracking-widest text-sm animate-pulse">FETCHING {{ activeTab.toUpperCase() }} DATA...</p>
      </div>

      
      <div v-else-if="error" class="text-center p-12 text-neon-red drop-shadow-[0_0_8px_#ff003c] font-medium border border-neon-red bg-neon-red/10 rounded-xl">
        {{ error }}
      </div>
      
      
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimeCard 
          v-for="item in currentData" 
          :key="item.mal_id"
          :title="item.title"
          :image="item.images.jpg.image_url"
          :synopsis="item.synopsis"
          :rating="item.score"
          :type="item.type"
          :extraInfo="activeTab === 'anime' ? `Episodes: ${item.episodes || '?'}` : `Chapters: ${item.chapters || '?'}`"
        />
      </div>

    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import AnimeCard from '../components/AnimeCard.vue';
import { getTopAnime, getTopManga } from '../services/api';

const activeTab = ref('anime');
const currentData = ref([]);
const loading = ref(true);
const error = ref(null);

const loadData = async (type) => {
  if (type === 'about') return;
  
  loading.value = true;
  error.value = null;
  try {
    if (type === 'anime') {
      currentData.value = await getTopAnime();
    } else {
      currentData.value = await getTopManga();
    }
  } catch (err) {
    error.value = `Failed to connect with central ${type} server database.`;
  } finally {
    loading.value = false;
  }
};

const switchTab = (tab) => {
  activeTab.value = tab;
  loadData(tab);
};

onMounted(() => {
  loadData('anime');
});
</script>