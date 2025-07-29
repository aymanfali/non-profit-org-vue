<script setup>
import Footer from '@/components/Dashboard/Footer.vue';
import Header from '@/components/Dashboard/Header.vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';

</script>

<template>
    <Header />
    <div class="flex">
        <Sidebar />
        <main class="m-5 p-5 border-gray border-[1px] rounded-sm w-full">
            <slot />
        </main>
    </div>
    <Footer />
</template>
