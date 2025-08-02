<script>
import Table from '@/components/Dashboard/Table.vue';
import AuthLayout from '../AuthLayout.vue';
import PrimaryBtn from '@/components/Dashboard/Buttons/PrimaryBtn.vue';
import Create from './Create.vue';
import Edit from './Edit.vue';
import View from './View.vue';
import { useToast } from 'vue-toastification';
import { defineAsyncComponent } from 'vue';

export default {
    setup() {
        const toast = useToast();
        return { toast }
    },
    components: {
        Table,
        AuthLayout,
        PrimaryBtn,
        Create,
        Edit,
        View,
        ConfirmModal: defineAsyncComponent(() => import('@/components/Dashboard/ConfirmModal.vue'))
    },
    data() {
        return {
            users: [],
            showCreateForm: false,
            showEditForm: false,
            currentUser: {
                id: '',
                name: '',
                email: '',
                date: '',
                role: 'user',
            },
            viewingUser: null,
            showConfirmModal: false,
            confirmModalConfig: {
                title: '',
                message: '',
                confirmText: 'Confirm',
                cancelText: 'Cancel'
            },
            userToDelete: null
        }
    },
    created() {
        this.loadUsers();
    },
    methods: {
        loadUsers() {
            try {
                const savedUsers = localStorage.getItem('users');
                if (savedUsers) {
                    this.users = JSON.parse(savedUsers);
                }
            } catch (error) {
                console.error('Error loading users:', error);
                this.toast.error('Failed to load users');
            }
        },
        saveUsers() {
            localStorage.setItem('users', JSON.stringify(this.users));
        },
        generateId() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        },
        handleAdd() {
            this.showCreateForm = true;
            this.showEditForm = false;
        },
        handleEdit(user) {
            this.currentUser = { ...user };
            this.showEditForm = true;
            this.showCreateForm = false;
        },
        handleDelete(user) {
            this.userToDelete = user;
            this.showConfirmModal = true;
            this.confirmModalConfig = {
                title: 'Delete user',
                message: `Are you sure you want to delete ${user.name}?`,
                confirmText: 'Delete',
                cancelText: 'Cancel'
            }
        },
        handleConfirm() {
            try {
                this.users = this.users.filter(u => u.id !== this.userToDelete.id);
                this.saveUsers();
                this.toast.success('User deleted successfully');
            } catch (error) {
                console.error('Delete error:', error);
                this.toast.error('Failed to delete user');
            } finally {
                this.showConfirmModal = false;
                this.userToDelete = null;
            }
        },
        handleCancel() {
            this.showConfirmModal = false;
            this.userToDelete = null;
        },
        viewDetails(user) {
            this.viewingUser = { ...user };
        },
        handleCreate(user) {
            try {
                const userWithId = {
                    ...user,
                    id: this.generateId()
                };
                this.users.unshift(userWithId);
                this.saveUsers();
                this.showCreateForm = false;
                this.toast.success('User created successfully');
            } catch (error) {
                console.error('Create error:', error);
                this.toast.error('Failed to create user');
            }
        },
        handleUpdate(updatedUser) {
            try {
                const index = this.users.findIndex(u => u.id === this.currentUser.id);
                if (index !== -1) {
                    this.users[index] = updatedUser;
                    this.saveUsers();
                    this.showEditForm = false;
                    this.toast.success('User updated successfully');
                }
            } catch (error) {
                console.error('Update error:', error);
                this.toast.error('Failed to update user');
            }
        },
        closeForms() {
            this.showCreateForm = false;
            this.showEditForm = false;
        },
        closeView() {
            this.viewingUser = null;
        }
    }
}
</script>

<template>
    <AuthLayout>
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold mb-6">Users</h1>
            <PrimaryBtn name="Add User" @click="handleAdd" />
        </div>

        <Create v-if="showCreateForm" @save="handleCreate" @cancel="closeForms" />

        <Edit v-if="showEditForm" :user="currentUser" @save="handleUpdate" @cancel="closeForms" />

        <Table :headers="['Name', 'Email', 'Role', 'Date']" :items="users" :filterableColumns="[
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role' },
            { key: 'date', label: 'Date', type: 'date' },

        ]" @edit="handleEdit" @delete="handleDelete" @view="viewDetails" />

        <View v-if="viewingUser" :user="viewingUser" @close="closeView" />

        <ConfirmModal :show="showConfirmModal" :title="confirmModalConfig.title" :message="confirmModalConfig.message"
            :confirmText="confirmModalConfig.confirmText" :cancelText="confirmModalConfig.cancelText"
            @confirm="handleConfirm" @cancel="handleCancel" />
    </AuthLayout>
</template>
