var x = 0;
var barva = "#0DC958";
var kurz_format_normal = "color:orange; background-color:black;";
var kurz_format_inverse = "color:black; background-color:orange;";
var infopanel_format_normal = "color:"+barva+"; background-color:black;";
var infopanel_format_vozovna = "text-shadow:-1px 0 "+barva+", 0 1px "+barva+", 1px 0 "+barva+", 0 -1px "+barva+"; color: black; background-color:black;";
var infopanel_format_inverse = "color:black; background-color:"+barva+";";
var infopanel_format_inverse_border = "color:black; background-color:"+barva+";border:1px solid "+barva+";";
var data;
var rezijni_jizda = ["400","500","600","800","900"];

var data_upload = function() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    return data = JSON.parse(this.responseText);
	  }
	};
	xmlhttp.open("GET", "Linkospoje/MHD_Brno_Data.txt", true);
	xmlhttp.send(); 
}

data_upload();

function nastaveni(data) {
    kurz = prompt("Zadat kurz (pětimístné číslo (LLLPP_))\n+ možný příznak: C-odlišný cíl, K-odklon, N-náhradní doprava, P-posila, X-nepřihlášený řidič, Z-zácvik", "");
	kurz = kurz.split("");
	kurz_linka = [kurz[0], kurz[1], kurz[2]];
	kurz_por = [kurz[3], kurz[4]];
	kurz_priznak = kurz[5];
	kurz_linka = kurz_linka.join("");

	/*X = vůz jede bez přihlášeného řidiče, OK
    Z = ve voze je řidič v zácviku, OK
    K = vozidlo jede v režimu Odklon, OK
    P = vozidlo jede v režimu Posila, OK
    N = vozidlo jede v režimu Náhradní doprava, OK
    C = vozidlo má nastavený jiný cíl, než je cílová zastávka. OK
    */

	if (kurz_priznak) {
		kurz_priznak = kurz_priznak.toUpperCase();
		if (kurz_priznak == "Z") {
			styles("kurz_priznak",kurz_format_inverse);
		} else {
			styles("kurz_priznak",kurz_format_normal);
		}
		values("kurz_priznak",kurz_priznak);
	} else {
		values("kurz_priznak","");
	} 
	
	values("kurz_linka",kurz_linka);
    values("kurz_por",kurz_por.join("")); 
    nastaveni_trasy(data);  
};  

function nastaveni_trasy(data) {
	var trasy_seznam = [];
	for(var l in data) {
		trasy_seznam.push(JSON.stringify(l)+" - "+JSON.stringify(data[l][0]["linka"])+" směr "+JSON.stringify(data[l][data[l].length-1]["smer_vnitrni"]));
	}
	linka = prompt("Zadat linku (vnější označení). Možnosti (L>LLL<SP):\n\n"+trasy_seznam.join("\n"));
    smer = prompt("Zadat směr (zkratka). Možnosti (LLLL>S<P):\n\n"+trasy_seznam.join("\n"));
    prevlek = prompt("Zadat navazující linku (>0) nebo 0 (bez přejezdu). Možnosti (LLLLS>P):\n\n"+trasy_seznam.join("\n")); //pokud není 0, tak je převlek na trase
    linkospoj = "L"+linka.toUpperCase()+smer.toUpperCase()+prevlek.toUpperCase();
    trasa = data[linkospoj];
    jizda(trasa,0);
}

