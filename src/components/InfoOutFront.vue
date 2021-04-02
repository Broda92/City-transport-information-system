<template>
  <table id="venku_celni">
    <tr>
      <line-out linka="2"></line-out>
      <destination-one-line-out></destination-one-line-out>
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
  props: ["linka"],
  data() {
    let linka = this.linka;
    console.log(linka);
    return linka;
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
