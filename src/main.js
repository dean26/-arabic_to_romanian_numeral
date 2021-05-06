import { createApp  } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import Home from './components/Home.vue'
import Kontakt from './components/Kontakt.vue'
import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/kontakt', component: Kontakt },
]

const router = createRouter({
    history: createWebHistory(),
    routes, //short for `routes: routes`
})

//Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
//mount
app.mount('#app')