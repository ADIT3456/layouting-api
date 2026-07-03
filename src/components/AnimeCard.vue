<template>
  <div class="bg-card-bg rounded-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#00f3ff] border border-gray-800 flex flex-col group">
    <div class="relative h-64 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div class="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-bold text-neon-blue border border-neon-blue shadow-[0_0_5px_#00f3ff]">
        ⭐ {{ rating || 'N/A' }}
      </div>
    </div>

    <div class="p-5 flex-1 flex flex-col justify-between relative">
      <div>
        <h3 class="text-neon-blue text-lg font-bold mb-2 line-clamp-1 group-hover:text-white transition-colors">
          {{ title }}
        </h3>
        <p class="text-gray-400 text-xs mb-4 line-clamp-3 leading-relaxed">
          {{ synopsis || 'No description available.' }}
        </p>
      </div>

      <div class="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>Type: <span class="text-gray-300 font-medium">{{ type }}</span></span>
        <!-- Tampilkan extra info (episodes untuk anime, atau info alternatif untuk manga) -->
        <span v-if="extraInfo">{{ extraInfo }}</span>
      </div>

      <div class="absolute top-0 left-0 w-[3px] h-full bg-neon-red shadow-[0_0_10px_#ff003c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  synopsis: String,
  rating: Number,
  type: String,
  extraInfo: String
});
</script>