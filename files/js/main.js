// import { createApp } from 'vue'
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      debug_mode: true,
      count: 0,
      page: "Home",
      user_identifier: "",
      user_full_name: "John Doe",
      user_job_grade: "Citizen",
      is_senator: false,
      is_president: false,
      is_member_of_cabinet: false,
      is_election_day: false,
      days_until_next_election: 12,


      // Election Variables
      election: false,
      v_candidates: {
        results: [
          { name: "juan", lastname: "Cuesta", id: "", party: "Cimadevilla", voted: false, num_votes: 50 },
          { name: "Adolf", lastname: "Jk", id: "", party: "Berlin", voted: false, num_votes: 420 },
          { name: "jerry", lastname: "Smith", id: "", party: "Albuquerque", voted: false, num_votes: 20 },
          { name: "Rodrigo", lastname: "De Borbon", id: "", party: "Oviedin", voted: false, num_votes: 20 },
          { name: "Juan", lastname: "Juanito", id: "", party: "JJ", voted: false, num_votes: 20 }

        ]
      },
      laws: {
        result: [
          { title: "Millitary Act", desc: "Desc", type: "Amendment", proposed_by: "Juan", proposed_by_id: "", for: 0, against: 0, abs: 0, in_active: false, is_signed: false, already_voted: 0 }, //Already voted 0:no, 1:for, 2:against, 3: abs
          { title: "Constitucion of San Andreas", desc: "First Article: HELLO", type: "Constitution", proposed_by: "Los Santos Council", proposed_by_id: "", for: 120, against: 34, abs: 32, in_active: true, is_signed: true, already_voted: 1 },
          { title: "Free Minecraft Bill", desc: "Free minecraft for everyone", type: "Bill", proposed_by: "Jeb", proposed_by_id: "", for: 120, against: 65, abs: 123, in_active: true, is_signed: false, already_voted: 2 },
          { title: "Free Minecraft Bill", desc: "Free minecraft for everyone", type: "Bill", proposed_by: "Jeb", proposed_by_id: "", for: 120, against: 65, abs: 123, in_active: true, is_signed: true, already_voted: 2 },
          { title: "Free Minecraft Bill", desc: "Free minecraft for everyone", type: "Bill", proposed_by: "Jeb", proposed_by_id: "", for: 120, against: 65, abs: 123, in_active: true, is_signed: false, already_voted: 2 }

        ]
      },
      already_voted: false,
      // Law Reading
      reading_law_title: "LAW_TITLE",
      reading_law_type: "LAW_TYPE",
      reading_law_desc: "LAW_DESC",

      // Error
      create_law_type_error: 'null',

      // Parties and senators
      ideologies: {
        result: [
          { left: 34, center: 3, right: 32 }
        ]
      },
      parties: {
        result: [
          { name: "United Wing Party", ideology: "Conservative", desc: "The united wing party", members: [{ name: "Jose Jimenez", id: "", is_leader: true }, { name: "Jose Jimenez", id: "", is_leader: false }] },
          { name: "Workers Union Party", ideology: "Woke", desc: "The united workers party", members: [{ name: "Javier Iglesias", id: "", is_leader: true }, { name: "Benito Lopez", id: "", is_leader: false }, { name: "Luis Manero", id: "", is_leader: false }, { name: "Adolfo Astorgano", id: "", is_leader: false }, { name: "Adrian Romero", id: "", is_leader: false }] }
        ]
      },
      active_party_page: -1,
      page_law_type: "Constitution",

      // Party pages
      page_party_name: "",
      page_party_ideology: "",
      page_party_members: "",
      page_party_desc: "",


      // Executive Power
      ministeries: {
        result: [
          { name: "Department of State", leader_grade: "Secretary of State", minister_full_name: "John Doe", minister_id: "" },
          { name: "Department of State", leader_grade: "Secretary of State", minister_full_name: "John Doe", minister_id: "" },
          { name: "Department of State", leader_grade: "Secretary of State", minister_full_name: "John Doe", minister_id: "" },
          { name: "Department of State", leader_grade: "Secretary of State", minister_full_name: "John Doe", minister_id: "" },
          { name: "Department of Inner Security", leader_grade: "Secretary of Inner Security", minister_full_name: "John Doe", minister_id: "" }
        ]
      }

    }
  },
  methods: {
    createLaw(law_title, law_desc, law_type) {
      if (law_type != null) {
        if (!this.checkCreation(law_title)) {
          laws_copy = this.laws,
            laws_copy.result[laws_copy.result.length] = { title: law_title, desc: law_desc, type: law_type, proposed_by: this.user_full_name, for: 0, against: 0, abs: 0, in_active: false, is_signed: false, already_voted: 0 },
            this.laws = laws_copy
        }
        else {
          this.create_law_type_error = 'law_already_exists'
        }
      } else {
        this.create_law_type_error = 'no_type'
      }

    },
    checkCreation(law_title) {
      var posible = false;
      this.laws.result.forEach(i => {
        if (i.title == law_title) {
          console.log(i.title + " Already exists")
          posible = true;
        }
      })
      return posible; //REVOCATION POSIBLE
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
          if (i.is_leader) {
            this.page_party_members = this.page_party_members + i.name + " (Leader),\n";
          } else {
            this.page_party_members = this.page_party_members + i.name + ",\n";
          }
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


app.mount('#app')
