<template>
  <tr>
    <th class="tv_linkax" style="font-size: 10px">{{ stop_request }}</th>
    <th class="tv_zastavkax">{{ stop }}</th>
    <th class="tv_zonacasx">{{ zone }}</th>
  </tr>
  <tr>
    <th class="tv_linkaxz" style="font-size: 4px"></th>
    <th colspan="2" class="tv_zastavkazx">{{ stop_info }}</th>
  </tr>
</template>

<script>
export default {
  name: "TV1Stop",
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
.tv_zonacasx {
  color: white;
  font-family: Arial;
  background-color: darkgray;
}

.tv_zonacas {
  color: black;
  font-family: Arial;
  background-color: yellow;
  width: 55px;
}

.tv_linkax {
  color: red;
  font-family: Arial;
  background-color: darkgray;
  height: 25px;
}

.tv_zastavkax {
  color: white;
  font-family: Arial;
  background-color: darkgray;
  text-align: left;
  padding-left: 10px;
}

.tv_zastavkazx {
  color: white;
  font-family: Arial;
  background-color: darkgray;
  text-align: left;
  padding-left: 10px;
  font-size: 7px;
  color: red;
  height: 10px;
  text-transform: uppercase;
}
</style>
