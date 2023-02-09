<template>
    <div class="relative">
        <input type="search" name="search" id="search" placeholder="Search ..." @input="handleSearch" :value="query"
            class="text-sm rounded-lg border-neutral-200 border w-full px-1 py-3 bg-neutral-50 placeholder-neutral-500" 
        />
    </div>
</template>
<script setup>
import debounce from '../assets/debounce'
import { useStore } from "vuex";
import { computed } from 'vue'
const store = useStore();

const handleSearch = debounce((e) => {
    store.dispatch('dogs/searchDogs', e.target.value)
    }, 500)

const query = computed(() => store.getters['dogs/getSearchQuery'])

</script>