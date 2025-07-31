<template>
    <div class="bg-bg p-3 m-3 border-l-2 border-danger">
        <div class="border border-danger rounded-lg p-4 md:flex justify-between items-center">
            <div class="">
                <h3 class="font-medium text-danger/70 mb-2">{{ title }}</h3>
                <p class="text-text-main mb-4">
                    {{ description }}
                </p>
            </div>
            <button @click="handleReset"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors ">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Reset Site Data"
        },
        description: {
            type: String,
            default: "This will clear all locally stored data including impacts, news, and contact submissions."
        },
        buttonText: {
            type: String,
            default: "Reset Data"
        }
    },
    methods: {
        handleReset() {
            this.$emit('reset');
        }
    }
}
</script>
