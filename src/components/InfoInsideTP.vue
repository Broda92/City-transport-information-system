<template>
  <table id="vnitrni_tp" style="border-spacing: 0px">
    <tr>
      <td id="tp_linka" rowspan="2">{{ line }}</td>
      <td></td>
      <td id="tp_den" colspan="2">{{ day }}</td>
      <td id="tp_datum" colspan="2">{{ date + " " + year }}</td>
      <td colspan="4"></td>
      <td id="tp_konec_popis" colspan="4">Konečná zastávka</td>
      <td id="tp_mapa" rowspan="9">
        <tp-map v-bind:position="position"></tp-map>
      </td>
    </tr>
    <tr>
      <td></td>
      <td id="tp_cas" colspan="4">{{ time }}</td>
      <td colspan="4"></td>
      <td id="tp_zastavkak" class="tp_zastavka_konec" colspan="4">{{ destination }}</td>
    </tr>
    <tr>
      <td colspan="2" height="20px"></td>
      <tp-stop v-bind:data="data" v-bind:next="1" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="2" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="3" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="4" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="5" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="6" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="7" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="8" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="9" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="10" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="11" v-bind:stop_id="stop_id"></tp-stop>
      <tp-stop v-bind:data="data" v-bind:next="12" v-bind:stop_id="stop_id"></tp-stop>
    </tr>
    <tr>
      <td id="tp_zast_prakt" colspan="2">Aktuální/příští zastávka</td>
    </tr>
    <tr>
      <td id="tp_zastavka0" colspan="2">{{ stop }}</td>
    </tr>
    <tr>
      <td id="tp_zona0" class="tp_zona" colspan="2">Zóna: {{ zone }}</td>
    </tr>
    <tr>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td colspan="2"></td>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="1"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="2"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="3"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="4"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="5"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="6"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="7"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="8"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="9"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="10"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="11"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
      <tp-stop-demand
        v-bind:data="data"
        v-bind:next="12"
        v-bind:stop_id="stop_id"
      ></tp-stop-demand>
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
  props: ["data", "stop_id"],
  computed: {
    line() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["linka"];
      } else {
        return "";
      }
    },
    destination() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["smer_tv"];
      } else {
        return "";
      }
    },
    time() {
      return new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      });
    },
    day() {
      let days = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
      return days[new Date().getDay()];
    },
    date() {
      return new Date().getDate() + ". " + (new Date().getMonth() + 1) + ". ";
    },
    year() {
      return new Date().getFullYear();
    },
    stop() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["zastavka"];
      } else {
        return "";
      }
    },
    zone() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["zona"];
      } else {
        return "";
      }
    },
    position() {
      if (this.data[this.stop_id]) {
        return {
          lat: this.data[this.stop_id]["lat"],
          long: this.data[this.stop_id]["long"],
        };
      } else {
        return "";
      }
    },
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
