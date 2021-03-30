<template>
  <table id="vnitrni_tv">
    <tr>
      <th class="tv_okrajhd" colspan="5"></th>
    </tr>
    <tr>
      <th class="tv_okrajlp" rowspan="9"></th>
      <th id="tv_linka" class="tv_linka">1</th>
      <th class="tv_zastavkak" id="tv_zastavkak">ŘEČKOVICE</th>
      <th class="tv_zonacas" id="tv_cas">21:45</th>
      <th class="tv_okrajlp" rowspan="9"></th>
    </tr>
    <tv1-stop></tv1-stop>
    <tv1-stop></tv1-stop>
    <tv1-stop></tv1-stop>
    <tv1-stop></tv1-stop>
    <tr>
      <th class="tv_okrajhd" colspan="5"></th>
    </tr>
  </table>
</template>

<script>
import TV1Stop from "./TV1Stop.vue";

export default {
  name: "InfoInsideLCD1",
  components: {
    "tv1-stop": TV1Stop,
  },
};
</script>

<style lang="scss" scoped>
#vnitrni_tv {
  position: absolute;
  left: 470px;
  top: 100px;
  height: 150px;
  width: 390px;
  border: 1px solid black;
  font-size: 20px;
  background-color: darkgray;
  border-collapse: collapse;
}

.tv_okrajhd {
  height: 10px;
  background-color: black;
}

.tv_okrajlp {
  width: 10px;
  background-color: black;
}

.tv_linka {
  color: black;
  font-family: Arial;
  background-color: orange;
  height: 25px;
  width: 45px;
  text-transform: uppercase;
}

.tv_zastavka {
  color: black;
  font-family: Arial;
  background-color: yellow;
  text-align: left;
  padding-left: 10px;
}

.tv_zastavkak {
  color: black;
  font-family: Arial;
  background-color: orange;
  text-align: left;
  padding-left: 3px;
  text-transform: uppercase;
}

.tv_zastavkaz {
  color: white;
  font-family: Arial;
  background-color: yellow;
  text-align: left;
  padding-left: 10px;
  font-size: 7px;
  color: red;
  height: 10px;
  text-transform: uppercase;
}

.tv_zonacas {
  color: black;
  font-family: Arial;
  background-color: yellow;
  width: 55px;
}

.tv_zonacasz {
  color: white;
  font-family: Arial;
  background-color: yellow;
}
</style>
