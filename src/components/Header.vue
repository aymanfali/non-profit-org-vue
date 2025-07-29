<script>
import { RouterLink } from 'vue-router'
import SearchForm from './Forms/SearchForm.vue'
import ThemeToggle from './ThemeToggle.vue'

export default {
    data() {
        return {
            isMobileNavOpen: false,
        }
    },
    
    methods: {
        
        toggleMobileNav() {
            if (this.isMobileNavOpen) {
                this.isMobileNavOpen = false
            } else {
                this.isMobileNavOpen = true
            }
        }
    },
    components: {
        SearchForm,
        ThemeToggle
    }
}
</script>

<template>
    <div class="main-nav relative flex justify-around items-center bg-primary text-text-sec shadow-2xl p-5">
        <div class="logo">
            <img class="w-36" loading="lazy" src="../../public/images/unesco.svg" alt="unesco_logo">
        </div>
        <nav class="nav md:block" :class="{ 'hidden': !isMobileNavOpen, '': isMobileNavOpen }">
            <ul
                class="absolute md:relative flex flex-col md:flex-row gap-5 bg-primary w-full md:w-auto left-0 md:left-auto top-20 md:top-0 z-[1000] shadow-2xl md:shadow-none">
                <li class="active flex items-center relative">
                    <RouterLink class="text-text-sec no-underline w-full text-center p-3.5" to="/">Home</RouterLink>
                </li>
                <li class="flex items-center relative">
                    <RouterLink class="text-text-sec no-underline w-full text-center p-3.5" to="/impacts">Impacts
                    </RouterLink>
                </li>
                <li class="flex items-center relative">
                    <RouterLink class="text-text-sec no-underline w-full text-center p-3.5" to="/news">News
                    </RouterLink>
                </li>
                <li class="flex items-center relative">
                    <RouterLink class="text-text-sec no-underline w-full text-center p-3.5" to="/contact-us">
                        Contact
                        Us</RouterLink>
                </li>
                <li class="flex items-center relative">
                    <RouterLink class="text-text-sec no-underline w-full text-center p-3.5" to="/about-us">About
                        Us</RouterLink>
                </li>
            </ul>
        </nav>
        <div class="right flex gap-2.5 items-center">
            <ThemeToggle/>
            <SearchForm/>
            <button @click="toggleMobileNav"
                class="mobile-nav-trigger md:hidden bg-transparent text-2xl mb-2 text-text-sec cursor-pointer">&equiv;</button>
        </div>
    </div>
</template>
