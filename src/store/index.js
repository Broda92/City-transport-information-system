import { createStore } from 'vuex'

// time, date, trasa, routes, data?, json?

export default createStore({
  state: {
    trasa: "", 
    stop_id: 0,
    kurz: "",
    mode: "",
  },
  mutations: {
    stop_next (state) {
      state.stop_id++
    },
    stop_previous (state) {
      state.stop_id--
    },
    stop_reset (state) {
      state.stop_id = 0
    },
    stop_end (state) {
      state.trasa = ""
    },
    set_kurz (state, kurz) {
      state.kurz = kurz
    },
    set_mode (state, mode) {
      state.mode = mode
    },
    set_trasa (state, trasa) {
      state.trasa = trasa
    }
  },
  getters: {
    stop_id() {
      return this.$store.state.stop_id;
    },
    mode() {
      return this.$store.state.mode;
    },
    trasa() {
      return this.$store.state.trasa;
    },
  },
  actions: {
  },
  modules: {
  }
})
