<template>
  <div class="contact-container">
    <div class="contact-page">
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <input v-model="form.name" type="text" placeholder="Name" required />
        <input v-model="form.email" type="email" placeholder="Email" required />
        <textarea v-model="form.message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert(`Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)
}
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 40px;
}

.contact-page {
  margin-top: -150px;
  background: white;
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 14px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

.contact-form button {
  background-color: #3b82f6;
  color: white;
  font-size: 1.1rem;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background-color: #2563eb;
}
</style>
