<template>
		<th class="tvn_zast" style="color:white">▼</th>
		<th class="tvn_zastavkax">Moravské náměstí</th>
		<th class="tvn_zonax">100</th>
</template>

<script>
export default {
  name: "TV2Stop",
};
</script>

<style lang="scss" scoped>

.tvn_zonax {
	color:black;
	font-family:Arial;
	background-color: powderblue;
	text-align: center;
	font-size: 10px;
}

.tvn_zast {
	font-family:Arial;
	background-color: darkblue;
	text-align: center;
	padding-left: 10px;
}

.tvn_zastavkax {
	color:white;
	font-family:Arial;
	background-color: darkblue;
	text-align: left;
	font-size: 16px;
	height: 30px;
}

</style>