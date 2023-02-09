<template>
    <div class="flex flex-col items-center justify-center">
        <img :src="dog.url" :alt="dog.name" class="rounded-lg">
        <p class="">{{ dog.name }}</p>
    </div>
</template>
<script setup>
import { computed } from 'vue'
  import { useStore } from 'vuex'

const store = useStore();
const dog = computed(() => store.getters['dogs/getCurrentDog'])
</script>