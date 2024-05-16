import { createApp } from 'vue'
import App from './App.vue'

// Import the FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import the FontAwesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faPlus, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faPlus, faTrash, faPenToSquare)

// Create the Vue app
const app = createApp(App)

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
