<template>
  <header class="flex justify-between items-center px-8 py-4 bg-black/60 border-b border-gray-900 backdrop-blur-md">
    <div>
      <h1 class="text-sm text-gray-500 font-mono tracking-widest">DASHBOARD<span class="text-neon-blue">Anime</span></h1>
    </div>
    
    <div class="flex items-center gap-6">
      <div class="hidden md:flex bg-gray-900 px-4 py-1.5 rounded-full border border-gray-800">
        <i class="fas fa-search text-gray-500 mr-2 self-center text-xs"></i>
        <input type="text" placeholder="Search database..." class="bg-transparent text-xs outline-none w-48 text-gray-300">
      </div>

      <div class="flex items-center gap-4">
        <span class="font-medium text-xs tracking-widest">ADIT</span>
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-red to-purple-600 shadow-[0_0_10px_#ff003c]"></div>
      </div>
    </div>
  </header>
</template>