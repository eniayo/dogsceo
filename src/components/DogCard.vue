<template>
    <figure v-lazyload>
        <router-link :to="'/'+props.dog.name" @click="handleClick(props.dog)">
            <img :src="props.dog.url" :alt="props.dog.name" class="rounded-lg object-contain w-full h-auto">
        </router-link>
    </figure>
</template>
<script setup>
import Loader from "./Loader.vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(['dog']);

function handleClick(){
    store.commit('dogs/setCurrentDog', {dog: props.dog})
}
</script>