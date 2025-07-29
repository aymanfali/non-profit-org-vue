<script>
export default {
    data() {
        return {
            items: [
                {
                    image: "/public/images/impact_1.jpg",
                    title:
                        "Working where it counts: UNESCO leads local initiatives and develops tools to safeguard World Heritage",
                },
                {
                    image: "/public/images/impact_2.jpg",
                    title:
                        "Bangkok sets the pace for AI Ethics: Highlights from UNESCO’s 3rd Global Forum on the Ethics of AI",
                },
                {
                    image: "/public/images/adg-ed-thinkpiece-esd_0.jpg",
                    title:
                        "Record number of higher education students highlights global need for recognition of qualifications",
                },
                {
                    image: "/public/images/story_whc_mafagascar.JPG.webp",
                    title:
                        "Caribbean cuisine transcends borders thanks to UNESCO’s Transcultura programme",
                },
            ]
        }
    },
}
</script>

<template>
    <div class="impact-activities grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 ">
        <div v-for="(item, index) in items" :key="index" class="rounded-2xl shadow-2xl hover:cursor-pointer">
            <img :src="item.image" :alt="item.title" class="rounded-2xl w-full h-[300px] object-cover">
            <div class="text-text-main">
                <div class="m-5">{{ item.title }}</div>
                <div class="float-right m-5">Read more ...</div>
            </div>
        </div>
    </div>
</template>
