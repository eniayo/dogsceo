<template>
    <div>
        <div>
            <img :src="props.dog.url" :alt="props.dog.name" class="rounded-lg">
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['dog'])
</script>