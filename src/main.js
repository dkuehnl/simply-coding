import { createApp } from 'vue'

//Vuetify 
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; 
import * as directives from 'vuetify/directives'; 

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    components, 
    directives,
}); 

createApp(App).use(vuetify, router).mount('#app')