function jizda(trasa,x) {
    //nastavení proměnných    
    zastavka_akt = trasa[x];
    var trasa_linka = zastavka_akt["linka"];
    var trasa_linka_obr = zastavka_akt["linka_obr"];
    var trasa_smer = zastavka_akt["smer_celni"];
    var trasa_pres = zastavka_akt["pres"];
    var trasa_smer_bocni = zastavka_akt["smer_bocni"];
    var trasa_smer_vnitrni = zastavka_akt["smer_vnitrni"];
    var trasa_smer_tv = zastavka_akt["smer_tv"];
    var trasa_smer_tp = zastavka_akt["smer_tp"];    
    infopanel_format_akt = zastavka_akt;
    var zastavka_akt_coordLong = parseFloat(zastavka_akt["long"]);
    var zastavka_akt_coordLat = parseFloat(zastavka_akt["lat"]);
    zastavka_kon = trasa[trasa.length-1];  
    znameni_text = "Zastávka je na znamení - Request Stop - Bedarfshaltestelle";

    //nastavení času v RISu
    cas = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
    cas20 = new Date();
    cas20.setHours(20,0,0);
    cas20 = cas20.getHours()
    cas5 = new Date();
    cas5.setHours(5,0,0);
    cas5 = cas5.getHours();
    cash = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric"});
    var den = new Date();
    var dny = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"];
    var den = dny[ den.getDay() ];
    time = new Date();
    datum = time.getDate()+". "+(time.getMonth()+1)+". "+time.getFullYear();

    //nastavení speciálního formátování
    var formaty_vnejsi = ["format_celni_linka","format_celni","format_bocni_linka","format_pres","format_bocni_smer","format_zadni_linka"];
    var panely_vnejsi = ["celni_linka","celni_smer","bocni_linka","bocni_pres","bocni_smer","zadni_linka"];

    for (p = 0; p <= formaty_vnejsi.length-1; p++) {
    	if (infopanel_format_akt[formaty_vnejsi[p]] == "I") {
            styles(panely_vnejsi[p],infopanel_format_inverse_border);
        } else if (infopanel_format_akt[formaty_vnejsi[p]] == "V") {
            styles(panely_vnejsi[p],infopanel_format_vozovna);
        } else {
            styles(panely_vnejsi[p],infopanel_format_normal);
        } 
    }

    //defaultní nastavení komplet
    var panely_vnejsivnitrni = ["celni_linka","celni_smer","bocni_linka","bocni_pres","bocni_smer","zadni_linka",
    "vnitrni_maly2_linka","vnitrni_maly3_linka","vnitrni_maly4_znameni0","tv_linka","tvn_linka","tp_linka"];
    for (p = 0; p <= panely_vnejsivnitrni.length-1; p++) {
    	values(panely_vnejsivnitrni[p],"");
    }

    //nastavení linky - venku   
    var panely_linka = ["celni_linka","bocni_linka","zadni_linka"];
    for (p = 0; p <= panely_linka.length-1; p++) {
    	if (trasa_linka) {
    		values(panely_linka[p],trasa_linka);
    	} else {
    		values(panely_linka[p],"");
    	}
    	if (linka.length > 3) {
    	styles(panely_linka[p],"font-size: 22px");
    	}
    	if (zastavka_akt["linka_obr"] && zastavka_akt["linka_obr"].includes("↘")) {
    	styles(panely_linka[p],"font-size: 15px");
    	}
    	if (zastavka_akt["linka_obr"]) {
    	values(panely_linka[p],zastavka_akt["linka_obr"]);
    	}
    };
    if (zastavka_akt["linka_zadni"]) {
        values("zadni_linka",zastavka_akt["linka_zadni"]);
    }   
         
    //nastavení cíle - venku    
    values("bocni_smer",trasa_smer_bocni);

    //úprava čelní destinace podle kurzu (PNC)
    switch(kurz[kurz.length-1].toUpperCase()) {        
        case "P":            
            if (linkospoj == "L25JS0") {
                values("celni_smer",trasa_smer.replace("<br>PŘES STAROU OSADU"," ")+"<br>posilový spoj"); 
            } else {
            	values("celni_smer",trasa_smer.replace("<br>"," ")+"<br>posilový spoj");
            }
            break;
        case "N":            
            if (linkospoj == "L25JS0") {
                values("celni_smer",trasa_smer.replace("<br>PŘES STAROU OSADU"," ")+"<br>náhradní doprava"); 
            } else {
            	values("celni_smer",trasa_smer.replace("<br>"," ")+"<br>náhradní doprava"); 
            }
            break;
        default:
        	values("celni_smer",trasa_smer);
            break;
    }

    //nastavení cíle - venku (formát)
    if (document.getElementById("celni_smer").innerHTML.includes("<br>"))  {
        styles("celni_smer","font-size: 21px; vertical-align: center;");
    };
    
    if (rezijni_jizda.includes(linka)) {
        values("kurz_priznak","C");
    }

    //nastavení nácestné zastávky - venku
    if (trasa_pres) {
        values("bocni_pres",trasa_pres);
    } else {
        values("bocni_pres","");
    }

    //nastavení vnitřního panelu 0
    if (zastavka_akt["sights_sign"]) {
    	values("vnitrni_maly1_zastavka0","∏ "+zastavka_akt["zastavka"]+" "+zastavka_akt["sights_sign"]);
    } else {
    	values("vnitrni_maly1_zastavka0","∏ "+zastavka_akt["zastavka"]);
    }
    values("vnitrni_maly2_zona0","Zóna "+zastavka_akt["zona"]);
    values("vnitrni_maly3_zastavkak","► "+trasa_smer_vnitrni);

    //nastavení vnitřního panelu 1+2
    if (trasa_linka) {
    	values("vnitrni_maly2_linka",trasa_linka);
    	values("vnitrni_maly3_linka",trasa_linka);
    } else {
    	values("vnitrni_maly2_linka","");
    	values("vnitrni_maly3_linka","");
    }
    
    //nastavení času vnitřního panelu 1+2
    values("vnitrni_maly1_cas",cas);
    values("vnitrni_maly2_cas","čas "+cas);

    //nastavení vnitřního panelu 4
    if (zastavka_akt["sights"]) {
        values("vnitrni_maly5_sights0",zastavka_akt["sights"]);
    } else {
        values("vnitrni_maly5_sights0","");
    }
    

    //nastavení vnitřní - teploměr mapa
    styles("tp_mapa","background-color:black");
    if (!isNaN(zastavka_akt_coordLat) && !isNaN(zastavka_akt_coordLong)) {
        var stred = SMap.Coords.fromWGS84(zastavka_akt_coordLong, zastavka_akt_coordLat);
        var mapa = new SMap(JAK.gel("mapa"), stred, 14);
        mapa.addDefaultLayer(SMap.DEF_BASE).enable();
        var layer = new SMap.Layer.Marker();
        mapa.addLayer(layer);
        layer.enable();
        var options = {};
        var marker = new SMap.Marker(stred, "myMarker", options);
        layer.addMarker(marker);
    } else {
        styles("tp_mapa", "background-color:black");
    };

    //nastavení vnitřní - teploměr
    values("tp_zast_prakt","Aktuální/příští zastávka:");
    values("tp_konec_popis","Konečná zastávka");
    values("tp_znameni_popis","<img src='Images/Zvonek.png' height='15px'> ... na znamení");

    //vnitřní teploměr - linka+trasa
    if (trasa_linka) {
    	values("tp_linka",trasa_linka);
    } else {
    	values("tp_linka","");
    }
    
    values("tp_cas",cas);
    values("tp_den",den);
    values("tp_datum",datum);   

    //podmínka zastávek na znamení na čas
    var casZ = (cash >= cas20) || (cash < cas5);

    //vnitřní teploměr - aktuální zastávka
    values("tp_zastavka0",zastavka_akt["zastavka"]);
    znameni(zastavka_akt, "tp_zastavka0", zastavka_akt["zastavka"]+" <img src='Images/Zvonek.png' height='15'>", casZ, den);
    values("tp_zona0","Zóna: "+zastavka_akt["zona"]);

    //vnitřní teploměr - konečná zastávka
    values("tp_zastavkak",trasa_smer_tp);    
    
    for (j=1; j<=12; j++) {
    var zastavka_dalsi = trasa[x+j];
        if (j>0) {
            values("tp_zastavka"+String(j),"<font size='2'><b></b></font><br><font size='1'></font>");
        };
        if ((x+j) <= (trasa.length-1)) {
        	values("tp_zastavka"+String(j),"<font size='2'><b>"+zastavka_dalsi["zastavka"]+"</b></font><br><font size='1'>Zóna: "+zastavka_dalsi["zona"]+"</font>");
        };
    }

    //nastavení vnitřní - TV
    if (trasa_linka) {
    	values("tv_linka",trasa_linka);
    } else {
    	values("tv_linka","");
    }

    values("tv_zastavka0",zastavka_akt["zastavka"]);
    values("tv_zona0",zastavka_akt["zona"]);

    values("tv_cas",cas);
    values("tv_zastavkak",trasa_smer_tv);
    
    for (j=1; j<=3; j++) {
    var zastavka_dalsi = trasa[x+j];
        values("tv_zastavka"+String(j),"");
        values("tv_zona"+String(j),"");
        if ((x+j) <= (trasa.length-1)) {
            values("tv_zastavka"+String(j),zastavka_dalsi["zastavka"]);
            values("tv_zona"+String(j),zastavka_dalsi["zona"]);
        };
    }

    //nastavení vnitřní - TV-N + //nastavení zastávek na znamení - TV-N
    styles("tvn_info","background-color:darkred");
    values("tvn_info","");
    values("tvn_zastavkatext","zastávka<i> - stop</i>");
    values("tvn_zonatext","zóna");
    values("tvn_smertext","směr<i> - destination</i>");

    if (trasa_linka) {
    	values("tvn_linka",trasa_linka);
    } else {
    	values("tvn_linka","");
    }
    values("tvn_zastavka0",zastavka_akt["zastavka"]);
    values("tvn_zona0",zastavka_akt["zona"]);

    znameni(zastavka_akt, "tvn_zastavka0", zastavka_akt["zastavka"]+" <img src='Images/Zvonek_white.png' height='15'>", casZ, den);
    values("tvn_dendatum",den+"<br>"+datum);
    values("tvn_cas",cas);
    values("tvn_zastavkak",trasa_smer_tv);
    values("tvn_zonak",zastavka_kon["zona"]);
   
    for (j=1; j<=3; j++) {
    var zastavka_dalsi = trasa[x+j];
        values("tvn_zastavka"+String(j),"");
        values("tvn_zona"+String(j),"");
        if ((x+j) <= (trasa.length-1)) {
            values("tvn_zastavka"+String(j),zastavka_dalsi["zastavka"]);
            values("tvn_zona"+String(j),zastavka_dalsi["zona"]);
            znameni(zastavka_dalsi, "tvn_zastavka"+String(j), zastavka_dalsi["zastavka"]+" <img src='Images/Zvonek_white.png' height='15'>", casZ, den);            
        };
    }

    //nastavení zastávek na znamení - vnitřní panel malý
    values("vnitrni_maly4_znameni0","");
    znameni(zastavka_akt, "vnitrni_maly4_znameni0", znameni_text, casZ, den);

    //nastavení zastávek na znamení - TV
    for (j=0; j<4; j++) {    
    	var zastavka_dalsi = trasa[x+j];    
        if (zastavka_dalsi != undefined) {        	
        	values("tv_linka"+j,"▲");
        	values("tv_zastavkaz"+j,"");
            znameni(zastavka_dalsi, "tv_linka"+j, "<img src='Images/!.png' height='15' width='20'>", casZ, den);
            znameni(zastavka_dalsi, "tv_zastavkaz"+j, znameni_text, casZ, den);           
        };            
    }    

    //nastavení dalších zastávek na znamení - teploměr    
    for (j=1; j<=12; j++) {
    var zastavka_dalsi = trasa[x+j];
    	values("tp_znameni"+j,"");
        if (j<=12 && zastavka_dalsi != undefined) {
            znameni_inverse(zastavka_dalsi, "tp_znameni"+j, "<img src='Images/Kruh.png' height='15'>", casZ, den);
            znameni(zastavka_dalsi, "tp_znameni"+j, "<img src='Images/Zvonek.png' height='15'>", casZ, den);            
        }            
    }
        
    //upozornění na změnu zóny nebo konečnou zastávku
    var zastavka_pristi = trasa[x+1];
    if ((zastavka_pristi != null) && (zastavka_pristi["zona"] != zastavka_akt["zona"])) {
    	var poslednivzone = "Poslední zastávka v zóně "+zastavka_akt["zona"]+" - Last stop in the zone "+zastavka_akt["zona"]+" - Letzte Haltestelle in Zone "+zastavka_akt["zona"];
        values("vnitrni_maly4_znameni0",poslednivzone);
        values("tv_zastavkaz0",poslednivzone);
    };
    if ((zastavka_akt == zastavka_kon) && ((rezijni_jizda.includes(linka) == false)&& (linka!="999"))) {
    	var konecna = "Konečná zastávka - Terminus - Endstation";
        values("vnitrni_maly4_znameni0",konecna);
        values("tv_zastavkaz0",konecna);
    };

    //vnější panely před konečnou zastávkou
    if ((zastavka_akt == zastavka_kon) && ((rezijni_jizda.includes(linka)) || (linka=="998") || (linka=="999")) == false) {
        // dodat var panely_vnejsi
        styles("celni_smer",infopanel_format_normal);
        styles("celni_smer","font-size: 19px; vertical-align: middle");
        values("celni_smer","NENASTUPUJTE<br>DO NOT GET ON - NICHT EINSTEIGEN");
        styles("bocni_pres",infopanel_format_inverse);
        values("bocni_pres","NENASTUPUJTE");
        styles("bocni_smer",infopanel_format_normal);
        values("bocni_smer","<marquee HEIGHT='100%' width='100%'  behavior=scroll direction=left scrollamount='5' scrolldelay='10'>DO NOT GET ON &emsp;&emsp;&emsp;&emsp; NICHT EINSTEIGEN</marquee>");
        styles("celni_linka",infopanel_format_normal);
        styles("bocni_linka",infopanel_format_normal);
        values("celni_linka","");
        values("bocni_linka","");
        styles("zadni_linka",infopanel_format_normal);
        styles("zadni_linka","font-size: 19px; vertical-align: middle");       
        values("zadni_linka","NENAST");
    };
};

