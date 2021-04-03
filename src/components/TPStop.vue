<template>
  <td id="tp_zastavka1" class="tp_zastavkax" rowspan="5" v-html="stop"></td>
</template>

<script>
export default {
  name: "TPStop",
  props: ["data", "next", "stop_id"],
  computed: {
    stop() {
      if (this.data[this.stop_id + this.next]) {
        return (
          this.data[this.stop_id + this.next]["zastavka"] +
          "<br>Zóna: " +
          this.data[this.stop_id + this.next]["zona"]
        );
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tp_zastavkax {
  color: white;
  font-family: Arial;
  width: 85px;
  height: 125px;
  font-size: 7pt;
  transform: rotate(300deg);
  text-align: left;
}
</style>
