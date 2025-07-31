<script>
export default {
    data() {
        return {
            items: [],
            currentImpact: {
                title: '',
                image: ''
            },
        }
    },
    created() {
        this.loadImpacts();
    },
    methods: {
        loadImpacts() {
            const savedImpacts = localStorage.getItem('impacts');
            if (savedImpacts) {
                this.items = JSON.parse(savedImpacts);
            }
        },
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
