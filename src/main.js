import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css";
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'


const app = createApp(App)

app.use(router)
app.component('Header', Header)
app.component('Footer', Footer)
app.component('Hero', Hero)
app.mount('#app')
