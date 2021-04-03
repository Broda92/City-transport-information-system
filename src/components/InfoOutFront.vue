<template>
  <!--<div>{{ data }}</div>-->
  <table id="venku_celni">
    <tr>
      <line-out v-bind:line="line"></line-out>
      <destination-one-line-out
        v-bind:destination="destination"
      ></destination-one-line-out>
    </tr>
  </table>
</template>

<script>
import DestinationOneLineOut from "./DestinationOneLineOut.vue";
import LineOut from "./LineOut.vue";

export default {
  name: "InfoOutFront",
  components: {
    "line-out": LineOut,
    "destination-one-line-out": DestinationOneLineOut,
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
        return this.data[this.stop_id]["smer_celni"];
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#venku_celni {
  position: absolute;
  background-color: black;
  left: 5px;
  top: 5px;
  border: 2px solid black;
}
</style>
