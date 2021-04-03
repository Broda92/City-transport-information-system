<template>
  <th class="tvn_zast" style="color: white">{{ stop_request }}</th>
  <th class="tvn_zastavkax">{{ stop }}</th>
  <th class="tvn_zonax">{{ zone }}</th>
</template>

<script>
export default {
  name: "TV2Stop",
  props: ["data", "next", "stop_id"],
  computed: {
    stop_request() {
      if (this.data[this.stop_id + this.next]) {
        return this.data[this.stop_id + this.next]["znameni"];
      } else {
        return "";
      }
    },
    stop() {
      if (this.data[this.stop_id + this.next]) {
        return this.data[this.stop_id + this.next]["zastavka"];
      } else {
        return "";
      }
    },
    zone() {
      if (this.data[this.stop_id + this.next]) {
        return this.data[this.stop_id + this.next]["zona"];
      } else {
        return "";
      }
    },
    stop_info() {
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
.tvn_zonax {
  color: black;
  font-family: Arial;
  background-color: powderblue;
  text-align: center;
  font-size: 10px;
}

.tvn_zast {
  font-family: Arial;
  background-color: darkblue;
  text-align: center;
  padding-left: 10px;
}

.tvn_zastavkax {
  color: white;
  font-family: Arial;
  background-color: darkblue;
  text-align: left;
  font-size: 16px;
  height: 30px;
}
</style>
