<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    image: "/public/images/impact_1.jpg",
                    title:
                        "Working where it counts: UNESCO leads local initiatives and develops tools to safeguard World Heritage",
                },
                {
                    id: 2,
                    image: "/public/images/impact_2.jpg",
                    title:
                        "Bangkok sets the pace for AI Ethics: Highlights from UNESCO’s 3rd Global Forum on the Ethics of AI",
                },
                {
                    id: 3,
                    image: "/public/images/adg-ed-thinkpiece-esd_0.jpg",
                    title:
                        "Record number of higher education students highlights global need for recognition of qualifications",
                },
                {
                    id: 4,
                    image: "/public/images/story_whc_mafagascar.JPG.webp",
                    title:
                        "Caribbean cuisine transcends borders thanks to UNESCO’s Transcultura programme",
                },
            ]
        }
    },
    methods: {
        goToImpactDetail(impactId) {
            this.$router.push({ name: 'ImpactDetails', params: { id: impactId } });
        }
    }
}
</script>

<template>
    <div class="impact-activities grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 ">
        <div v-for="(item, index) in items" :key="index" @click="goToImpactDetail(item.id)" class=" rounded-2xl shadow-2xl
            hover:cursor-pointer">
            <img :src="item.image" :alt="item.title" class="rounded-2xl w-full h-[300px] object-cover">
            <div class="text-text-main">
                <div class="m-5">{{ item.title }}</div>
                <div class="float-right m-5">Read more ...</div>
            </div>
        </div>
    </div>
</template>
