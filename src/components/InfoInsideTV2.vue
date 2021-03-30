<template>
  <table id="vnitrni_tvn">
    <tr>
      <th class="tvn_okrajhd" colspan="8"></th>
    </tr>
    <tr>
      <th class="tvn_okrajlp" rowspan="8"></th>
      <th
        class="tvn_linka"
        id="tvn_linka"
        rowspan="3"
        style="
          background-color: darkblue;
          color: red;
          width: 50px;
          height: 50px;
          font-size: 35px;
          font-weight: bold;
        "
      >
        1
      </th>
      <th style="background-color: darkblue; width: 15px"></th>
      <th
        id="tvn_zastavkatext"
        style="
          background-color: darkblue;
          color: white;
          font-size: 10px;
          text-align: left;
          height: 15px;
          width: 140px;
        "
      >
        zastávka - stop
      </th>
      <th id="tvn_zonatext" class="tvn_zonax" style="font-size: 10px; width: 25px">
        Zóna
      </th>
      <th
        class="tvn_info"
        id="tvn_info"
        rowspan="9"
        style="width: 190px; height: 100%"
      ></th>
      <th class="tvn_okrajlp" rowspan="8"></th>
    </tr>
    <tr>
      <tv2-stop></tv2-stop>
    </tr>
    <tr>
      <th class="tvn_zastavkax"></th>
      <th class="tvn_zastavkax" style="text-align: center; font-size: 10px">
        žádné přestupy - no transfers
      </th>
      <th class="tvn_zonax"></th>
    </tr>
    <tr>
      <th class="tvn_linkacas"></th>
      <tv2-stop></tv2-stop>
    </tr>
    <tr>
      <th class="tvn_linkacas" id="tvn_dendatum" style="font-size: 10px">
        pondělí<br />29.03.<br />2021
      </th>
      <tv2-stop></tv2-stop>
    </tr>
    <tr>
      <th class="tvn_linkacas" id="tvn_cas" style="font-size: 20px">21:45</th>
      <tv2-stop></tv2-stop>
    </tr>
    <tr>
      <th
        rowspan="2"
        id="tvn_Brno"
        class="tvn_Brno"
        style="background-color: darkblue"
      ></th>
      <th style="background-color: white"></th>
      <th
        id="tvn_smertext"
        style="background-color: white; font-size: 10px; height: 15px; text-align: left"
      >
        směr - destination
      </th>
      <th class="tvn_zonax"></th>
    </tr>
    <tr>
      <th style="background-color: white"></th>
      <th class="tvn_zastavkak" id="tvn_zastavkak">ŘEČKOVICE</th>
      <th class="tvn_zonax" id="tvn_zonak">101</th>
    </tr>
    <tr>
      <th class="tvn_okrajhd" colspan="7"></th>
    </tr>
  </table>
</template>

<script>
import TV2Stop from "../components/TV2Stop";

export default {
  name: "Test",
  components: {
    "tv2-stop": TV2Stop,
  },
};
</script>

<style lang="scss" scoped>
#vnitrni_tvn {
  position: absolute;
  left: 880px;
  top: 100px;
  height: 150px;
  width: 570px;
  border: 1px solid black;
  font-size: 20px;
  background-color: darkgray;
  border-collapse: collapse;
}

.tvn_okrajhd {
  height: 10px;
  background-color: black;
}

.tvn_okrajlp {
  width: 10px;
  background-color: black;
}

.tvn_linka {
  color: black;
  font-family: Arial;
  text-transform: uppercase;
}

.tvn_linkax {
  color: red;
  font-family: Arial;
  background-color: darkgray;
  height: 25px;
}

.tvn_zastavka {
  color: black;
  font-family: Arial;
  background-color: yellow;
  text-align: left;
  padding-left: 10px;
}

.tvn_zastavkak {
  color: black;
  font-family: Arial;
  background-color: white;
  text-align: left;
  padding-left: 3px;
  text-transform: uppercase;
  font-size: 16px;
  height: 20px;
}

.tvn_zast {
  font-family: Arial;
  background-color: darkblue;
  text-align: center;
  padding-left: 10px;
}

.tvn_zastavkax {
  color: white;
  font-family: Arial;
  background-color: darkblue;
  text-align: left;
  font-size: 16px;
  height: 30px;
}

.tvn_linkacas {
  color: white;
  font-family: Arial;
  background-color: darkblue;
  text-align: center;
}

.tvn_zonax {
  color: black;
  font-family: Arial;
  background-color: powderblue;
  text-align: center;
  font-size: 10px;
}

.tvn_zastavkazx {
  color: white;
  font-family: Arial;
  background-color: darkgray;
  text-align: left;
  font-size: 7px;
  color: red;
  height: 10px;
  text-transform: uppercase;
}

.tvn_zastavkaz {
  color: white;
  font-family: Arial;
  background-color: yellow;
  text-align: left;
  font-size: 7px;
  color: red;
  height: 10px;
  text-transform: uppercase;
}

.tvn_zonacas {
  color: black;
  font-family: Arial;
  background-color: yellow;
  width: 55px;
}

.tvn_zonacasx {
  color: white;
  font-family: Arial;
  background-color: darkgray;
}

.tvn_zonacasz {
  color: white;
  font-family: Arial;
  background-color: yellow;
}

.tvn_info {
  background-color: darkred;
  font-family: Calibri;
  text-align: left;
  padding-left: 45px;
  font-weight: normal;
}
</style>
