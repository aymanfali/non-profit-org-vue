<script setup lang="ts">
import AuthLayout from './AuthLayout.vue';

</script>

<template>
    <AuthLayout>
        <span class="bread-crumps p-3 rounded "> \ Home </span>
        <hr class="m-3">
        <h1 class="font-bold text-4xl">Dashboard</h1>
        <div class="cards grid md:grid-cols-2 lg:grid-cols-3">
            <div class="news border border-gray p-3 m-3 rounded-md text-center">
                <div class="count font-bold text-3xl">95</div>
                <div class="title text-2xl mt-2">News</div>
            </div>
            <div class="impacts border border-gray p-3 m-3 rounded-md text-center">
                <div class="count font-bold text-3xl">95</div>
                <div class="title text-2xl mt-2">Impacts</div>
            </div>
        </div>
    </AuthLayout>
</template>
