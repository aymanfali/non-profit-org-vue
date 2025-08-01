<script setup>
import ThemeToggle from '../ThemeToggle.vue';

defineEmits(['toggle-nav'])
</script>

<template>
    <div class="main-nav relative flex justify-between items-center z-50 bg-primary text-text-sec shadow-2xl p-6">
        <div class="flex">
            <button @click="$emit('toggle-nav')"
                class="dash-nav-trigger lg:hidden bg-transparent text-2xl mb-2 me-5 text-text-sec cursor-pointer">&equiv;</button>
            <div class="logo">
                <img class="w-36" loading="lazy" src="/public/images/unesco.svg" alt="unesco_logo">
            </div>
        </div>
        <div class="right flex gap-2.5 items-center">
            <ThemeToggle/>
            <div class="avatar">
                <img src="/public/icons/account_circle_32dp_E3E3E3_FILL0_wght100_GRAD-25_opsz40.svg"
                    alt="user_account">
            </div>
        </div>
    </div>
</template>
