<script>
export default {
    emits: ['save', 'cancel'],
    data() {
        return {
            news: {
                title: '',
                image: '',
                content: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('save', { ...this.news });
        },
        handleCancel() {
            this.$emit('cancel');
        }
    }
}
</script>

<template>
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-bg p-6 rounded-lg shadow-md mb-6 w-96">
            <h2 class="text-xl font-semibold mb-4">Add New news</h2>

            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-text-main mb-2" for="title">Title</label>
                    <input id="title" v-model="news.title" type="text" class="w-full px-3 py-2 border rounded"
                        required placeholder="Enter news title" />
                </div>

                <div class="mb-4">
                    <label class="block text-text-main mb-2" for="image">Image URL</label>
                    <input id="image" v-model="news.image" type="url" class="w-full px-3 py-2 border rounded" required
                        placeholder="https://example.com/image.jpg" />
                    <div v-if="news.image" class="mt-2">
                        <img :src="news.image" class="h-20 w-20 object-cover rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-text-main mb-2" for="content">Cotent</label>
                        <textarea id="content" cols="5" v-model="news.content" class="w-full px-3 py-2 border rounded"
                            required placeholder="Enter news content" />
                    </div>
                </div>

                <div class="flex justify-end space-x-3">
                    <button type="button" @click="handleCancel" class="px-4 py-2 border rounded text-text-main ">
                        Cancel
                    </button>
                    <button type="submit"
                        class="px-4 py-2 bg-primary border border-text-sec text-text-sec rounded hover:bg-primary/60">
                        Create news
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
