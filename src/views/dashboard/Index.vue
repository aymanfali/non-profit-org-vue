<script setup>
import AuthLayout from './AuthLayout.vue';

import { ref, onMounted } from 'vue';

const newsCount = ref(0);
const impactsCount = ref(0);
const messagesCount = ref(0);

onMounted(() => {
    const news = JSON.parse(localStorage.getItem('news') || '[]');
    newsCount.value = news.length;

    const impacts = JSON.parse(localStorage.getItem('impacts') || '[]');
    impactsCount.value = impacts.length;

    const messages = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
    messagesCount.value = messages.length;
});
</script>

<template>
    <AuthLayout>
        <h1 class="font-bold text-4xl">Dashboard</h1>
        <div class="cards grid md:grid-cols-2 lg:grid-cols-3">
            <div class="news border border-gray p-3 m-3 rounded-md text-center">
                <div class="count font-bold text-3xl">{{ newsCount }}</div>
                <div class="title text-2xl mt-2">News</div>
            </div>
            <div class="impacts border border-gray p-3 m-3 rounded-md text-center">
                <div class="count font-bold text-3xl">{{ impactsCount }}</div>
                <div class="title text-2xl mt-2">Impacts</div>
            </div>

            <div class="impacts border border-gray p-3 m-3 rounded-md text-center">
                <div class="count font-bold text-3xl">{{ messagesCount }}</div>
                <div class="title text-2xl mt-2">Messages</div>
            </div>
        </div>
    </AuthLayout>
</template>
