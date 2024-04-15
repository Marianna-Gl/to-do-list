import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue' 555.5k (gzipped:178k)
import { createVuetify } from 'vuetify' 33.1k (gzipped:12k)
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives
})


create (App).use(vuetify).mount('#app')
