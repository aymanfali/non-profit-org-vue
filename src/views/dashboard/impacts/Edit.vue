<script>
export default {
    props: {
        impact: {
            type: Object,
            required: true
        }
    },
    emits: ['save', 'cancel'],
    data() {
        return {
            localImpact: { ...this.impact }
        }
    },
    watch: {
        impact(newImpact) {
            this.localImpact = { ...newImpact };
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('save', { ...this.localImpact });
        },
        handleCancel() {
            this.$emit('cancel');
        }
    }
}
</script>

<template>
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-bg p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-xl font-semibold mb-4">Edit Impact</h2>

            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray/70 mb-2" for="title">Title</label>
                    <input id="title" v-model="localImpact.title" type="text" class="w-full px-3 py-2 border rounded"
                        required />
                </div>

                <div class="mb-4">
                    <label class="block text-gray/70 mb-2" for="image">Image URL</label>
                    <input id="image" v-model="localImpact.image" type="url" class="w-full px-3 py-2 border rounded"
                        required />
                    <div class="mt-2 flex items-center space-x-4">
                        <div>
                            <p class="text-sm text-gray/50">Current Image:</p>
                            <img :src="impact.image" class="h-20 w-20 object-cover rounded">
                        </div>
                        <div v-if="localImpact.image !== impact.image">
                            <p class="text-sm text-gray/50">New Image:</p>
                            <img :src="localImpact.image" class="h-20 w-20 object-cover rounded">
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-text-main mb-2" for="content">Cotent</label>
                        <textarea id="content" cols="5" v-model="localImpact.content" class="w-full px-3 py-2 border rounded"
                            required placeholder="Enter impact content" />
                    </div>
                </div>

                <div class="flex justify-end space-x-3">
                    <button type="button" @click="handleCancel"
                        class="px-4 py-2 border rounded text-text-main hover:bg-gray">
                        Cancel
                    </button>
                    <button type="submit" class="px-4 py-2 bg-green-600 text-text-sec rounded hover:bg-green-700">
                        Update Impact
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>
