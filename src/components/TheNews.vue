<script>
export default {
    data() {
        return {
            news: [],
            currentNews: {
                title: '',
                image: ''
            },
        }
    },
    created() {
        this.loadNews();
    },
    methods: {
        loadNews() {
            const savedNews = localStorage.getItem('news');
            if (savedNews) {
                this.news = JSON.parse(savedNews);
            }
        },
        goToNewsDetail(newsId) {
            this.$router.push({ name: 'NewsDetails', params: { id: newsId } });
        }
    }
}
</script>

<template>
    <div class="news my-5 text-text-main">
        <div v-for="(item, index) in news" :key="index" @click="goToNewsDetail(item.id)"
            class="m-[20px_10px] p-[10px] rounded-[15px] flex flex-col md:flex-row-reverse justify-between items-center shadow-2xl hover:text-horizontal-line cursor-pointer">
            <img class="rounded-lg h-52 w-80 object-cover" :src="item.image" :alt="item.title" />
            <div class="p-[10px] flex flex-col w-full">
                <p>{{ item.title }}</p>
                <span class="p-[10px] text-sm text-color-gray">{{ item.date }}</span>
                <a class="text-end text-md">Read more ...</a>
            </div>
        </div>
    </div>
</template>
