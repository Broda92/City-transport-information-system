<template>
  <table class="vnitrni_maly" id="vnitrni_maly_1">
    <tr>
      <th class="vnitrni_maly_Tzastavka" id="vnitrni_maly1_zastavka0">
        T - Moravské náměstí
      </th>
      <th class="vnitrni_maly_cas" id="vnitrni_maly1_cas">21:45</th>
    </tr>
  </table>
  <table class="vnitrni_maly" id="vnitrni_maly_2">
    <tr>
      <th class="vnitrni_maly_linka" id="vnitrni_maly2_linka">1</th>
      <th class="vnitrni_maly_zona" id="vnitrni_maly2_zona0">Zóna 100</th>
      <th class="vnitrni_maly_cas" id="vnitrni_maly2_cas">21:45</th>
    </tr>
  </table>
  <table class="vnitrni_maly" id="vnitrni_maly_3">
    <tr>
      <th class="vnitrni_maly_linka" id="vnitrni_maly3_linka">1</th>
      <th class="vnitrni_maly_smer" id="vnitrni_maly3_zastavkak">ŘEČKOVICE</th>
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
          >Zastávka na znamení</marquee
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
          >Rektorát MU</marquee
        >
      </th>
    </tr>
  </table>
</template>

<script>
export default {
  name: "InfoInsideOneline",
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
