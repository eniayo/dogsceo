<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <main class="flex justify-center items-center flex-col">
    <div class="md:w-[600px]">
      <Navbar />
      <RouterView />
    </div>
  </main>
</template>