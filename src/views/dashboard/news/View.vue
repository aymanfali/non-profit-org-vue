<script>
export default {
    props: {
        news: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-bg rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h2 class="text-xl font-bold">{{ news.title }}</h2>

                    <button @click="$emit('close')" class="text-gray hover:text-gray/70">
                        ✕
                    </button>
                </div>

                <div class="mb-4">
                    <img :src="news.image" :alt="news.title" class="w-full h-64 object-contain">
                </div>
                <div class="mb-4">
                    <p class="text-justify">{{ news.content }}</p>
                </div>

                <div class="flex justify-end">
                    <button @click="$emit('close')"
                        class="px-4 py-2 bg-primary text-text-sec rounded hover:bg-primary/70">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
