// import { createApp } from 'vue'
const { createApp } = Vue


createApp({
  data() {
    return {
      debug_mode: true,
      count: 0,
      page: "Home",
      is_senator: false,
      is_president: false,
      is_member_of_cabinet: false,
      is_election_day: false,
      days_until_next_election: 12,
      // Election Variables
      election: false,
      v_candidates: {
        results: [
          { name: "juan", lastname: "Cuesta", party: "Cimadevilla", voted: false, num_votes: 50 },
          { name: "Adolf", lastname: "Jk", party: "Berlin", voted: false, num_votes: 420 },
          { name: "jerry", lastname: "Smith", party: "Albuquerque", voted: false, num_votes: 20 },
          { name: "Rodrigo", lastname: "De Borbon", party: "Oviedin", voted: false, num_votes: 20 },
          { name: "Juan", lastname: "Juanito", party: "JJ", voted: false, num_votes: 20 }

        ]
      },
      laws: {
        result: [
          { title: "juan", lastname: "Cuesta", party: "Cimadevilla", voted: false, num_votes: 50 }

        ]
      },
      already_voted: false,
      // Senate Voting Variables

    }
  },
  methods: {
    vote() {
      this.already_voted = true
    },
  },
}).mount('#app')
