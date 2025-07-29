<template>
    <nav
        class="dash-nav hidden md:block bg-primary  z-[1000] shadow-2xl md:shadow-none absolute md:relative w-3xs flex-col justify-between h-full">
        <ul>
            <li class="active flex items-center relative">
                <RouterLink class="text-text-sec no-underline w-full  px-7 py-4" to="/dashboard">Home</RouterLink>
            </li>
            <li class="flex items-center relative">
                <RouterLink class="text-text-sec no-underline w-full  px-7 py-4" to="/dashboard/impacts">Impacts
                </RouterLink>
            </li>
            <li class="flex items-center relative">
                <RouterLink class="text-text-sec no-underline w-full  px-7 py-4" to="/dashboard/news">News</RouterLink>
            </li>
            <li class="flex items-center relative">
                <RouterLink class="text-text-sec no-underline w-full  px-7 py-4" to="/dashboard/contact">Contact
                    Us</RouterLink>
            </li>
            <li class="flex items-center relative">
                <RouterLink class="text-text-sec no-underline w-full  px-7 py-4" to="/dashboard/about">About
                    Us</RouterLink>
            </li>
        </ul>
        <ul>
            <li class="active flex items-center relative">
                <RouterLink class="text-text-sec no-underline w-full  px-7 py-4" to="/dashboard/settings">Settings
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
