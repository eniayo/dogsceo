<template>
    <div className="columns-3 gap-4 mt-8">
        <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg mb-6" v-for="(dog, index) in dogs" :key="index">
          <DogCard :dog="dog"/>
        </div>
    </div>
</template>
<script setup>
import DogCard from './DogCard.vue';
const props = defineProps(['dogs'])
</script>