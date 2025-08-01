<template>
    <button
        class="bg-horizontal-line hover:bg-horizontal-line/60 text-white py-2 px-3 m-2 cursor-pointer rounded-md transition-colors">{{
        name }}</button>
</template>

<script setup>
const props = defineProps(['name'])
</script>
