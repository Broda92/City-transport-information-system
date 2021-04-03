<template>
  <td class="tp_znamenix">{{ stop_request }}</td>
</template>

<script>
export default {
  name: "TPStopDemand",
  props: ["data", "next", "stop_id"],
  computed: {
    stop_request() {
      if (this.data[this.stop_id + this.next]) {
        return this.data[this.stop_id + this.next]["znameni"];
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tp_znamenix {
  text-align: center;
  height: 12px;
}
</style>
