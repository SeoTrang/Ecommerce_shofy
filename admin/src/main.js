import { createApp } from 'vue'
import './style.css'

// store
import store from './store/store.js'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'



// ant design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as icons from '@ant-design/icons-vue'; // Import icons từ Ant Design Vue

// toast
import Vue3Toasity, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



import router from './router'

import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
  })

  const options = {
    autoClose: 2000,
    position: toast.POSITION.TOP_CENTER
  };


app.use(router)

// store
app.use(store)

app.use(vuetify)
app.use(Antd)

app.use(Vue3Toasity, options);
for (const key in icons) {
  app.component(key, icons[key]); // Đăng ký các icons để sử dụng trong template
}

app.mount('#app')

// createApp(App).mount('#app')
