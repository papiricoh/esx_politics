const { createApp } = Vue



createApp({
  data() {
    return {
      count: 0,
      page: "Home",
      election: false,
      candidates: [
        {name: "juan", lastname:"Cuesta", party:"Cimadevilla", voted: false, num_votes:0},
        {name: "Adolf", lastname:"Jk", party:"Berlin", voted: false, num_votes:0},
        {name: "jerry", lastname:"Smith", party:"Albuquerque", voted: false, num_votes:0}
      ]
    }
  }
}).mount('#app')