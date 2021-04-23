<template>
  <table>
    <tr id="kurzovka">
      <th class="kurz_priznak" id="kurz_priznak">{{ mode }}</th>
      <th class="kurz_linka" id="kurz_linka">{{ kurz_linka }}</th>
      <th class="kurz_por" id="kurz_por">{{ kurz_poradi }}</th>
    </tr>
  </table>
</template>

<script>
export default {
  name: "InfoOutDuty",
  data() {},
  computed: {
    kurz_linka() {
      return [this.kurz[0], this.kurz[1], this.kurz[2]].join("");
    },
    kurz_poradi() {
      return [this.kurz[3], this.kurz[4]].join("");
    },
    kurz() {
      return this.$store.state.kurz;
    },
    mode() {
      return this.$store.state.mode;
    },
  },
};
</script>

<style lang="scss" scoped>
#kurzovka {
  position: absolute;
  left: 300px;
  top: 275px;
  border: 0px solid black;
  background-color: black;
}

.kurz_priznak {
  height: 35px;
  width: 25px;
  font-size: 20px;
  color: orange;
  text-align: center;
  vertical-align: sub;
  padding: 0px;
}

.kurz_linka {
  height: 35px;
  width: 25px;
  font-size: 20px;
  color: orange;
  text-align: right;
  vertical-align: sub;
  padding: 0px;
}

.kurz_por {
  font-size: 25px;
  height: 35px;
  width: 40px;
  color: orange;
  text-align: left;
  vertical-align: sub;
  padding: 0px;
}
</style>
