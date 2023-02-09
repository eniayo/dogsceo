<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <main class="md:flex justify-center items-center flex-col">
    <div class="px-2 md:px-0 md:w-[600px]">
      <Navbar />
      <div class="w-full">
        <RouterView />
      </div>
    </div>
  </main>
</template>