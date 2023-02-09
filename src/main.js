import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import LazyLoadDirective from "./directives/LazyLoadDirective";

const app = createApp(App)

app.use(router)
app.use(store) 
app.directive("lazyload", LazyLoadDirective);

app.mount('#app')
