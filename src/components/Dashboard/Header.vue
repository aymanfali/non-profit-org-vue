<template>
    <div class="main-nav relative flex justify-between items-center bg-primary text-text-sec shadow-2xl p-6">
        <div class="flex">
            <button
                class="dash-nav-trigger md:hidden bg-transparent text-2xl mb-2 me-5 text-text-sec cursor-pointer">&equiv;</button>
            <div class="logo">
                <img class="w-36" loading="lazy" src="../assets/images/unesco.svg" alt="unesco_logo">
            </div>
        </div>
        <div class="right flex gap-2.5 items-center">
            <label class="theme-switch relative inline-block w-7 h-7  cursor-pointer">
                <input type="checkbox" id="theme-toggle" class="opacity-0 w-0 h-0">
                <span class="slider absolute inset-0">
                    <img class="icon sun-icon absolute w-4 h-4 top-1/2 -translate-y-1/2 z-10 left-0 opacity-100 dark:opacity-0"
                        style="filter: brightness(0) saturate(100%) invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%);"
                        src="../assets/icons/sun-solid.svg" alt="light_mode">
                    <img class="icon moon-icon absolute w-4 h-4 top-1/2 -translate-y-1/2 z-10 left-0 opacity-0 dark:opacity-100"
                        style="filter: brightness(0) saturate(100%) invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%);"
                        src="../assets/icons/moon-solid.svg" alt="dark_mode">
                </span>
            </label>
            <div class="search">
                <button class="search-button px-1 pt-1 pb-0 rounded-full bg-transparent border-0 cursor-pointer">
                    <img loading="lazy" src="../assets/icons/magnifying-glass-solid.svg" alt="search_icon"
                        class="w-4 h-4"
                        style="filter: brightness(0) saturate(100%) invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%);">
                </button>
                <form class="absolute hidden left-0 w-full top-24 z-50 p-5 my-3 mx-0 bg-primary shadow-2xl" action=""
                    method="post">
                    <input type="text"
                        class="search-input min-w-80 p-3 border-0 rounded-md outline-0 bg-white text-black"
                        placeholder="What are you looking for?">
                    <input type="submit" value="Search" id="submit-search"
                        class="p-2.5 border-2 border-text-sec text-text-sec cursor-pointer hover:bg-text-sec hover:text-primary hover:outline-2 rounded-md">
                </form>
            </div>
            <div class="avatar">
                <img src="../assets/icons/account_circle_32dp_E3E3E3_FILL0_wght100_GRAD-25_opsz40.svg"
                    alt="user_account">
            </div>
        </div>
    </div>
</template>
