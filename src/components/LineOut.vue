<template>
  <th class="venku_linka">{{ line }}</th>
</template>

<script>
export default {
  name: "LineOut",
  props: ["line"],
  data() {
    return this.line;
  },
};
</script>

<style lang="scss" scoped>
.venku_linka {
  height: 50px;
  width: 75px;
  border: 1px solid black;
  background-color: black;
  color: #0dc958;
  font-size: 45px;
}
</style>
