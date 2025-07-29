<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            errors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    computed: {
        isFormValid() {
            return Object.values(this.errors).every(error => error === '')
        }
    },
    methods: {
        validateName(value) {
            if (value.length < 3) {
                return "Your name must contain at least 3 characters";
            }
            if (!/^[a-zA-Z ]+$/.test(value)) {
                return "Please enter a valid name (letters and spaces only)";
            }
            return "";
        },
        validateEmail(value) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return "Please enter a valid email address";
            }
            return "";
        },
        validateField(value, fieldName) {
            if (value === "") {
                return `Please enter your ${fieldName}`;
            }
            if (value.length < 10 && fieldName !== 'name') {
                return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least 10 characters`;
            }
            return "";
        },
        showError(field, error) {
            this.errors[field] = error;
        },
        handleInput(field) {
            if (field === 'name') {
                this.errors.name = this.validateName(this.formData.name);
            } else if (field === 'email') {
                this.errors.email = this.validateEmail(this.formData.email);
            } else {
                this.errors[field] = this.validateField(this.formData[field], field);
            }
        },
        submitForm() {
            // Validate all fields
            this.errors.name = this.validateName(this.formData.name);
            this.errors.email = this.validateEmail(this.formData.email);
            this.errors.subject = this.validateField(this.formData.subject, 'subject');
            this.errors.message = this.validateField(this.formData.message, 'message');

            if (!this.isFormValid) {
                alert("Please fix the errors in the form");
                return;
            }

            if (confirm(`Your message about "${this.formData.subject}" will be sent to ${this.formData.email}`)) {
                alert("Your message was sent successfully!");
                // Reset form
                this.formData = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
                this.errors = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
            } else {
                alert("Message sending canceled");
            }
        }
    }
}
</script>

<template>
    <form class="form relative" @submit.prevent="submitForm">
        <div class="field relative block">
            <img class="icon w-6 h-6 absolute left-[-25px] top-[15px]" src="/icons/user-solid.svg" alt="">
            <input
                class="input p-[10px] outline-0 rounded-[20px] shadow-2xl border-0 m-[5px] w-full bg-bg text-text-main"
                type="text" v-model="formData.name" @input="handleInput('name')" placeholder="Your Name" required>
        </div>
        <p class="name-error"
            :class="errors.name ? 'block p-[5px_10px] text-start m-[0_0_10px_10px] text-danger text-sm' : 'hidden'">
            {{ errors.name }}
        </p>

        <div class="field relative block">
            <img class="icon w-6 h-6 absolute left-[-25px] top-[15px]" src="/icons/envelope-solid.svg" alt="">
            <input
                class="input p-[10px] outline-0 rounded-[20px] shadow-2xl border-0 m-[5px] w-full bg-bg text-text-main"
                type="email" v-model="formData.email" @input="handleInput('email')" placeholder="Your email" required>
        </div>
        <p class="email-error"
            :class="errors.email ? 'block p-[5px_10px] text-start m-[0_0_10px_10px] text-danger text-sm' : 'hidden'">
            {{ errors.email }}
        </p>

        <div class="field relative block">
            <img class="icon w-6 h-6 absolute left-[-25px] top-[15px]" src="/icons/comment-regular.svg" alt="">
            <input
                class="input p-[10px] outline-0 rounded-[20px] shadow-2xl border-0 m-[5px] w-full bg-bg text-text-main"
                type="text" v-model="formData.subject" @input="handleInput('subject')" placeholder="Your subject"
                required>
        </div>
        <p class="subject-error"
            :class="errors.subject ? 'block p-[5px_10px] text-start m-[0_0_10px_10px] text-danger text-sm' : 'hidden'">
            {{ errors.subject }}
        </p>

        <div class="field relative block">
            <img class="icon w-6 h-6 absolute left-[-25px] top-[15px]" src="/icons/message-solid.svg" alt="">
            <textarea rows="5"
                class="input p-[10px] outline-0 rounded-[20px] shadow-2xl border-0 m-[5px] w-full bg-bg text-text-main resize-none"
                v-model="formData.message" @input="handleInput('message')" placeholder="Your message"
                required></textarea>
        </div>
        <p class="message-error"
            :class="errors.message ? 'block p-[5px_10px] text-start m-[0_0_10px_10px] text-danger text-sm' : 'hidden'">
            {{ errors.message }}
        </p>

        <button type="submit"
            class="submit p-[10px_20px] m-[10px] cursor-pointer border border-primary outline-0 bg-text-sec text-primary rounded-[20px] hover:bg-primary hover:text-text-sec hover:outline hover:outline-text-main disabled:cursor-not-allowed disabled:bg-gray disabled:text-danger"
            :disabled="!isFormValid">
            Send
        </button>
    </form>
</template>
