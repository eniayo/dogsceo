<template>
    <div class="columns-1 md:columns-3 gap-4 mt-8 md:w-[600px]">
        <div v-if="dogs.length > 0">
            <div class="w-full bg-neutral-50 border border-neutral-200 rounded-lg mb-6" v-for="(dog, index) in dogs" :key="index">
                <DogCard :dog="dog"/>
            </div>
        </div>
        <div v-else>
            <div class="w-full bg-neutral-50 border border-neutral-200 rounded-lg mb-6" v-for="(x, index) in 8" :key="index">
                <Loader />
            </div>
        </div>
    </div>
</template>
<script setup>
import DogCard from './DogCard.vue';
import Loader from './Loader.vue';
const props = defineProps(['dogs'])
</script>