<template>
  <div class='items-center justify-start md:flex flex-col'>
      <div>
        <Searchbar />
        <DogSection :dogs="allDogs"/>
      </div>
    </div>
</template>
<script setup>
  import { computed, onBeforeMount } from 'vue'
  import { useStore } from 'vuex'
  import Searchbar from '../components/Searchbar.vue';
import DogSection from '../components/DogSection.vue';

  const store = useStore();

  const allDogs = computed(() => store.getters['dogs/allDogs'])

  onBeforeMount(() => {
    store.dispatch('dogs/getAllDogs')
  })
  
</script>
