<script>
export default {
    props: {
        headers: Array,
        items: Array
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
        }
    }
}
</script>

<template>
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th v-for="header in headers" :key="header"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {{ header }}
                    </th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(item, index) in items" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <img :src="item.image" class="h-10 w-10 rounded-full object-cover">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button @click="handleView(item)" class="text-blue-600 hover:text-blue-900 mr-3">
                            View
                        </button>
                        <button @click="handleEdit(item)" class="text-indigo-600 hover:text-indigo-900 mr-3">
                            Edit
                        </button>
                        <button @click="handleDelete(item)" class="text-red-600 hover:text-red-900">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
