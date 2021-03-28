<template>
  <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>MHD Brno</title>
	<link rel="stylesheet" type="text/css" href="MHD_Brno-CSS.css">
	<!--<script src="https://api.mapy.cz/loader.js"></script>-->
	<!--<script>Loader.load()</script>-->
	<!--<script src="MHD_Brno-JS.js" type="text/javascript"></script>-->

</head>
<body>
<br>
<table id="venku_celni">
  <tr>
    <th class="venku_linka" id="celni_linka"> </th>
    <th class="celni_smer" id="celni_smer"> </th>
  </tr>
</table>

<br>
<table id="venku_zadni">
  <tr>
    <th class="venku_linka" id="zadni_linka"> </th>
  </tr>
</table>

<br>
<table id="venku_bocni">
  <tr>
    <th rowspan=2 class="venku_linka" id="bocni_linka"> </th>
    <th class="bocni_pres" id="bocni_pres"> </th>
  </tr>
  <tr>
  <th class="bocni_smer" id="bocni_smer"> </th>
  </tr>
</table>
<br>
<table class="vnitrni_maly" id="vnitrni_maly_1">
	<tr>
		<th class="vnitrni_maly_Tzastavka" id="vnitrni_maly1_zastavka0"> </th>
		<th class="vnitrni_maly_cas" id="vnitrni_maly1_cas"> </th>
	</tr>
</table>
<table class="vnitrni_maly" id="vnitrni_maly_2">
	<tr>
		<th class="vnitrni_maly_linka" id="vnitrni_maly2_linka"> </th>
		<th class="vnitrni_maly_zona" id="vnitrni_maly2_zona0"> </th>
		<th class="vnitrni_maly_cas" id="vnitrni_maly2_cas"> </th>
	</tr>
</table>
<table class="vnitrni_maly" id="vnitrni_maly_3">
	<tr>
		<th class="vnitrni_maly_linka" id="vnitrni_maly3_linka"> </th>
		<th class="vnitrni_maly_smer" id="vnitrni_maly3_zastavkak"> </th>
	</tr>
</table>
<table class="vnitrni_maly" id="vnitrni_maly_4">
	<tr>
		<th class="vnitrni_maly_znameni" > 
		<marquee HEIGHT="100%" width="100%"  behavior=scroll direction=left scrollamount="5" scrolldelay="20" id="vnitrni_maly4_znameni0"> </marquee>
	</th>
	</tr>
</table>
<table class="vnitrni_maly" id="vnitrni_maly_5">
	<tr>
		<th class="vnitrni_maly_sights">
		<marquee HEIGHT="100%" width="100%"  behavior=scroll direction=left scrollamount="5" scrolldelay="20" id="vnitrni_maly5_sights0"> </marquee>
		</th>
	</tr>
</table>
<br>
<table>
    <tr >
        <th class="kurz_zacvik" id="kurz_zacvik" colspan=2></th>
    </tr>
	<tr id="kurzovka">
		<th class="kurz_priznak" id="kurz_priznak"></th>
		<th class="kurz_linka" id="kurz_linka"> </th>
		<th class="kurz_por" id="kurz_por"> </th>
	</tr>
</table>
<br>
<table id="vnitrni_tv">
    <tr><th class="tv_okrajhd" colspan=5></th></tr>
    <tr>
        <th class="tv_okrajlp" rowspan=9></th>
        <th id="tv_linka" class="tv_linka"></th>
        <th class="tv_zastavkak" id="tv_zastavkak"> </th>
        <th class="tv_zonacas" id="tv_cas"> </th>
        <th class="tv_okrajlp" rowspan=9></th>
    </tr>
    <tr>
      <th class="tv_linkax" id="tv_linka3" style="font-size:10px">▲</th>
      <th class="tv_zastavkax" id="tv_zastavka3"> </th>
      <th class="tv_zonacasx" id="tv_zona3"> </th>
    </tr>
    <tr>
        <th class="tv_linkaxz" style="font-size:4px"></th>
        <th colspan=2 class="tv_zastavkazx" id="tv_zastavkaz3"> </th>
    </tr>
    <tr>
      <th class="tv_linkax" id="tv_linka2" style="font-size:15px">▲</th>
      <th class="tv_zastavkax" id="tv_zastavka2"> </th>
      <th class="tv_zonacasx" id="tv_zona2"> </th>
    </tr>
    <tr>
        <th class="tv_linkaxz" style="font-size:4px"></th>
        <th colspan=2 class="tv_zastavkazx" id="tv_zastavkaz2"></th>
    </tr>
    <tr>
      <th class="tv_linkax" id="tv_linka1" style="font-size:20px">▲</th>
      <th class="tv_zastavkax" id="tv_zastavka1"> </th>
      <th class="tv_zonacasx" id="tv_zona1"> </th>
    </tr>
    <tr>
      <th class="tv_linkaxz" style="font-size:4px"></th>
      <th colspan=2 class="tv_zastavkazx" id="tv_zastavkaz1"></th>
    </tr>
	<tr>
		<th class="tv_linkax" id="tv_linka0" style="font-size:25px">▲</th>
		<th class="tv_zastavka" id="tv_zastavka0"></th>
		<th class="tv_zonacas" id="tv_zona0"></th>
  </tr>
  <tr>
    <th class="tv_linkaxz" style="font-size:4px"></th>
    <th colspan=2 class="tv_zastavkaz" id="tv_zastavkaz0"></th>
  </tr>
  <tr>
    <th class="tv_okrajhd" colspan=5></th>
  </tr>
