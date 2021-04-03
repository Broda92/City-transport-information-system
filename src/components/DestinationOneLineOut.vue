<template>
  <th class="celni_smer">{{ destination }}</th>
</template>

<script>
export default {
  name: "DestinationOneLineOut",
  props: ["destination"],
};
</script>

<style lang="scss" scoped>
.celni_smer {
  height: 50px;
  width: 350px;
  border: 1px solid black;
  background: none;
  color: #0dc958;
  font-size: 42px;
}
.celni_male {
  margin: 0px;
}
</style>
