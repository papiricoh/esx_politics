// import { createApp } from 'vue'
const { createApp } = Vue
const { VueApexCharts } = "vue3-apexcharts";

const app = createApp({
  data() {
    return {
      debug_mode: true,
      count: 0,
      page: "Home",
      user_full_name: "John Doe",
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
          { title: "Millitary Act", desc: "Desc", type: "Amendment", proposed_by: "Juan", for: 0, against: 0, abs: 0, in_active: false, is_signed: false, already_voted: 0 }, //Already voted 0:no, 1:for, 2:against, 3: abs
          { title: "Constitucion of San Andreas", desc: "First Article: HELLO", type: "Constitution", proposed_by: "Los Santos Council", for: 120, against: 34, abs: 32, in_active: true, is_signed: true, already_voted: 1 },
          { title: "Free Minecraft Bill", desc: "Free minecraft for everyone", type: "Bill", proposed_by: "Jeb", for: 120, against: 65, abs: 123, in_active: true, is_signed: false, already_voted: 2 }

        ]
      },
      already_voted: false,
      // Law Reading
      reading_law_title: "LAW_TITLE",
      reading_law_type: "LAW_TYPE",
      reading_law_desc: "LAW_DESC",

      // Error
      create_law_type_error: false,

      // Parties and senators
      ideologies: {
        result: [
          { left: 12, center: 3, right: 32 }
        ]
      },
      parties: {
        result: [
          { name: "United Wing Party", ideology: "Conservative", desc: "The united wing party", members: ["Jose Jimenez", "Manuel Turizo"] },
          { name: "Workers Union Party", ideology: "Woke", desc: "The united workers party", members: ["Juan Guaizo", "Jenaro Lopez"] },
          { name: "Puerto Rico Liberation Movement", ideology: "Anarco-Capitalist", desc: "The Puerto Rican Liberation Movement", members: ["Benito Perez", "Maluma Beibi", "Bryant Myers"] }
        ]
      },
      active_party_page: -1,

      // Party pages
      page_party_name: "",
      page_party_ideology: "",
      page_party_members: "",
      page_party_desc: ""

    }
  },
  methods: {
    createLaw(law_title, law_desc, law_type) {
      if (law_type != null) {
        laws_copy = this.laws,
          laws_copy.result[laws_copy.result.length] = { title: law_title, desc: law_desc, type: law_type, proposed_by: this.user_full_name, for: 0, against: 0, abs: 0, in_active: false, is_signed: false, already_voted: 0 },
          this.laws = laws_copy
      } else {
        this.create_law_type_error = true
      }

    },
    revocateLaw(law_title, law_desc) {
      if (!this.checkRevocation(law_title)) {
        laws_copy = this.laws,
          laws_copy.result[laws_copy.result.length] = { title: 'Revocation of ' + law_title, desc: law_desc, type: 'Revocation', proposed_by: this.user_full_name, for: 0, against: 0, abs: 0, in_active: false, is_signed: false, already_voted: 0 },
          this.laws = laws_copy
      }
    },
    checkRevocation(law_title) {
      var posible = false;
      this.laws.result.forEach(i => {

        if (i.title == 'Revocation of ' + law_title) {
          console.log(i.title + " Already exists")
          posible = true;
        }
      })
      return posible; //REVOCATION POSIBLE
    },
    generatePartyPage(index) {
      this.page_party_name = this.parties.result[index].name,
        this.page_party_ideology = this.parties.result[index].ideology,
        this.page_party_desc = this.parties.result[index].desc,
        this.page_party_members = "",
        this.parties.result[index].members.forEach(i => {
          this.page_party_members = this.page_party_members + i + ",\n";
        })
      this.page_party_members = this.page_party_members.substring(0, this.page_party_members.length - 2);
    },
    generateFullName(firstName, lastName) {
      this.user_full_name = firstName + " " + lastName;
    },
    prueba() {
      console.log(this.parties.result[0].members[0]);
    }
  },
})
app.use(VueApexCharts);

app.mount('#app')
