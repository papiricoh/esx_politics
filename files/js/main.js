const { createApp } = Vue

createApp({
  data() {
    return {
      count: 0,
      page: "Home",
      show: false
    }
  }
}).mount('#app')