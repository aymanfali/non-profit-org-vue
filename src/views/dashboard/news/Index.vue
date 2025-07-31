<script>
import Table from '@/components/Dashboard/Table.vue';
import AuthLayout from '../AuthLayout.vue';
import PrimaryBtn from '@/components/Dashboard/Buttons/PrimaryBtn.vue';
import Create from './Create.vue';
import Edit from './Edit.vue';
import View from './View.vue';
// import { useToast } from '@/composables/useToast';

export default {
    components: {
        Table,
        AuthLayout,
        PrimaryBtn,
        Create,
        Edit,
        View
    },
    data() {
        return {
            news: [],
            showCreateForm: false,
            showEditForm: false,
            currentNews: {
                title: '',
                image: ''
            },
            viewingNews: null
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
        saveNews() {
            localStorage.setItem('news', JSON.stringify(this.news));
        },
        handleAdd() {
            this.showCreateForm = true;
            this.showEditForm = false;
        },
        handleEdit(news) {
            this.currentNews = { ...news };
            this.showEditForm = true;
            this.showCreateForm = false;
        },
        async handleDelete(news) {
            try {
                const confirmed = await this.showConfirmDialog(
                    'Delete News',
                    'Are you sure you want to delete this news?',
                    'error'
                );

                if (confirmed) {
                    this.news = this.news.filter(i => i.title !== news.title);
                    this.saveNews();
                    // this.toast.addToast('News deleted successfully', 'success');
                }
            } catch (error) {
                // this.toast.addToast('Failed to delete news', 'error');
            }
        },
        viewDetails(news) {
            this.viewingNews = { ...news };
        },
        handleCreate(news) {
            try {
                this.news.unshift(news);
                this.saveNews();
                this.showCreateForm = false;
                this.toast.addToast('News created successfully', 'success');
            } catch (error) {
                // this.toast.addToast('Failed to create news', 'error');
            }
        },
        handleUpdate(news) {
            try {
                const index = this.news.findIndex(i => i.title === this.currentNews.title);
                if (index !== -1) {
                    this.news[index] = news;
                }
                this.saveNews();
                this.showEditForm = false;
                this.toast.addToast('News updated successfully', 'success');
            } catch (error) {
                // this.toast.addToast('Failed to update news', 'error');
            }
        },
        closeForms() {
            this.showCreateForm = false;
            this.showEditForm = false;
        },
        closeView() {
            this.viewingNews = null;
        },
        showConfirmDialog(title, message, type) {
            return new Promise((resolve) => {
                // Implementation would use your ConfirmDialog component
                // Simplified for example
                const confirmed = window.confirm(message);
                resolve(confirmed);
            });
        }
    }
}
</script>

<template>
    <AuthLayout>
        <!-- <Toast /> -->

        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold mb-6">News</h1>
            <PrimaryBtn name="Add News" @click="handleAdd" />
        </div>

        <Create v-if="showCreateForm" @save="handleCreate" @cancel="closeForms" />

        <Edit v-if="showEditForm" :news="currentNews" @save="handleUpdate" @cancel="closeForms" />

        <Table :headers="['Title', 'Image']" :items="news" @edit="handleEdit" @delete="handleDelete"
            @view="viewDetails" />

        <View v-if="viewingNews" :news="viewingNews" @close="closeView" />
    </AuthLayout>
</template>
