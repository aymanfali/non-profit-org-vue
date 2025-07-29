<script>
export default {
    data() {
        return {
            isSearchFormOpen: false,
        }
    },
    methods: {
        showSearchForm() {
            if (this.isSearchFormOpen) {
                this.isSearchFormOpen = false
            } else {
                this.isSearchFormOpen = true
            }
        }
    }
}
</script>

<template>
    <div class="search">
        <button @click="showSearchForm"
            class="search-button px-1 pt-1 pb-0 rounded-full bg-transparent border-0 cursor-pointer">
            <img loading="lazy" src="../../../public/icons/magnifying-glass-solid.svg" alt="search_icon" class="w-4 h-4"
                style="filter: brightness(0) saturate(100%) invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%);">
        </button>
        <form class="absolute flex justify-center left-0 w-full top-24 z-50 p-5 my-3 mx-0 bg-primary shadow-2xl"
            action="" method="post" :class="{ 'hidden': !isSearchFormOpen, '': isSearchFormOpen }">
            <input type="text" class="search-input w-full p-3 m-2 border-0 rounded-md outline-0 bg-white text-black"
                placeholder="What are you looking for?">
            <input type="submit" value="Search" id="submit-search"
                class="p-2.5 m-2 border-2 border-text-sec text-text-sec cursor-pointer hover:bg-text-sec hover:text-primary hover:outline-2 rounded-md">
        </form>
    </div>
</template>