function konec() { 
		location.reload();
};

function dalsi() { 
	x++;
	if (zastavka_akt == zastavka_kon) {
		konec();
	};
	jizda(trasa,x);
};

function rucni() {
	var xmlhttp_hlaseni = new XMLHttpRequest();
	var messages;
	xmlhttp_hlaseni.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    messages = JSON.parse(this.responseText);
	}
	};
	xmlhttp_hlaseni.open("GET", "Messages/MHD_Brno_Messages.txt", true);
    xmlhttp_hlaseni.send(); 

    setTimeout(function(){
    	var messages_seznam = [];
    	for (var i = 0; i <= messages[Object.keys(messages)[0]].length-1; i++) {
    		messages_seznam.push(messages[Object.keys(messages)[0]][i]['cislo']+": "+messages[Object.keys(messages)[0]][i]['message_nazev']);
    	}

    	var hlaska = prompt("Zadat číslo ručního hlášení - možnosti:\n"+messages_seznam.join("\n"));
    	rucni_hlaska(messages, hlaska);
    },500);
};

function rucni_hlaska(messages, hlaska) {
	var hlaska_text = messages[Object.keys(messages)[0]][hlaska];	
	if (hlaska_text) {
		var hlaska_maly = [];
		var hlaska_jazyky = ["maly_cz","maly_en","maly_de"];
		for (h = 0; h <= hlaska_jazyky.length-1; h++) {
			if (hlaska_text[hlaska_jazyky[h]]) {
			hlaska_maly.push(hlaska_text[hlaska_jazyky[h]]);
			}
		}
		values("vnitrni_maly4_znameni0",hlaska_maly.join(" - "));
		if (hlaska_text['tvn_cz_message'] && hlaska_text['tvn_en_message']) {
			styles("tvn_info",hlaska_text['tvn_format']);
			values("tvn_info","<b><big>"+hlaska_text['tvn_cz_nadpis']+"</b> <i>"+
			hlaska_text['tvn_en_nadpis']+"</big></i><br><b>"+hlaska_text['tvn_cz_message']+"</b><br><i><small><small>"+hlaska_text['tvn_en_message']+"</i>");
		} else {
			styles("tvn_info","background-color: darkred");
			values("tvn_info", "");
		}
		if (hlaska == 12) {
		    	styles("kurz_priznak",kurz_format_normal);
		        values("kurz_priznak", "K");
		        values("kurz_linka", kurz_linka);
		    };
	};
};

