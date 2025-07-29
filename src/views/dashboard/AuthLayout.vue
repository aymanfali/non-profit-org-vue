<script>
import Footer from '@/components/Dashboard/Footer.vue';
import Header from '@/components/Dashboard/Header.vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';
import Dashboard from './Dashboard.vue';

</script>

<template>
    <Header />
    <div class="flex">
        <Sidebar />
        <div class="">
            <Dashboard/>
        </div>
    </div>
    <Footer />
</template>
