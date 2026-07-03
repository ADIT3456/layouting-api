# Tugas Praktikum Pertemuan 15: Layouting Vue 3 & Integrasi API

Proyek ini merupakan implementasi tugas praktikum sistem *Dashboard Layout* yang responsif menggunakan **Vue 3 (Composition API)** dan **Tailwind CSS**. Aplikasi ini mengintegrasikan komponen terstruktur (*modular components*) dengan manajemen navigasi halaman dinamis melalui sistem *state tab switching* untuk mengonsumsi data publik dari **Jikan API (Anime & Manga Database)**.

## 👤 Identitas Mahasiswa

* **Nama:** Adit Riyawan
* **NIM:** D112411120
* **Kampus:** Politeknik TEDC Bandung
* **Mata Kuliah:** Praktikum 15

---

## 🌐 Sumber Data API

Aplikasi ini mengonsumsi data publik secara *real-time* dari **Jikan API (Unofficial MyAnimeList API v4)** tanpa memerlukan autentikasi/API Key. Endpoint yang digunakan adalah:

* **Top Anime Endpoint**: `https://api.jikan.moe/v4/top/anime?limit=8` (Digunakan untuk menarik daftar anime terpopuler).
* **Top Manga Endpoint**: `https://api.jikan.moe/v4/top/manga?limit=8` (Digunakan untuk menarik daftar manga terpopuler).

---

## 🚀 Fitur Utama Layouting & API

1. **Modular Base Layout (`DefaultLayout.vue`)**: Menggunakan mekanisme `<slot />` untuk menyisipkan konten halaman secara dinamis ke dalam kerangka aplikasi tetap.
2. **Global Components**: Integrasi komponen header (`AppHeader.vue`) dan bilah sisi navigasi (`AppSidebar.vue`) yang konsisten di setiap halaman.
3. **Dynamic Tab Navigation**: Perpindahan konten halaman instan tanpa *memuat ulang* (*re-render*) seluruh dokumen berkat manajemen state navigasi aktif yang responsif.
4. **Asynchronous API Integration**: Integrasi penuh menggunakan **Axios** untuk menarik data *Top Trending Anime* dan *Manga List* secara *real-time* langsung dari server Jikan API.
5. **Desain Modern & Responsif**: Memanfaatkan *utility-first classes* dari Tailwind CSS lengkap dengan efek visual estetika *cyberpunk/neon dark theme*, status navigasi aktif, serta transisi kartu hover yang halus.
