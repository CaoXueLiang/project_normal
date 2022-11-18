import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

import { sonAMethod, sonBMethod } from 'component_repo';

console.log(sonAMethod('lining', 'hi'));
console.log(sonBMethod(10, 20));

createApp(App).mount('#app');
