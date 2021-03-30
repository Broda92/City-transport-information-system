<template>
  <table id="venku_celni">
    <tr>
      <line-out></line-out>
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
