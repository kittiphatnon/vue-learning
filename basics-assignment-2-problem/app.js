import { createApp } from 'vue'

const app = createApp({
  data() {
    return {

    }
  },
  methods: {
    showAlert() {
      alert('Alert!')
    }
  }
})

app.mount('#assignment')
