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
        },
        itemsPerPage: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        paginatedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.items.slice(start, end);
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
        },
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    }
}
</script>

<template>
    <div class="rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y">
                <thead class="">
                    <tr>
                        <th v-for="(header, index) in headers" :key="`header-${index}`"
                            class="px-6 py-3 text-center text-md font-bold uppercase tracking-wider">
                            {{ header }}
                        </th>
                        <th v-if="showActions"
                            class="px-6 py-3 text-center text-md font-bold uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y ">
                    <tr v-for="(item, itemIndex) in paginatedItems" :key="`row-${itemIndex}`">
                        <template v-for="(header, headerIndex) in headers" :key="`cell-${itemIndex}-${headerIndex}`">
                            <td class="px-6 py-4 whitespace-nowrap text-sm">
                                <template v-if="isImage(item[header.toLowerCase()])">
                                    <img :src="item[header.toLowerCase()]" class="h-10 w-10 rounded-full object-cover mx-auto"
                                        :alt="`${header} image`">
                                </template>
                                <template v-else-if="header.toLowerCase().includes('date')">
                                    <div class="text-center">{{ formatDate(item[header.toLowerCase()]) }}</div>
                                </template>
                                <template v-else>
                                    {{ item[header.toLowerCase()] }}
                                </template>
                            </td>
                        </template>

                        <td v-if="showActions" class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
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

        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
                <button @click="prevPage" 
                    :disabled="currentPage === 1"
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md"
                    :class="currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'">
                    Previous
                </button>
                <button @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md"
                    :class="currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'">
                    Next
                </button>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700">
                        Showing <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
                        to <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, items.length) }}</span>
                        of <span class="font-medium">{{ items.length }}</span> results
                    </p>
                </div>
                <div>
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button @click="prevPage" 
                            :disabled="currentPage === 1"
                            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"
                            :class="currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'">
                            <span class="sr-only">Previous</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        
                        <!-- Page numbers -->
                        <template v-for="page in totalPages" :key="`page-${page}`">
                            <button @click="goToPage(page)"
                                :aria-current="page === currentPage ? 'page' : undefined"
                                class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                :class="page === currentPage 
                                    ? 'z-10 bg-primary border-primary text-text-sec' 
                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'">
                                {{ page }}
                            </button>
                        </template>
                        
                        <button @click="nextPage"
                            :disabled="currentPage === totalPages"
                            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"
                            :class="currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'">
                            <span class="sr-only">Next</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
