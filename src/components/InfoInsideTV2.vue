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
          width: 50px;
          height: 50px;
          font-size: 35px;
          font-weight: bold;
        "
        v-bind:style="color"
      >
        {{ line }}
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
      <tv2-stop v-bind:data="data" v-bind:next="0" v-bind:stop_id="stop_id"></tv2-stop>
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
      <tv2-stop v-bind:data="data" v-bind:next="1" v-bind:stop_id="stop_id"></tv2-stop>
    </tr>
    <tr>
      <th class="tvn_linkacas" id="tvn_dendatum" style="font-size: 10px">
        {{ day }}<br />{{ date }}<br />{{ year }}
      </th>
      <tv2-stop v-bind:data="data" v-bind:next="2" v-bind:stop_id="stop_id"></tv2-stop>
    </tr>
    <tr>
      <th class="tvn_linkacas" id="tvn_cas" style="font-size: 20px">{{ time }}</th>
      <tv2-stop v-bind:data="data" v-bind:next="3" v-bind:stop_id="stop_id"></tv2-stop>
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
      <th class="tvn_zastavkak" id="tvn_zastavkak">{{ destination }}</th>
      <th class="tvn_zonax" id="tvn_zonak">{{ zone_destination }}</th>
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
    zone_destination() {
      if (this.data[this.stop_id]) {
        return this.data[this.data.length - 1]["zona"];
      } else {
        return "";
      }
    },
    color() {
      if (this.line < 20) {
        let tram_color;
        switch (this.line) {
          case "1":
            tram_color = "color:#d40000";
            break;
          case "2":
            tram_color = "color:#4ab95d";
            break;
          case "3":
            tram_color = "color:#009e9e";
            break;
          case "4":
            tram_color = "color:#ee7e1e";
            break;
          case "5":
            tram_color = "color:#f31d7f";
            break;
          case "6":
            tram_color = "color:#0777c1";
            break;
          case "8":
            tram_color = "color:#ffcb31";
            break;
          case "9":
            tram_color = "color:#8c4a9a";
            break;
          case "10":
            tram_color = "color:#a05a2c";
            break;
          case "11":
            tram_color = "color:#afca28";
            break;
          case "12":
            tram_color = "color:#00ccff";
            break;
          default:
            tram_color = "color:MediumSpringGreen";
            break;
        }
        return tram_color;
      } else if (20 <= this.line && this.line <= 39) {
        return "color:#008033";
      } else if ((40 <= this.line && this.line <= 88) || this.line.includes("š")) {
        return "color:#2c89c8";
      } else if (this.line.includes("E")) {
        return "color:#c1193a";
      } else if (this.line.includes("N")) {
        return "color:dimgrey";
      } else {
        return "color:#009240";
      }
    },
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