function prestup(zastavka_prestup, html_prestup, html_prestup_indikator) {
	if (zastavka_prestup['prestup'] != undefined && zastavka_prestup['prestup'].includes("S")) {
        values(html_prestup, html_prestup_indikator);
    }
}

function znameni(zastavka_znameni, html_znameni, html_znameni_indikator, casZ, den) {
    if ((zastavka_znameni["znameni"] == "z") ||
                ((zastavka_znameni["znameni"] == "o") && casZ) ||
                ((zastavka_znameni["znameni"] == "w") && (casZ || ((den == "sobota")||(den == "neděle"))))) {
    	values(html_znameni,html_znameni_indikator);
	}
}

function znameni_inverse(zastavka_znameni_inv, html_znameni_inv, html_znameni_indikator_inv, casZ_inv, den_inv) {
    if ((zastavka_znameni_inv["znameni"] == "s") || ((zastavka_znameni_inv["znameni"] == "o") && !casZ_inv) ||
                ((zastavka_znameni_inv["znameni"] == "w") && (!casZ_inv || ((den_inv == "sobota")||(den_inv == "neděle"))))) {
    	values(html_znameni_inv,html_znameni_indikator_inv);
	}
}

function values(html_id, value) {
	document.getElementById(html_id).innerHTML = value;
}

function styles(html_id, style) {
	document.getElementById(html_id).style = style;
}

function key(event) {
	var e = event.key;
	if (e == "ArrowDown") {
		dalsi();
	} else if (e == "n") {
		nastaveni(data);
	} else if (e == "k") {
		konec();
	} else if (e == "r") {
		rucni();
	} 
}