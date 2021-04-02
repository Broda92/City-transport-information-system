<template>
  <br />
  <info-out-front linka="2"></info-out-front>
  <br />
  <info-out-back linka="3"></info-out-back>
  <br />
  <info-out-side linka="4"></info-out-side>
  <br />
  <info-inside-oneline linka="5"></info-inside-oneline>
  <br />
  <info-out-duty v-bind:kurz="kurz" v-bind:priznak="mode"></info-out-duty>
  <br />
  <info-inside-tv1 linka="6"></info-inside-tv1>
  <br />
  <info-inside-tv2 linka="8"></info-inside-tv2>
  <br />
  <info-inside-tp linka="9"></info-inside-tp>
  <br />
  <!--<input type="button" id="nastaveni" value="Nastavení" onclick="nastaveni(data)" onkeydown="key(event)" />-->
  <input type="button" id="dalsi" value="▼" onclick="dalsi()" onkeydown="key(event)" />
  <input
    type="button"
    id="konec"
    value="KONEC"
    onclick="konec()"
    onkeydown="key(event)"
  />
  <!--<input type="button" id="rucnihlaseni" value="RUČNÍ HLÁŠENÍ" onclick="rucni()" onkeydown="key(event)"/>-->

  <div id="PC">
    <input
      type="text"
      v-model="kurz"
      name="kurz"
      placeholder="kurz (pětimístné číslo LLLPP)"
    />
    <select v-model="mode" name="režim">
      <option
        v-for="option in mode_options"
        v-bind:key="option.value"
        v-bind:value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <select name="route">
      <option selected="selected">zvolte linku a směr</option>
    </select>
    <br />
    <select name="message">
      <option selected="selected">zvolte ruční hlášení</option>
    </select>
  </div>

  <br />
  <p id="tiraz">
    <b>
      Autor: Jan BRODSKÝ, Brno 2021. Optimalizováno pro prohlížeč Mozilla Firefox verze
      77.x
    </b>
  </p>
</template>

<script>
import InfoOutFront from "./InfoOutFront.vue";
import InfoOutBack from "./InfoOutBack.vue";
import InfoOutSide from "./InfoOutSide.vue";
import InfoInsideOneline from "./InfoInsideOneline.vue";
import InfoOutDuty from "./InfoOutDuty.vue";
import InfoInsideTV1 from "./InfoInsideTV1.vue";
import InfoInsideTV2 from "./InfoInsideTV2.vue";
import InfoInsideTP from "./InfoInsideTP.vue";

export default {
  name: "RIS_II",
  components: {
    "info-out-front": InfoOutFront,
    "info-out-back": InfoOutBack,
    "info-out-side": InfoOutSide,
    "info-inside-oneline": InfoInsideOneline,
    "info-out-duty": InfoOutDuty,
    "info-inside-tv1": InfoInsideTV1,
    "info-inside-tv2": InfoInsideTV2,
    "info-inside-tp": InfoInsideTP,
  },
  data() {
    return {
      kurz: "",
      mode: this.option,
      mode_options: [
        { text: "standardní režim", value: "" },
        { text: "bez přihlášeného řidiče (X)", value: "X" },
        { text: "řidič v zácviku (Z)", value: "Z" },
        { text: "odklon (K)", value: "K" },
        { text: "posilový spoj (P)", value: "P" },
        { text: "náhradní doprava (N)", value: "N" },
        { text: "odlišný cíl (C)", value: "C" },
      ],
    };
  },
};

// zastavka: nazev / zona / znameni / sights / linka / cil / polohaXY
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.black {
  color: black;
}

#tiraz {
  color: black;
  font-family: Arial;
  font-size: 9px;
  position: absolute;
  top: 680px;
}

#nastaveni {
  position: absolute;
  font-family: Arial;
  font-weight: bold;
  top: 635px;
  width: 100px;
  height: 50px;
  left: 50px;
  border: 1px solid black;
}

#dalsi {
  position: absolute;
  font-family: Arial;
  font-weight: bold;
  font-size: 30px;
  top: 630px;
  width: 60px;
  left: 600px;
  height: 50px;
  background-color: white;
  color: black;
  border: 1px solid black;
}

#konec {
  position: absolute;
  font-family: Arial;
  font-weight: bold;
  top: 630px;
  width: 65px;
  left: 680px;
  height: 50px;
  background-color: darkred;
  color: black;
  border: 1px solid black;
  text-align: center;
}

#rucnihlaseni {
  position: absolute;
  font-family: Arial;
  font-weight: bold;
  top: 635px;
  width: 150px;
  left: 450px;
  height: 50px;
  background-color: #ffcc00;
  color: black;
  border: 1px solid black;
}

#aku_zvuk {
  position: absolute;
  margin: 0px;
  top: 475px;
  left: 80px;
  background-color: blue;
  color: white;
  border: 1px solid black;
  width: 90%;
  height: 20px;
}

#aku_text {
  position: absolute;
  margin: 0px;
  top: 475px;
  left: 15px;
  background-color: none;
  color: black;
  width: 90px;
  text-align: left;
}

#DPMB {
  position: absolute;
  top: 280px;
  left: 50px;
  height: 50px;
}

#PC {
  position: absolute;
  top: 622px;
  left: 10px;
  height: 50px;
  background-color: grey;
  border: 1px black solid;
  padding: 5px;
  width: 550px;
}
</style>
