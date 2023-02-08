<template>
  <div className='items-center justify-start flex flex-col'>
      <div className='w-[600px]'>
        <Searchbar />
        <!-- <Movies movies={movies} loading={loading} /> -->
        <DogSection :dogs="allDogs"/>
      </div>
    </div>
</template>
<script setup>
  import { computed, onBeforeMount } from 'vue'
  import { useRoute } from "vue-router";
  import { useStore } from 'vuex'
  import DogCard from '../components/DogCard.vue';
  import Searchbar from '../components/Searchbar.vue';
  import index from "../api";
import DogSection from '../components/DogSection.vue';

  const store = useStore();

  const allDogs = computed(() => store.getters['dogs/allDogs'])

  onBeforeMount(() => {
    store.dispatch('dogs/getAllDogs')
  })
</script>
