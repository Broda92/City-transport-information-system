<template>
  <table id="vnitrni_tp" style="border-spacing: 0px">
    <tr>
      <td id="tp_linka" rowspan="2">1</td>
      <td></td>
      <td id="tp_den" colspan="2">pondělí</td>
      <td id="tp_datum" colspan="2">29.3.2021</td>
      <td colspan="4"></td>
      <td id="tp_konec_popis" colspan="4">Konečná zastávka</td>
      <td id="tp_mapa" rowspan="9">
        <tp-map></tp-map>
      </td>
    </tr>
    <tr>
      <td></td>
      <td id="tp_cas" colspan="4">21:45</td>
      <td colspan="4"></td>
      <td id="tp_zastavkak" class="tp_zastavka_konec" colspan="4">ŘEČKOVICE</td>
    </tr>
    <tr>
      <td colspan="2" height="20px"></td>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
      <tp-stop></tp-stop>
    </tr>
    <tr>
      <td id="tp_zast_prakt" colspan="2">Aktuální/příští zastávka</td>
    </tr>
    <tr>
      <td id="tp_zastavka0" colspan="2">Moravské náměstí</td>
    </tr>
    <tr>
      <td id="tp_zona0" class="tp_zona" colspan="2">Zóna: 100</td>
    </tr>
    <tr>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td colspan="2"></td>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
      <tp-stop-demand></tp-stop-demand>
    </tr>
    <tr>
      <td colspan="12"></td>
      <td colspan="2" class="tp_znameni" id="tp_znameni_popis">...na znamení</td>
    </tr>
  </table>
</template>

<script>
import TPMap from "./TPMap.vue";
import TPStop from "./TPStop.vue";
import TPStopDemand from "./TPStopDemand.vue";

export default {
  name: "InoInsideTP",
  components: {
    "tp-stop": TPStop,
    "tp-stop-demand": TPStopDemand,
    "tp-map": TPMap,
  },
};
</script>

<style lang="scss" scoped>
#vnitrni_tp {
  position: absolute;
  left: 5px;
  top: 360px;
  height: 40px;
  border: 3px solid black;
  font-size: 15px;
  background-color: darkblue;
  color: white;
}

#tp_linka {
  color: darkblue;
  font-family: Arial;
  background-color: black;
  height: 30px;
  width: 80px;
  text-align: center;
  background-color: white;
  font-size: 40px;
  font-weight: bold;
}

.tp_linkax {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  height: 20px;
}

#tp_cas {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 40px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

#tp_datum {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
}

#tp_den {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
}

#tp_zastavka0 {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 190px;
  height: 65px;
  font-size: 20px;
  font-weight: bold;
}

#tp_zast_prakt {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 180px;
  height: 25px;
}

.tp_zona {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 190px;
  height: 20px;
}

#tp_znameni {
  color: #00bfff;
  font-family: Arial;
  background-color: black;
  text-transform: uppercase;
}

.tp_znamenix {
  text-align: center;
  height: 12px;
}

.tp_zastavkax {
  color: white;
  font-family: Arial;
  width: 85px;
  height: 125px;
  font-size: 7pt;
  transform: rotate(300deg);
  text-align: left;
}

#tp_zastavkak {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 180px;
  text-transform: uppercase;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
}

#tp_konec_popis {
  color: darkblue;
  font-family: Arial;
  background-color: white;
  width: 180px;
  height: 25px;
  text-align: right;
  font-size: 15px;
}

#tp_mapa {
  background-color: black;
  width: 250px;
  height: 250px;
  text-align: center;
}
</style>