</table>

<table id="vnitrni_tvn">
	<tr><th class="tvn_okrajhd" colspan=7></th></tr>
	<tr>
		<th class="tvn_okrajlp" rowspan=7></th>
		<th class="tvn_linka" id="tvn_linka" rowspan="2" style="background-color: red; width: 50px; height: 50px"></th>
		<th style="background-color: darkblue; width: 15px"></th>
		<th id="tvn_zastavkatext" style="background-color: darkblue; color:white; font-size: 10px; text-align: left; height: 15px; width: 140px"></th>
		<th id="tvn_zonatext" class="tvn_zonax" style="font-size: 10px; width: 25px"></th>
		<th class="tvn_info" id="tvn_info" rowspan="9" style="width: 190px; height: 100%"> </th>
		<th class="tvn_okrajlp" rowspan=7></th>
	</tr>
	<tr>
		<th class="tvn_zast" style="color:white">▼</th>
		<th class="tvn_zastavkax" id="tvn_zastavka0"> </th>
		<th class="tvn_zonax" id="tvn_zona0"> </th>
	</tr>
	<tr>
		<th class="tvn_linkacas"> </th>
		<th class="tvn_zast" style="color:powderblue">▼</th>
		<th class="tvn_zastavkax" id="tvn_zastavka1"> </th>
		<th class="tvn_zonax" id="tvn_zona1"> </th>
	</tr>
	<tr>
		<th class="tvn_linkacas" id="tvn_dendatum" style="font-size: 10px"> </th>
		<th class="tvn_zast" style="color:cornflowerblue">▼</th>
		<th class="tvn_zastavkax" id="tvn_zastavka2"> </th>
		<th class="tvn_zonax" id="tvn_zona2"> </th>
	</tr>
	<tr>
		<th class="tvn_linkacas" id="tvn_cas" style="font-size: 20px"> </th>
		<th class="tvn_zast" style="color:royalblue">▼</th>
		<th class="tvn_zastavkax" id="tvn_zastavka3"> </th>
		<th class="tvn_zonax" id="tvn_zona3"> </th>
	</tr>
	<tr>
		<th rowspan="2" id="tvn_Brno" class="tvn_Brno" style="background-color: darkblue"></th>
		<th style="background-color: white"></th>
		<th id="tvn_smertext" style="background-color: white; font-size: 10px; height: 15px; text-align: left;"></th>
		<th class="tvn_zonax"> </th>
	</tr>
	<tr>
		
		<th style="background-color: white"></th>
		<th class="tvn_zastavkak" id="tvn_zastavkak"> </th>
		<th class="tvn_zonax" id="tvn_zonak"> </th>
	</tr>
	<tr><th class="tvn_okrajhd" colspan=7></th></tr>
</table>

