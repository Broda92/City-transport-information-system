<template>
  <RIS_II v-bind:routes="myJson" />
</template>

<script>
import RIS_II from "./components/RIS_II.vue";
import json from "./assets/MHD_Brno_data.json";

export default {
  name: "App",
  components: {
    RIS_II,
  },
  data() {
    return {
      myJson: json,
    };
  },
};
</script>

<style>
html {
  background-color: darkgrey;
  font-family: Arial;
}
</style>
