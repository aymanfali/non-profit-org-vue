<script>
import Table from '@/components/Dashboard/Table.vue';
import AuthLayout from '../AuthLayout.vue';
import PrimaryBtn from '@/components/Dashboard/Buttons/PrimaryBtn.vue';
import View from './View.vue';

export default {
    components: {
        Table,
        AuthLayout,
        PrimaryBtn,
        View,
    },
    data() {
        return {
            contacts: [],
            currentContact: {
                name: '',
                email: '',
                subject: '',
                message: '',
                date: ''
            },
            viewingContact: null
        }
    },
    created() {
        this.loadContacts();
    },
    methods: {
        generateId() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        },
        loadContacts() {
            const savedContacts = localStorage.getItem('contactFormSubmissions');
            if (savedContacts) {
                this.contacts = JSON.parse(savedContacts);
                this.contacts.forEach(contact => {
                    if (!contact.id) {
                        contact.id = this.generateId()
                    }
                })
                this.saveContacts();
            }
        },
        saveContacts() {
            localStorage.setItem('contactFormSubmissions', JSON.stringify(this.contacts));
        },
        async handleDelete(contact) {
            try {
                const confirmed = await this.showConfirmDialog(
                    'Delete Contact',
                    'Are you sure you want to delete this contact submission?',
                    'error'
                );

                if (confirmed) {
                    this.contacts = this.contacts.filter(c => c.id !== contact.id);
                    this.saveContacts();
                    this.toast.addToast('Contact deleted successfully', 'success');
                }
            } catch (error) {
                // this.toast.addToast('Failed to delete contact', 'error');
            }
        },
        viewDetails(contact) {
            this.viewingContact = { ...contact };
        },
        closeView() {
            this.viewingContact = null;
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
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold mb-6">Contact Submissions</h1>
        </div>

        <Table :headers="['Name', 'Email', 'Subject', 'Date']" :items="contacts" :allow-edit="false"
            @delete="handleDelete" @view="viewDetails" />

        <View v-if="viewingContact" :contact="viewingContact" @close="closeView" />
    </AuthLayout>
</template>
