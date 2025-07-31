<script>
import Table from '@/components/Dashboard/Table.vue';
import AuthLayout from '../AuthLayout.vue';
import PrimaryBtn from '@/components/Dashboard/Buttons/PrimaryBtn.vue';
import Create from './Create.vue';
import Edit from './Edit.vue';
import View from './View.vue';

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
            impacts: [],
            showCreateForm: false,
            showEditForm: false,
            currentImpact: {
                title: '',
                image: '',
                date: ''
            },
            viewingImpact: null
        }
    },
    created() {
        this.loadImpacts();
    },
    methods: {
        loadImpacts() {
            const savedImpacts = localStorage.getItem('impacts');
            if (savedImpacts) {
                this.impacts = JSON.parse(savedImpacts);
            }
        },
        saveImpacts() {
            localStorage.setItem('impacts', JSON.stringify(this.impacts));
        },
        handleAdd() {
            this.showCreateForm = true;
            this.showEditForm = false;
        },
        handleEdit(impact) {
            this.currentImpact = { ...impact };
            this.showEditForm = true;
            this.showCreateForm = false;
        },
        async handleDelete(impact) {
            try {
                const confirmed = await this.showConfirmDialog(
                    'Delete Impact',
                    'Are you sure you want to delete this impact?',
                    'error'
                );

                if (confirmed) {
                    this.impacts = this.impacts.filter(i => i.title !== impact.title);
                    this.saveImpacts();
                    this.toast.addToast('Impact deleted successfully', 'success');
                }
            } catch (error) {
                this.toast.addToast('Failed to delete impact', 'error');
            }
        },
        viewDetails(impact) {
            this.viewingImpact = { ...impact };
        },
        handleCreate(impact) {
            try {
                this.impacts.unshift(impact);
                this.saveImpacts();
                this.showCreateForm = false;
                this.toast.addToast('Impact created successfully', 'success');
            } catch (error) {
                this.toast.addToast('Failed to create impact', 'error');
            }
        },
        handleUpdate(impact) {
            try {
                const index = this.impacts.findIndex(i => i.title === this.currentImpact.title);
                if (index !== -1) {
                    this.impacts[index] = impact;
                }
                this.saveImpacts();
                this.showEditForm = false;
                this.toast.addToast('Impact updated successfully', 'success');
            } catch (error) {
                this.toast.addToast('Failed to update impact', 'error');
            }
        },
        closeForms() {
            this.showCreateForm = false;
            this.showEditForm = false;
        },
        closeView() {
            this.viewingImpact = null;
        },
        showConfirmDialog(message) {
            return new Promise((resolve) => {
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
            <h1 class="text-2xl font-bold mb-6">Impacts</h1>
            <PrimaryBtn name="Add Impact" @click="handleAdd" />
        </div>

        <Create v-if="showCreateForm" @save="handleCreate" @cancel="closeForms" />

        <Edit v-if="showEditForm" :impact="currentImpact" @save="handleUpdate" @cancel="closeForms" />

        <Table :headers="['Title', 'Image', 'Date']" :items="impacts" @edit="handleEdit" @delete="handleDelete"
            @view="viewDetails" />

        <View v-if="viewingImpact" :impact="viewingImpact" @close="closeView" />
    </AuthLayout>
</template>
