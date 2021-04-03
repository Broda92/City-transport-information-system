<template>
  <table class="vnitrni_maly" id="vnitrni_maly_1">
    <tr>
      <th class="vnitrni_maly_Tzastavka" id="vnitrni_maly1_zastavka0">
        {{ stop }}
      </th>
      <th class="vnitrni_maly_cas" id="vnitrni_maly1_cas">{{ time }}</th>
    </tr>
  </table>
  <table class="vnitrni_maly" id="vnitrni_maly_2">
    <tr>
      <th class="vnitrni_maly_linka" id="vnitrni_maly2_linka">{{ line }}</th>
      <th class="vnitrni_maly_zona" id="vnitrni_maly2_zona0">Zóna {{ zone }}</th>
      <th class="vnitrni_maly_cas" id="vnitrni_maly2_cas">{{ time }}</th>
    </tr>
  </table>
  <table class="vnitrni_maly" id="vnitrni_maly_3">
    <tr>
      <th class="vnitrni_maly_linka" id="vnitrni_maly3_linka">{{ line }}</th>
      <th class="vnitrni_maly_smer" id="vnitrni_maly3_zastavkak">{{ destination }}</th>
    </tr>
  </table>
  <table class="vnitrni_maly" id="vnitrni_maly_4">
    <tr>
      <th class="vnitrni_maly_znameni">
        <marquee
          HEIGHT="100%"
          width="100%"
          behavior="scroll"
          direction="left"
          scrollamount="5"
          scrolldelay="20"
          id="vnitrni_maly4_znameni0"
          >{{ stop_request }}</marquee
        >
      </th>
    </tr>
  </table>
  <table class="vnitrni_maly" id="vnitrni_maly_5">
    <tr>
      <th class="vnitrni_maly_sights">
        <marquee
          HEIGHT="100%"
          width="100%"
          behavior="scroll"
          direction="left"
          scrollamount="5"
          scrolldelay="20"
          id="vnitrni_maly5_sights0"
          >{{ stop_sights }}</marquee
        >
      </th>
    </tr>
  </table>
</template>

<script>
export default {
  name: "InfoInsideOneline",
  props: ["data", "stop_id"],
  computed: {
    stop() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["zastavka"];
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
    line() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["linka"];
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
    destination() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["smer_vnitrni"];
      } else {
        return "";
      }
    },
    stop_request() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["znameni"];
      } else {
        return "";
      }
    },
    stop_sights() {
      if (this.data[this.stop_id]) {
        return this.data[this.stop_id]["sights"];
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vnitrni_maly_linka {
  height: 25px;
  width: 55px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}

.vnitrni_maly_Tzastavka {
  height: 25px;
  width: 284px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}

.vnitrni_maly_cas {
  height: 25px;
  width: 100px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}

.vnitrni_maly {
  border: 1px solid black;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}

.vnitrni_maly_smer {
  height: 25px;
  width: 329px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
  text-transform: uppercase;
}

.vnitrni_maly_znameni {
  height: 25px;
  width: 388px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}

.vnitrni_maly_sights {
  height: 25px;
  width: 388px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}

.vnitrni_maly_zona {
  height: 25px;
  width: 225px;
  background-color: #8b0000;
  color: red;
  font-size: 20px;
}
</style>
