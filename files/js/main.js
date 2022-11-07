const { createApp } = Vue

createApp({
  data() {
    return {
      count: 0,
      page: "Home"
    }
  }
}).mount('#app')