<table id="vnitrni_tp" style="border-spacing: 0px">
	<tr>
		<td id="tp_linka"  rowspan="2"></td>
		<td></td>
		<td id="tp_den" colspan="2"></td>
		<td id="tp_datum" colspan="2"></td>
		<td colspan="4"></td>
		<td id="tp_konec_popis" colspan="4"></td>
		<td id="tp_mapa" rowspan="9"><div id="mapa" style="width:250px; height:250px;"></div></td>
	</tr>
	<tr>
		<td></td>
		<td id="tp_cas" colspan="4"></td>
		<td colspan="4"></td>
		<td id="tp_zastavkak" class="tp_zastavka_konec" colspan="4"></td>
	</tr>
	<tr>
		<td colspan="2" height="20px"></td>
		<td id="tp_zastavka1" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka2" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka3" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka4" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka5" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka6" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka7" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka8" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka9" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka10" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka11" class="tp_zastavkax" rowspan="5"></td>
		<td id="tp_zastavka12" class="tp_zastavkax" rowspan="5"></td>
	</tr>
	<tr>
		<td id="tp_zast_prakt" colspan="2"></td>
	</tr>
	<tr>
		<td id="tp_zastavka0" colspan="2"></td>
	</tr>
	<tr>
		<td  id="tp_zona0" class="tp_zona" colspan="2"></td>
	</tr>
	<tr>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td colspan="2"></td>
		<td id="tp_znameni1" class="tp_znamenix"></td>
		<td id="tp_znameni2" class="tp_znamenix"></td>
		<td id="tp_znameni3" class="tp_znamenix"></td>
		<td id="tp_znameni4" class="tp_znamenix"></td>
		<td id="tp_znameni5" class="tp_znamenix"></td>
		<td id="tp_znameni6" class="tp_znamenix"></td>
		<td id="tp_znameni7" class="tp_znamenix"></td>
		<td id="tp_znameni8" class="tp_znamenix"></td>
		<td id="tp_znameni9" class="tp_znamenix"></td>
		<td id="tp_znameni10" class="tp_znamenix"></td>
		<td id="tp_znameni11" class="tp_znamenix"></td>
		<td id="tp_znameni12" class="tp_znamenix"></td>
	</tr>
	<tr>
		<td colspan="12"></td>
		<td colspan="2" class="tp_znameni" id="tp_znameni_popis"></td>
	</tr>

</table>
<br>
<input type="button" id="nastaveni" value="Nastavení" onclick="nastaveni(data)" onkeydown="key(event)" />
<input type="button" id="konec" value="KONEC" onclick="konec()" onkeydown="key(event)"/>
<input type="button" id="dalsi" value="▼" onclick="dalsi()" onkeydown="key(event)"/>
<input type="button" id="rucnihlaseni" value="RUČNÍ HLÁŠENÍ" onclick="rucni()" onkeydown="key(event)"/>
<br>
<p id="tiraz"><b>Autor: Jan BRODSKÝ, Brno 2020. Optimalizováno pro prohlížeč Mozilla Firefox verze 77.x</b></p>

</body>
</html>

<!-- 
    přepis do frameworků (React, > jQuery, SASS...)??
    Zpracování Excelu místo JSON? - SheetJS??
    Opravit mapu (render 1x)??

    X = vůz jede bez přihlášeného řidiče,
	Z = ve voze je řidič v zácviku,
	K = vozidlo jede v režimu Odklon,
	P = vozidlo jede v režimu Posila,
	N = vozidlo jede v režimu Náhradní doprava,
	C = vozidlo má nastavený jiný cíl, než je cílová zastávka.-->
</template>

<script>
export default {
  name: 'RIS_II',
  props: {
    //msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.venku_linka {
	height: 50px;
	width: 75px;
    border: 1px solid black;
    background-color: black;
    color: #0DC958;
    font-size: 45px;
}

.celni_smer {
	height: 50px;
	width: 350px;
    border: 1px solid black;
    background: none;
    color: #0DC958;
    font-size: 42px;
}

.bocni_smer {
	height: 25px;
	width: 250px;
    border: 1px solid black;
    background-color: black;
    color: #0DC958;
    font-size: 20px;
}

.bocni_pres {
	height: 25px;
	width: 250px;
    border: 1px solid black;
    background-color: black;
    color: #0DC958;
    font-size: 20px;
}

.vnitrni_maly_linka {
	height: 25px;
	width: 55px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

.vnitrni_maly_Tzastavka {
	height: 25px;
	width: 284px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

.vnitrni_maly_cas {
	height: 25px;
	width: 100px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

#kurzovka{
	position: absolute;
	left: 300px;
	top: 275px;
	border: 0px solid black;
	background-color: black;
}

#kurz_zacvik{
	position: absolute;
	left: 450px;
	top: 125px;
	width: 97px;
	height: 21px;
	font-size: 17px;
	vertical-align: middle;
}

.kurz_priznak {
	height: 35px;
	width: 25px;
	font-size: 20px;
	color: orange;
	text-align: center;
	vertical-align: sub;
	padding: 0px;
}

.kurz_linka {
	height: 35px;
	width: 25px;
	font-size: 20px;
	color: orange;
	text-align: right;
	vertical-align: sub;
	padding: 0px;
}

.kurz_por {
	font-size: 25px;
	height: 35px;
	width: 40px;
	color: orange;
	text-align: left;
	vertical-align: sub;
	padding: 0px;
}

#vnitrni_tv {
	position: absolute;
	left: 470px;
	top: 100px;
	height: 150px;
	width: 390px;
    border: 1px solid black;
    font-size: 20px;
    background-color: darkgray;
    border-collapse: collapse;
}

.tv_okrajhd {
	height: 10px;
    background-color: black;
}

.tv_okrajlp {
	width: 10px;
    background-color: black;
}

#vnitrni_tvn {
	position: absolute;
	left: 880px;
	top: 100px;
	height: 150px;
	width: 570px;
    border: 1px solid black;
    font-size: 20px;
    background-color: darkgray;
    border-collapse: collapse;
}

