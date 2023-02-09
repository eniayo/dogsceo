<template>
    <header class="h-12 bg-neutral-50 border border-neutral-200 rounded-t-lg py-4 my-4">
        <div v-if="currentRouteName !== 'dog'" class="flex justify-center items-center">
            <h2 class="text-neutral-500 font-semibold font-instagram text-2xl">dogsCEO</h2>
        </div>
        <div v-else class="flex items-center h-full text-neutral-500 pl-3 text-sm">
            <button @click="$router.back()">
                <i class="bi bi-chevron-left"></i> Go back
            </button>
            <h4>{{ store.currentDog ? store.currentDog.name : '' }}</h4>
        </div>
    </header>
</template>
<script setup>
    import { computed, onMounted } from 'vue'
    import { useRoute } from "vue-router";
    import { useStore } from 'vuex'

    const route = useRoute();
    const store = useStore();

    const currentRouteName = computed(() => {
        return route.name;
    });
    
    const currentDog = computed(() => {return store.getters['dogs/currentDog']})
</script>