import './assets/main.css'
import 'bulma/css/bulma.css'
import '@formkit/themes/genesis'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faShop, faCartPlus, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faShop, faCartPlus, faCartShopping, faTrash)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(plugin, defaultConfig)

app.use(createPinia())

app.mount('#app')
