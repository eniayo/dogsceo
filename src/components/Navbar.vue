<template>
    <header className="h-12 bg-neutral-50 border border-neutral-200 rounded-t-lg py-4 flex justify-center items-center my-4">
        <div v-if="currentRouteName !== 'dog'">
            <h2 className="text-neutral-500 font-semibold font-instagram text-2xl">dogsCEO</h2>
        </div>
        <div v-else>
            <button @click="$router.back()">
                <i class="bi bi-chevron-left"></i>
            </button>
            <h4>{{ currentDog }}</h4>
        </div>
    </header>
</template>
<script setup>
    import { computed } from 'vue'
    import { useRoute } from "vue-router";
    import { useStore } from 'vuex'

    const route = useRoute();
    const store = useStore();

    const currentRouteName = computed(() => {
        return route.name;
    });
    
    const currentDog = computed(() => store.getters.currentDog)
</script>