  // import { createApp } from 'vue'
  const { createApp } = Vue


  createApp({
  data() {
    return {
      count: 0,
      page: "Home",
      election: false,
      candidates: [
        {name: "juan", lastname:"Cuesta", party:"Cimadevilla", voted: false, num_votes:50},
        {name: "Adolf", lastname:"Jk", party:"Berlin", voted: false, num_votes:420},
        {name: "jerry", lastname:"Smith", party:"Albuquerque", voted: false, num_votes:20},
        {name: "Rodrigo", lastname:"De Borbon", party:"Oviedin", voted: false, num_votes:20}
      ],
      voted: false
    }
  }
  }).mount('#app')