.tvn_okrajhd {
	height: 10px;
    background-color: black;
}

.tvn_okrajlp {
	width: 10px;
    background-color: black;
}

.tvn_linka {
	color:black;
	font-family:Arial;
	text-transform: uppercase;
}

.tvn_linkax {
	color:red;
	font-family:Arial;
	background-color: darkgray;
	height: 25px;
}

.tvn_zastavka {
	color:black;
	font-family:Arial;
	background-color: yellow;
	text-align: left;
	padding-left: 10px;
}

.tvn_zastavkak {
	color:black;
	font-family:Arial;
	background-color: white;
	text-align: left;
	padding-left: 3px;
	text-transform: uppercase;
	font-size: 16px;
	height: 20px;
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

.tvn_linkacas {
	color:white;
	font-family:Arial;
	background-color: darkblue;
	text-align: center;
}

.tvn_zonax {
	color:black;
	font-family:Arial;
	background-color: powderblue;
	text-align: center;
	font-size: 10px;
}

.tvn_zastavkazx {
	color:white;
	font-family:Arial;
	background-color: darkgray;
	text-align: left;
	font-size: 7px;
	color: red;
	height: 10px;
	text-transform: uppercase;
}

.tvn_zastavkaz {
	color:white;
	font-family:Arial;
	background-color: yellow;
	text-align: left;
	font-size: 7px;
	color: red;
	height: 10px;
	text-transform: uppercase;
}

.tvn_zonacas {
	color:black;
	font-family:Arial;
	background-color: yellow;
	width: 55px;
}

.tvn_zonacasx {
	color:white;
	font-family:Arial;
	background-color: darkgray;
}

.tvn_zonacasz {
	color:white;
	font-family:Arial;
	background-color: yellow;
}

.tvn_info {
	background-color: darkred;
	font-family: Calibri;
	text-align: left;
	padding-left: 45px;
	font-weight: normal;
}

#vnitrni_tp {
	position: absolute;
	left: 5px;
	top: 360px;
	height: 40px;
    border: 3px solid black;
    font-size: 15px;
    background-color: darkblue;
	color:white;
}

.black {
    color: black;
}

.vnitrni_maly {
    border: 1px solid black;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

.vnitrni_maly_smer {
	height: 25px;
	width: 329px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
    text-transform: uppercase;
}

.vnitrni_maly_znameni {
	height: 25px;
	width: 388px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

.vnitrni_maly_sights {
	height: 25px;
	width: 388px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

.vnitrni_maly_zona {
	height: 25px;
	width: 225px;
    background-color: #8B0000;
    color: red;
    font-size: 20px;
}

#venku_celni {
	position: absolute;
	background-color: black;
	left: 5px;
	top: 5px;
	border: 2px solid black;
}

#venku_zadni {
	position: absolute;
	background-color: black;
	left: 490px;
	top: 5px;
	border: 2px solid black;
}

#venku_bocni {
	position: absolute;
	background-color: black;
	left: 650px;
	top: 5px;
	border: 2px solid black;
}

#tiraz {
	color:black;
	font-family:Arial;
	font-size:9px;
	position: absolute;
	top: 680px;
}

.tv_linka {
	color:black;
	font-family:Arial;
	background-color: orange;
	height: 25px;
	width: 45px;
	text-transform: uppercase;
}

.tv_linkax {
	color:red;
	font-family:Arial;
	background-color: darkgray;
	height: 25px;
}

.tv_zastavka {
	color:black;
	font-family:Arial;
	background-color: yellow;
	text-align: left;
	padding-left: 10px;
}

