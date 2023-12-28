import { createApp } from 'vue'
// importar o componente de raiz `App`
// a partir dum componente de ficheiro único.
import App from './App.vue'

const app = createApp(App)

app.mount('#app')