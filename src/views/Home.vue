<script setup>
import TheImpacts from '@/components/TheImpacts.vue';


</script>

<template>
    <Hero>
        <h1 class="title font-bold mb-5 text-text-sec  z-10">Welcom to UNESCO's official website</h1>

        <p class="description text-text-sec z-10">New World Heritage sites nominated; others removed from the in-danger
            list
        </p>
        <a href="pages/about-us.html"
            class="call-to-action border-0 outline-0 shadow-2xl py-3 px-4 m-5 bg-primary text-text-sec z-[1] rounded-[15px] cursor-pointer hover:bg-text-sec hover:text-primary hover:outline-2">Get
            to Know us</a>
    </Hero>

    <section class="intro p-3 relative">
        <h1 class="title font-bold mb-5 z-[1] text-center m-12 relative text-text-main">
            UNESCO Introduction
        </h1>
        <div class="description text-text-main leading-[1.5]">
            <p>
                UNESCO is the United Nations organization that promotes cooperation in education, science, culture
                and communication to
                foster peace worldwide.
            </p>

            <p>
                The Organization provides key services for its Member States,setting global norms and standards,
                developing tools for international cooperation, producing knowledge for public policies and building
                global networks of sites and institutions inscribed on its lists.
            </p>
        </div>
    </section>

    <section class="impact p-3">
        <h1 class="title font-bold mb-5 z-[1] text-center m-12 relative text-text-main">
            UNESCO Impact
        </h1>
        <TheImpacts />
    </section>
</template>