.tv_zastavkak {
	color:black;
	font-family:Arial;
	background-color: orange;
	text-align: left;
	padding-left: 3px;
	text-transform: uppercase;
}

.tv_zastavkax {
	color:white;
	font-family:Arial;
	background-color: darkgray;
	text-align: left;
	padding-left: 10px;
}

.tv_zastavkazx {
	color:white;
	font-family:Arial;
	background-color: darkgray;
	text-align: left;
	padding-left: 10px;
	font-size: 7px;
	color: red;
	height: 10px;
	text-transform: uppercase;
}

.tv_zastavkaz {
	color:white;
	font-family:Arial;
	background-color: yellow;
	text-align: left;
	padding-left: 10px;
	font-size: 7px;
	color: red;
	height: 10px;
	text-transform: uppercase;
}

.tv_zonacas {
	color:black;
	font-family:Arial;
	background-color: yellow;
	width: 55px;
}

.tv_zonacasx {
	color:white;
	font-family:Arial;
	background-color: darkgray;
}
.tv_zonacasz {
	color:white;
	font-family:Arial;
	background-color: yellow;
}

#tp_linka {
	color: darkblue;
	font-family:Arial;
	background-color: black;
	height: 30px;
	width: 80px;
	text-align: center;
	background-color: white;
	font-size: 40px;
	font-weight: bold;
}

.tp_linkax {
	color:darkblue;
	font-family:Arial;
	background-color: white;
	height: 20px;
}

#tp_cas {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width: 40px;
	height: 25px;
	text-align: center;
	font-weight: bold;
	font-size: 20px;
}

#tp_datum {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width: 40px;
	text-align: center;
	font-weight: bold;
	font-size: 17px;
}

#tp_den {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width: 40px;
	text-align: center;
	font-weight: bold;
	font-size: 17px;
}

#tp_zastavka0 {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width:190px;
	height: 65px;
	font-size: 20px;
	font-weight: bold;
}

#tp_zast_prakt {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width:180px;
	height: 25px;
}

.tp_zona {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width:190px;
	height: 20px;
}

#tp_znameni {
	color: #00BFFF;
	font-family:Arial;
	background-color: black;
	text-transform: uppercase;
}

.tp_znamenix {
	text-align: center;
	height: 12px;
}

.tp_zastavkax {
	color: white;
	font-family:Arial;
	width:85px;
	height: 125px;
	font-size: 7pt;
	transform: rotate(300deg);
	text-align: left;
}

#tp_zastavkak {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width:180px;
	text-transform: uppercase;
	text-align: right;
	font-size: 20px;
	font-weight: bold;
}

#tp_konec_popis {
	color: darkblue;
	font-family:Arial;
	background-color: white;
	width:180px;
	height: 25px;
	text-align: right;
	font-size: 15px;
}

#tp_mapa {
	background-color: black;
	width: 250px;
	height: 250px;
	text-align: center;
}

#nastaveni {
	position: absolute;
	font-family:Arial;
	font-weight: bold;
	top:635px;
	width:100px;
	height:50px;
	left:50px;
    border: 1px solid black;
}

#dalsi {
	position: absolute;
	font-family:Arial;
	font-weight: bold;
	font-size: 30px;
	top:635px;
	width:60px;
	left:315px;
	height:50px;
	background-color: white;
	color: black;
	border: 1px solid black;
}

#konec {
	position: absolute;
	font-family:Arial;
	font-weight: bold;
	top:635px;
	width:65px;
	left:200px;
	height:50px;
	background-color: darkred;
	color: black;
	border: 1px solid black;
	text-align: center;
}

#rucnihlaseni {
	position: absolute;
	font-family:Arial;
	font-weight: bold;
	top:635px;
	width:150px;
	left:450px;
	height:50px;
	background-color: #ffcc00;
	color: black;
	border: 1px solid black;
}

.celni_male {
    margin: 0px;
}


#aku_zvuk{
	position: absolute;
    margin: 0px;
    top: 475px;
    left: 80px;
    background-color: blue;
    color: white;
    border: 1px solid black;
    width: 90%;
    height: 20px;
}

#aku_text{
	position: absolute;
    margin: 0px;
    top: 475px;
    left: 15px;
    background-color: none;
    color: black;
    width: 90px;
    text-align: left;
}

#DPMB{
	position: absolute;
    top: 280px;
    left: 50px;
    height: 50px;
}

/*table,th,td {
	border: 1px solid black;
}*/

</style>
