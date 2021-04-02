<template>
  <table id="venku_bocni">
    <tr>
      <line-out rowspan="2" linka="4"></line-out>
      <th class="bocni_pres" id="bocni_pres">-Semilasso-</th>
    </tr>
    <tr>
      <th class="bocni_smer" id="bocni_smer">ŘEČKOVICE</th>
    </tr>
  </table>
</template>

<script>
import LineOut from "./LineOut.vue";

export default {
  name: "InfoOutSide",
  components: {
    "line-out": LineOut,
  },
};
</script>

<style lang="scss" scoped>
.bocni_smer {
  height: 25px;
  width: 250px;
  border: 1px solid black;
  background-color: black;
  color: #0dc958;
  font-size: 20px;
}

.bocni_pres {
  height: 25px;
  width: 250px;
  border: 1px solid black;
  background-color: black;
  color: #0dc958;
  font-size: 20px;
}

#venku_bocni {
  position: absolute;
  background-color: black;
  left: 650px;
  top: 5px;
  border: 2px solid black;
}
</style>
