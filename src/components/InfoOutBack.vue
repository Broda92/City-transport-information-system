<template>
  <table id="venku_zadni">
    <tr>
      <line-out></line-out>
    </tr>
  </table>
</template>

<script>
import LineOut from "./LineOut.vue";

export default {
  name: "InfoOutBack",
  components: {
    "line-out": LineOut,
  },
};
</script>

<style lang="scss" scoped>
#venku_zadni {
  position: absolute;
  background-color: black;
  left: 490px;
  top: 5px;
  border: 2px solid black;
}
</style>
