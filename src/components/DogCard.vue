<template>
    <div>
        <router-link :to="'/'+props.dog.name" @click="handleClick(props.dog)">
            <img :src="props.dog.url" :alt="props.dog.name" class="rounded-lg">
        </router-link>
    </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(['dog']);

function handleClick(){
    store.commit('dogs/setCurrentDog', {dog: props.dog})
}
</script>