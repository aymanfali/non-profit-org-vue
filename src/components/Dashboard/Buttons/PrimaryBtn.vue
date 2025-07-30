<template>
    <button class="py-2 px-3 m-2 cursor-pointer border bg-primary hover:bg-primary/70 text-text-sec rounded-sm">{{ name }}</button>
</template>

<script setup>
const props = defineProps(['name'])
</script>
