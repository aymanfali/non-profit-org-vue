<script>
export default {
    props: {
        headers: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        showActions: {
            type: Boolean,
            default: true
        },
        allowEdit: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        handleEdit(item) {
            this.$emit('edit', item);
        },
        handleDelete(item) {
            this.$emit('delete', item);
        },
        handleView(item) {
            this.$emit('view', item);
        },
        formatDate(value) {
            if (!value) return '';
            try {
                return new Date(value).toLocaleDateString();
            } catch {
                return value;
            }
        },
        isImage(value) {
            return typeof value === 'string' &&
                (value.startsWith('http') ||
                    value.startsWith('/') ||
                    value.startsWith('data:image'));
        }
    }
}
</script>

<template>
    <div class=" rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y">
                <thead class="">
                    <tr>
                        <th v-for="(header, index) in headers" :key="`header-${index}`"
                            class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            {{ header }}
                        </th>
                        <th v-if="showActions"
                            class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y ">
                    <tr v-for="(item, itemIndex) in items" :key="`row-${itemIndex}`">
                        <template v-for="(header, headerIndex) in headers" :key="`cell-${itemIndex}-${headerIndex}`">
                            <td class="px-6 py-4 whitespace-nowrap text-sm">
                                <template v-if="isImage(item[header.toLowerCase()])">
                                    <img :src="item[header.toLowerCase()]" class="h-10 w-10 rounded-full object-cover"
                                        :alt="`${header} image`">
                                </template>
                                <template v-else-if="header.toLowerCase().includes('date')">
                                    {{ formatDate(item[header.toLowerCase()]) }}
                                </template>
                                <template v-else>
                                    {{ item[header.toLowerCase()] }}
                                </template>
                            </td>
                        </template>

                        <td v-if="showActions" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button @click="handleView(item)" class="mr-3"
                                title="View details">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fill-rule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button v-if="allowEdit" @click="handleEdit(item)"
                                class="mr-3" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                            <button @click="handleDelete(item)" class="text-red-600 hover:text-red-900" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
