<script setup>
defineProps({
    show: { type: Boolean, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    confirmText: { type: String, default: 'Confirm' },
    cancelText: { type: String, default: 'Cancel' },
});

const emit = defineEmits(['confirm', 'cancel']);
</script>

<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-bg rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
            <p class="text-text-main mb-6">{{ message }}</p>

            <div class="flex justify-end space-x-3">
                <button @click="$emit('cancel')"
                    class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    {{ cancelText }}
                </button>
                <button @click="$emit('confirm')"
                    class="px-4 py-2 bg-danger text-text-sec rounded-md hover:bg-danger/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-danger/50">
                    {{ confirmText }}
                </button>
            </div>
        </div>
    </div>
</template>
