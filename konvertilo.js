
var vera = true;
var falsa = false;

var alfabetoj = "ABCĈDEFGĜHĤIJĴKLMNOPQRSŜTUŬVWXYZabcĉdefgĝhĥijĵklmnopqrsŝtuŭvwxyz";
var vokaloj = "AEIOUaeiou";

var tiparaGrandeco = 12;

var ordinaj = [
	'nuloa',
	'unua',
	'dua',
	'tria',
	'kvara',
	'kvina',
	'sesa',
	'sepa',
	'oka',
	'naŭa',
	'deka',
	'dek-unua',
	'dek-dua',
	'dek-tria',
	'dek-kvara',
	'dek-kvina',
	'dek-sesa',
	'dek-sepa',
	'dek-oka',
	'dek-naŭa',
	'dudeka',
	'dudek-unua',
	'dudek-dua',
	'dudek-tria',
	'dudek-kvara',
	'dudek-kvina',
	'dudek-sesa',
	'dudek-sepa',
	'dudek-oka',
	'dudek-naŭa',
	'trideka',
	'tridek-unua',
];

var monatoj = [
	'nuloa',
	'januaro',
	'februaro',
	'marto',
	'aprilo',
	'majo',
	'junio',
	'julio',
	'aŭgusto',
	'septembro',
	'oktobro',
	'novembro',
	'decembro',
];

onload = function() {
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';

	var enhavo = document.getElementById('enhavo').value;
	document.getElementById('enhavo').value = hodiaux() + "\r\r" + enhavo; 
}

function hodiaux() {
	var rezulto = 'Hodiaŭ estas la ';

	var nun = new Date();
	var monato = nun.getMonth() + 1;
	var tago = nun.getDate();

	rezulto += ordinaj[tago] + ' de ';
	rezulto += monatoj[monato] + '.';

	return rezulto;
}

function xSistemoKontrolita() {
	var x_sistemo = document.getElementById('x_sistemo').checked;

	if (x_sistemo) {
		document.getElementById('pre_x_sistemo').checked = false;
	}
}

function preXSistemoKontrolita() {
	var pre_x_sistemo = document.getElementById('pre_x_sistemo').checked;

	if (pre_x_sistemo) {
		document.getElementById('x_sistemo').checked = false;
	}
}

function konvertuAlEsperanto() {
	var enhavo = document.getElementById('enhavo').value;

	var anstatauigo = document.getElementById('anstatauigo').checked;
	var grekaj = document.getElementById('grekaj').checked;
	var h_sistemo = document.getElementById('h_sistemo').checked;
	var x_sistemo = document.getElementById('x_sistemo').checked;
	var pre_x_sistemo = document.getElementById('pre_x_sistemo').checked;
	var q_sistemo = document.getElementById('q_sistemo').checked;
	var w_sistemo = document.getElementById('w_sistemo').checked;
	var y_sistemo = document.getElementById('y_sistemo').checked;
	var kareto_sistemo = document.getElementById('kareto_sistemo').checked;
	var pre_kareto_sistemo = document.getElementById('pre_kareto_sistemo').checked;
	var apostrophe_sistemo = document.getElementById('apostrophe_sistemo').checked;
	var pre_apostrophe_sistemo = document.getElementById('pre_apostrophe_sistemo').checked;
	var angla_stila_sistemo = document.getElementById('angla_stila_sistemo').checked;
	var malregula_sistemo = document.getElementById('malregula_sistemo').checked;

	if (h_sistemo) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ');
		enhavo = enhavo.replace(/g[hH]/g,'ĝ');
		enhavo = enhavo.replace(/h[hH]/g,'ĥ');
		enhavo = enhavo.replace(/j[hH]/g,'ĵ');
		enhavo = enhavo.replace(/s[hH]/g,'ŝ');
		enhavo = enhavo.replace(/C[hH]/g,'Ĉ');
		enhavo = enhavo.replace(/G[hH]/g,'Ĝ');
		enhavo = enhavo.replace(/H[hH]/g,'Ĥ');
		enhavo = enhavo.replace(/J[hH]/g,'Ĵ');
		enhavo = enhavo.replace(/S[hH]/g,'Ŝ');
	}

	if (x_sistemo) {
		enhavo = enhavo.replace(/c[xX]/g,'ĉ');
		enhavo = enhavo.replace(/g[xX]/g,'ĝ');
		enhavo = enhavo.replace(/h[xX]/g,'ĥ');
		enhavo = enhavo.replace(/j[xX]/g,'ĵ');
		enhavo = enhavo.replace(/s[xX]/g,'ŝ');
		enhavo = enhavo.replace(/[uvw][xX]/g,'ŭ');
		enhavo = enhavo.replace(/C[xX]/g,'Ĉ');
		enhavo = enhavo.replace(/G[xX]/g,'Ĝ');
		enhavo = enhavo.replace(/H[xX]/g,'Ĥ');
		enhavo = enhavo.replace(/J[xX]/g,'Ĵ');
		enhavo = enhavo.replace(/S[xX]/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW][xX]/g,'Ŭ');
	}

	if (kareto_sistemo) {
		enhavo = enhavo.replace(/c\^/g,'ĉ');
		enhavo = enhavo.replace(/g\^/g,'ĝ');
		enhavo = enhavo.replace(/h\^/g,'ĥ');
		enhavo = enhavo.replace(/j\^/g,'ĵ');
		enhavo = enhavo.replace(/s\^/g,'ŝ');
		enhavo = enhavo.replace(/[uvw][\^\~]/g,'ŭ');
		enhavo = enhavo.replace(/C\^/g,'Ĉ');
		enhavo = enhavo.replace(/G\^/g,'Ĝ');
		enhavo = enhavo.replace(/H\^/g,'Ĥ');
		enhavo = enhavo.replace(/J\^/g,'Ĵ');
		enhavo = enhavo.replace(/S\^/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW][\^\~]/g,'Ŭ');
	}

	if (anstatauigo) {
		enhavo = enhavo.replace(/w/g,'ŭ');
		enhavo = enhavo.replace(/W/g,'Ŭ');
	}

	if (grekaj) {
		enhavo = enhavo.replace(/ξ/g,'ĉ');
		enhavo = enhavo.replace(/γ/g,'ĝ');
		enhavo = enhavo.replace(/φ/g,'ĥ');
		enhavo = enhavo.replace(/θ/g,'ĵ');
		enhavo = enhavo.replace(/σ/g,'ŝ');
		enhavo = enhavo.replace(/υ/g,'ŭ');
		enhavo = enhavo.replace(/Ξ/g,'Ĉ');
		enhavo = enhavo.replace(/Γ/g,'Ĝ');
		enhavo = enhavo.replace(/Φ/g,'Ĥ');
		enhavo = enhavo.replace(/Θ/g,'Ĵ');
		enhavo = enhavo.replace(/Σ/g,'Ŝ');
		enhavo = enhavo.replace(/Υ/g,'Ŭ');
	}

	if (pre_x_sistemo) {
		enhavo = enhavo.replace(/x[cC]/g,'ĉ');
		enhavo = enhavo.replace(/x[gG]/g,'ĝ');
		enhavo = enhavo.replace(/x[hH]/g,'ĥ');
		enhavo = enhavo.replace(/x[jJ]/g,'ĵ');
		enhavo = enhavo.replace(/x[sS]/g,'ŝ');
		enhavo = enhavo.replace(/x[uvwUVW]/g,'ŭ');
		enhavo = enhavo.replace(/X[cC]/g,'Ĉ');
		enhavo = enhavo.replace(/X[gG]/g,'Ĝ');
		enhavo = enhavo.replace(/X[hH]/g,'Ĥ');
		enhavo = enhavo.replace(/X[jJ]/g,'Ĵ');
		enhavo = enhavo.replace(/X[sS]/g,'Ŝ');
		enhavo = enhavo.replace(/X[uvwUVW]/g,'Ŭ');
	}

	if (q_sistemo) {
		enhavo = enhavo.replace(/c[qQ]/g,'ĉ');
		enhavo = enhavo.replace(/g[qQ]/g,'ĝ');
		enhavo = enhavo.replace(/h[qQ]/g,'ĥ');
		enhavo = enhavo.replace(/j[qQ]/g,'ĵ');
		enhavo = enhavo.replace(/s[qQ]/g,'ŝ');
		enhavo = enhavo.replace(/[uvw][qQ]/g,'ŭ');
		enhavo = enhavo.replace(/C[qQ]/g,'Ĉ');
		enhavo = enhavo.replace(/G[qQ]/g,'Ĝ');
		enhavo = enhavo.replace(/H[qQ]/g,'Ĥ');
		enhavo = enhavo.replace(/J[qQ]/g,'Ĵ');
		enhavo = enhavo.replace(/S[qQ]/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW][qQ]/g,'Ŭ');
	}

	if (w_sistemo) {
		enhavo = enhavo.replace(/c[wW]/g,'ĉ');
		enhavo = enhavo.replace(/g[wW]/g,'ĝ');
		enhavo = enhavo.replace(/h[wW]/g,'ĥ');
		enhavo = enhavo.replace(/j[wW]/g,'ĵ');
		enhavo = enhavo.replace(/s[wW]/g,'ŝ');
		enhavo = enhavo.replace(/[uv][wW]/g,'ŭ');
		enhavo = enhavo.replace(/C[wW]/g,'Ĉ');
		enhavo = enhavo.replace(/G[wW]/g,'Ĝ');
		enhavo = enhavo.replace(/H[wW]/g,'Ĥ');
		enhavo = enhavo.replace(/J[wW]/g,'Ĵ');
		enhavo = enhavo.replace(/S[wW]/g,'Ŝ');
		enhavo = enhavo.replace(/[UV][wW]/g,'Ŭ');
	}

	if (y_sistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ');
		enhavo = enhavo.replace(/g[yY]/g,'ĝ');
		enhavo = enhavo.replace(/h[yY]/g,'ĥ');
		enhavo = enhavo.replace(/j[yY]/g,'ĵ');
		enhavo = enhavo.replace(/s[yY]/g,'ŝ');
		enhavo = enhavo.replace(/[uvw][yY]/g,'ŭ');
		enhavo = enhavo.replace(/C[yY]/g,'Ĉ');
		enhavo = enhavo.replace(/G[yY]/g,'Ĝ');
		enhavo = enhavo.replace(/H[yY]/g,'Ĥ');
		enhavo = enhavo.replace(/J[yY]/g,'Ĵ');
		enhavo = enhavo.replace(/S[yY]/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW][yY]/g,'Ŭ');
	}

	if (pre_kareto_sistemo) {
		enhavo = enhavo.replace(/\^c/g,'ĉ');
		enhavo = enhavo.replace(/\^g/g,'ĝ');
		enhavo = enhavo.replace(/\^h/g,'ĥ');
		enhavo = enhavo.replace(/\^j/g,'ĵ');
		enhavo = enhavo.replace(/\^s/g,'ŝ');
		enhavo = enhavo.replace(/[\^\~][uvw]/g,'ŭ');
		enhavo = enhavo.replace(/\^C/g,'Ĉ');
		enhavo = enhavo.replace(/\^G/g,'Ĝ');
		enhavo = enhavo.replace(/\^H/g,'Ĥ');
		enhavo = enhavo.replace(/\^J/g,'Ĵ');
		enhavo = enhavo.replace(/\^S/g,'Ŝ');
		enhavo = enhavo.replace(/[\^\~][UVW]/g,'Ŭ');
	}

	if (apostrophe_sistemo) {
		enhavo = enhavo.replace(/c\'/g,'ĉ');
		enhavo = enhavo.replace(/g\'/g,'ĝ');
		enhavo = enhavo.replace(/h\'/g,'ĥ');
		enhavo = enhavo.replace(/j\'/g,'ĵ');
		enhavo = enhavo.replace(/s\'/g,'ŝ');
		enhavo = enhavo.replace(/[uvw]\'/g,'ŭ');
		enhavo = enhavo.replace(/C\'/g,'Ĉ');
		enhavo = enhavo.replace(/G\'/g,'Ĝ');
		enhavo = enhavo.replace(/H\'/g,'Ĥ');
		enhavo = enhavo.replace(/J\'/g,'Ĵ');
		enhavo = enhavo.replace(/S\'/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW]\'/g,'Ŭ');
	}

	if (pre_apostrophe_sistemo) {
		enhavo = enhavo.replace(/\'c/g,'ĉ');
		enhavo = enhavo.replace(/\'g/g,'ĝ');
		enhavo = enhavo.replace(/\'h/g,'ĥ');
		enhavo = enhavo.replace(/\'j/g,'ĵ');
		enhavo = enhavo.replace(/\'s/g,'ŝ');
		enhavo = enhavo.replace(/\'[uvw]/g,'ŭ');
		enhavo = enhavo.replace(/\'C/g,'Ĉ');
		enhavo = enhavo.replace(/\'G/g,'Ĝ');
		enhavo = enhavo.replace(/\'H/g,'Ĥ');
		enhavo = enhavo.replace(/\'J/g,'Ĵ');
		enhavo = enhavo.replace(/\'S/g,'Ŝ');
		enhavo = enhavo.replace(/\'[UVW]/g,'Ŭ');
	}

	if (angla_stila_sistemo) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ');
		enhavo = enhavo.replace(/t[sS]/g,'c');
		enhavo = enhavo.replace(/d[gG]/g,'ĝ');
		enhavo = enhavo.replace(/k[hH]/g,'ĥ');
		enhavo = enhavo.replace(/j/g,'ĵ');
		enhavo = enhavo.replace(/y/g,'j');
		enhavo = enhavo.replace(/s[hH]/g,'ŝ');
		enhavo = enhavo.replace(/w/g,'ŭ');
		enhavo = enhavo.replace(/C[hH]/g,'Ĉ');
		enhavo = enhavo.replace(/T[sS]/g,'C');
		enhavo = enhavo.replace(/D[gG]/g,'Ĝ');
		enhavo = enhavo.replace(/K[hH]/g,'Ĥ');
		enhavo = enhavo.replace(/J/g,'Ĵ');
		enhavo = enhavo.replace(/Y/g,'J');
		enhavo = enhavo.replace(/S[hH]/g,'Ŝ');
		enhavo = enhavo.replace(/W/g,'Ŭ');
	}

	if (malregula_sistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ');
		enhavo = enhavo.replace(/x[gG]/g,'ĝ');
		enhavo = enhavo.replace(/q[hH]/g,'ĥ');
		enhavo = enhavo.replace(/x[jJ]/g,'ĵ');
		enhavo = enhavo.replace(/s[yY]/g,'ŝ');
		enhavo = enhavo.replace(/w/g,'ŭ');
		enhavo = enhavo.replace(/C[yY]/g,'Ĉ');
		enhavo = enhavo.replace(/X[gG]/g,'Ĝ');
		enhavo = enhavo.replace(/Q[hH]/g,'Ĥ');
		enhavo = enhavo.replace(/X[jJ]/g,'Ĵ');
		enhavo = enhavo.replace(/S[yY]/g,'Ŝ');
		enhavo = enhavo.replace(/W/g,'Ŭ');
	}

	document.getElementById('enhavo').value = enhavo;
}

function konvertuAlAscii() {
	var enhavo = document.getElementById('enhavo').value;

	var anstatauigo = document.getElementById('anstatauigo').checked;
	var grekaj = document.getElementById('grekaj').checked;
	var h_sistemo = document.getElementById('h_sistemo').checked;
	var x_sistemo = document.getElementById('x_sistemo').checked;
	var pre_x_sistemo = document.getElementById('pre_x_sistemo').checked;
	var q_sistemo = document.getElementById('q_sistemo').checked;
	var w_sistemo = document.getElementById('w_sistemo').checked;
	var y_sistemo = document.getElementById('y_sistemo').checked;
	var kareto_sistemo = document.getElementById('kareto_sistemo').checked;
	var pre_kareto_sistemo = document.getElementById('pre_kareto_sistemo').checked;
	var apostrophe_sistemo = document.getElementById('apostrophe_sistemo').checked;
	var pre_apostrophe_sistemo = document.getElementById('pre_apostrophe_sistemo').checked;
	var angla_stila_sistemo = document.getElementById('angla_stila_sistemo').checked;
	var malregula_sistemo = document.getElementById('malregula_sistemo').checked;

	if (h_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'ch');
		enhavo = enhavo.replace(/ĝ/g,'gh');
		enhavo = enhavo.replace(/ĥ/g,'hh');
		enhavo = enhavo.replace(/ĵ/g,'jh');
		enhavo = enhavo.replace(/ŝ/g,'sh');
		enhavo = enhavo.replace(/Ĉ/g,'Ch');
		enhavo = enhavo.replace(/Ĝ/g,'Gh');
		enhavo = enhavo.replace(/Ĥ/g,'Hh');
		enhavo = enhavo.replace(/Ĵ/g,'Jh');
		enhavo = enhavo.replace(/Ŝ/g,'Sh');
	}

	if (x_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cx');
		enhavo = enhavo.replace(/ĝ/g,'gx');
		enhavo = enhavo.replace(/ĥ/g,'hx');
		enhavo = enhavo.replace(/ĵ/g,'jx');
		enhavo = enhavo.replace(/ŝ/g,'sx');
		enhavo = enhavo.replace(/ŭ/g,'ux');
		enhavo = enhavo.replace(/Ĉ/g,'Cx');
		enhavo = enhavo.replace(/Ĝ/g,'Gx');
		enhavo = enhavo.replace(/Ĥ/g,'Hx');
		enhavo = enhavo.replace(/Ĵ/g,'Jx');
		enhavo = enhavo.replace(/Ŝ/g,'Sx');
		enhavo = enhavo.replace(/Ŭ/g,'Ux');
	}

	if (kareto_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c^');
		enhavo = enhavo.replace(/ĝ/g,'g^');
		enhavo = enhavo.replace(/ĥ/g,'h^');
		enhavo = enhavo.replace(/ĵ/g,'j^');
		enhavo = enhavo.replace(/ŝ/g,'s^');
		enhavo = enhavo.replace(/ŭ/g,'u~');
		enhavo = enhavo.replace(/Ĉ/g,'C^');
		enhavo = enhavo.replace(/Ĝ/g,'G^');
		enhavo = enhavo.replace(/Ĥ/g,'H^');
		enhavo = enhavo.replace(/Ĵ/g,'J^');
		enhavo = enhavo.replace(/Ŝ/g,'S^');
		enhavo = enhavo.replace(/Ŭ/g,'U~');
	}

	if (anstatauigo) {
		enhavo = enhavo.replace(/ŭ/g,'w');
		enhavo = enhavo.replace(/Ŭ/g,'W');
	}

	if (grekaj) {
		enhavo = enhavo.replace(/ĉ/g,'ξ');
		enhavo = enhavo.replace(/ĝ/g,'γ');
		enhavo = enhavo.replace(/ĥ/g,'φ');
		enhavo = enhavo.replace(/ĵ/g,'θ');
		enhavo = enhavo.replace(/ŝ/g,'σ');
		enhavo = enhavo.replace(/ŭ/g,'υ');
		enhavo = enhavo.replace(/Ĉ/g,'Ξ');
		enhavo = enhavo.replace(/Ĝ/g,'Γ');
		enhavo = enhavo.replace(/Ĥ/g,'Φ');
		enhavo = enhavo.replace(/Ĵ/g,'Θ');
		enhavo = enhavo.replace(/Ŝ/g,'Σ');
		enhavo = enhavo.replace(/Ŭ/g,'Υ');
	}

	if (q_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cq');
		enhavo = enhavo.replace(/ĝ/g,'gq');
		enhavo = enhavo.replace(/ĥ/g,'hq');
		enhavo = enhavo.replace(/ĵ/g,'jq');
		enhavo = enhavo.replace(/ŝ/g,'sq');
		enhavo = enhavo.replace(/ŭ/g,'uq');
		enhavo = enhavo.replace(/Ĉ/g,'Cq');
		enhavo = enhavo.replace(/Ĝ/g,'Gq');
		enhavo = enhavo.replace(/Ĥ/g,'Hq');
		enhavo = enhavo.replace(/Ĵ/g,'Jq');
		enhavo = enhavo.replace(/Ŝ/g,'Sq');
		enhavo = enhavo.replace(/Ŭ/g,'Uq');
	}

	if (pre_x_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'xc');
		enhavo = enhavo.replace(/ĝ/g,'xg');
		enhavo = enhavo.replace(/ĥ/g,'xh');
		enhavo = enhavo.replace(/ĵ/g,'xj');
		enhavo = enhavo.replace(/ŝ/g,'xs');
		enhavo = enhavo.replace(/ŭ/g,'xu');
		enhavo = enhavo.replace(/Ĉ/g,'Xc');
		enhavo = enhavo.replace(/Ĝ/g,'Xg');
		enhavo = enhavo.replace(/Ĥ/g,'Xh');
		enhavo = enhavo.replace(/Ĵ/g,'Xj');
		enhavo = enhavo.replace(/Ŝ/g,'Xs');
		enhavo = enhavo.replace(/Ŭ/g,'Xu');
	}

	if (w_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cw');
		enhavo = enhavo.replace(/ĝ/g,'gw');
		enhavo = enhavo.replace(/ĥ/g,'hw');
		enhavo = enhavo.replace(/ĵ/g,'jw');
		enhavo = enhavo.replace(/ŝ/g,'sw');
		enhavo = enhavo.replace(/ŭ/g,'uw');
		enhavo = enhavo.replace(/Ĉ/g,'Cw');
		enhavo = enhavo.replace(/Ĝ/g,'Gw');
		enhavo = enhavo.replace(/Ĥ/g,'Hw');
		enhavo = enhavo.replace(/Ĵ/g,'Jw');
		enhavo = enhavo.replace(/Ŝ/g,'Sw');
		enhavo = enhavo.replace(/Ŭ/g,'Uw');
	}

	if (y_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cy');
		enhavo = enhavo.replace(/ĝ/g,'gy');
		enhavo = enhavo.replace(/ĥ/g,'hy');
		enhavo = enhavo.replace(/ĵ/g,'jy');
		enhavo = enhavo.replace(/ŝ/g,'sy');
		enhavo = enhavo.replace(/ŭ/g,'uy');
		enhavo = enhavo.replace(/Ĉ/g,'Cy');
		enhavo = enhavo.replace(/Ĝ/g,'Gy');
		enhavo = enhavo.replace(/Ĥ/g,'Hy');
		enhavo = enhavo.replace(/Ĵ/g,'Jy');
		enhavo = enhavo.replace(/Ŝ/g,'Sy');
		enhavo = enhavo.replace(/Ŭ/g,'Uy');
	}

	if (pre_kareto_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'^c');
		enhavo = enhavo.replace(/ĝ/g,'^g');
		enhavo = enhavo.replace(/ĥ/g,'^h');
		enhavo = enhavo.replace(/ĵ/g,'^j');
		enhavo = enhavo.replace(/ŝ/g,'^s');
		enhavo = enhavo.replace(/ŭ/g,'~u');
		enhavo = enhavo.replace(/Ĉ/g,'^C');
		enhavo = enhavo.replace(/Ĝ/g,'^G');
		enhavo = enhavo.replace(/Ĥ/g,'^H');
		enhavo = enhavo.replace(/Ĵ/g,'^J');
		enhavo = enhavo.replace(/Ŝ/g,'^S');
		enhavo = enhavo.replace(/Ŭ/g,'~U');
	}

	if (apostrophe_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c\'');
		enhavo = enhavo.replace(/ĝ/g,'g\'');
		enhavo = enhavo.replace(/ĥ/g,'h\'');
		enhavo = enhavo.replace(/ĵ/g,'j\'');
		enhavo = enhavo.replace(/ŝ/g,'s\'');
		enhavo = enhavo.replace(/ŭ/g,'u\'');
		enhavo = enhavo.replace(/Ĉ/g,'C\'');
		enhavo = enhavo.replace(/Ĝ/g,'G\'');
		enhavo = enhavo.replace(/Ĥ/g,'H\'');
		enhavo = enhavo.replace(/Ĵ/g,'J\'');
		enhavo = enhavo.replace(/Ŝ/g,'S\'');
		enhavo = enhavo.replace(/Ŭ/g,'U\'');
	}

	if (pre_apostrophe_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'\'c');
		enhavo = enhavo.replace(/ĝ/g,'\'g');
		enhavo = enhavo.replace(/ĥ/g,'\'h');
		enhavo = enhavo.replace(/ĵ/g,'\'j');
		enhavo = enhavo.replace(/ŝ/g,'\'s');
		enhavo = enhavo.replace(/ŭ/g,'\'u');
		enhavo = enhavo.replace(/Ĉ/g,'\'C');
		enhavo = enhavo.replace(/Ĝ/g,'\'G');
		enhavo = enhavo.replace(/Ĥ/g,'\'H');
		enhavo = enhavo.replace(/Ĵ/g,'\'J');
		enhavo = enhavo.replace(/Ŝ/g,'\'S');
		enhavo = enhavo.replace(/Ŭ/g,'\'U');
	}

	if (angla_stila_sistemo) {
		enhavo = enhavo.replace(/c/g,'ts');
		enhavo = enhavo.replace(/ĉ/g,'ch');
		enhavo = enhavo.replace(/ĝ/g,'dg');
		enhavo = enhavo.replace(/ĥ/g,'kh');
		enhavo = enhavo.replace(/j/g,'y');
		enhavo = enhavo.replace(/ĵ/g,'j');
		enhavo = enhavo.replace(/ŝ/g,'sh');
		enhavo = enhavo.replace(/ŭ/g,'w');
		enhavo = enhavo.replace(/C/g,'Ts');
		enhavo = enhavo.replace(/Ĉ/g,'Ch');
		enhavo = enhavo.replace(/Ĝ/g,'Dg');
		enhavo = enhavo.replace(/Ĥ/g,'Kh');
		enhavo = enhavo.replace(/J/g,'Y');
		enhavo = enhavo.replace(/Ĵ/g,'J');
		enhavo = enhavo.replace(/Ŝ/g,'Sh');
		enhavo = enhavo.replace(/Ŭ/g,'W');
	}

	if (malregula_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cy');
		enhavo = enhavo.replace(/ĝ/g,'xg');
		enhavo = enhavo.replace(/ĥ/g,'qh');
		enhavo = enhavo.replace(/ĵ/g,'xj');
		enhavo = enhavo.replace(/ŝ/g,'sy');
		enhavo = enhavo.replace(/ŭ/g,'w');
		enhavo = enhavo.replace(/Ĉ/g,'Cy');
		enhavo = enhavo.replace(/Ĝ/g,'Xg');
		enhavo = enhavo.replace(/Ĥ/g,'Qh');
		enhavo = enhavo.replace(/Ĵ/g,'Xj');
		enhavo = enhavo.replace(/Ŝ/g,'Sy');
		enhavo = enhavo.replace(/Ŭ/g,'W');
	}

	document.getElementById('enhavo').value = enhavo;
}

function aldonuStreketonPostAkcyento(vorto) {
	var flago = falsa;
	var streketon = '-';
	var konsonantoj = 0;

	for (var i = vorto.length - 1; i >= 0; i--) {
		if (vokaloj.indexOf(vorto.charAt(i)) >= 0) {
			if (flago) {
				if (konsonantoj < 2) {
					i++;
					var antawe = vorto.slice(0, i);
					var poste = vorto.slice(i);
					return antawe + streketon + poste;
				} else {
					return vorto;
				}
			} else {
				flago = vera;
			}
			konsonantoj = 0;
		} else {
			konsonantoj++;
		}
	}
	return vorto;
}

function katakanigo() {
	var enhavo = document.getElementById('enhavo').value;
	var rezulto = "";

	enhavo = enhavo.replace(/\-/g,'');

	for (var i = 0; i < enhavo.length; i++) {
		var vorto = "";
		var karaktero = enhavo.charAt(i);
		if (alfabetoj.indexOf(karaktero) >= 0) {
			while (i < enhavo.length && alfabetoj.indexOf(enhavo.charAt(i)) >= 0) {
				vorto += enhavo.charAt(i);
				i++;
			}
			i--;
			rezulto += aldonuStreketonPostAkcyento(vorto);
		} else {
			rezulto += karaktero;
		}
	}
	enhavo = rezulto;

	enhavo = enhavo.replace(/[Bb][Aa]/g,'バ');
	enhavo = enhavo.replace(/[Bb][Ii]/g,'ビ');
	enhavo = enhavo.replace(/[Bb][Uu]/g,'ブ');
	enhavo = enhavo.replace(/[Bb][Ee]/g,'ベ');
	enhavo = enhavo.replace(/[Bb][Oo]/g,'ボ');
	enhavo = enhavo.replace(/[Bb]/g,'ㇷ゙');

	enhavo = enhavo.replace(/[Cc][Aa]/g,'ツァ');
	enhavo = enhavo.replace(/[Cc][Ii]/g,'ツィ');
	enhavo = enhavo.replace(/[Cc][Uu]/g,'ツ');
	enhavo = enhavo.replace(/[Cc][Ee]/g,'ツェ');
	enhavo = enhavo.replace(/[Cc][Oo]/g,'ツォ');
	enhavo = enhavo.replace(/[Cc]/g,'ッ');

	enhavo = enhavo.replace(/[Ĉĉ][Aa]/g,'チャ');
	enhavo = enhavo.replace(/[Ĉĉ][Ii]/g,'チ');
	enhavo = enhavo.replace(/[Ĉĉ][Uu]/g,'チュ');
	enhavo = enhavo.replace(/[Ĉĉ][Ee]/g,'セ゚');
	enhavo = enhavo.replace(/[Ĉĉ][Oo]/g,'チョ');
	enhavo = enhavo.replace(/[Ĉĉ]/g,'ッ');

	enhavo = enhavo.replace(/[Dd][Aa]/g,'ダ');
	enhavo = enhavo.replace(/[Dd][Ii]/g,'ディ');
	enhavo = enhavo.replace(/[Dd][Uu]/g,'ドゥ');
	enhavo = enhavo.replace(/[Dd][Ee]/g,'デ');
	enhavo = enhavo.replace(/[Dd][Oo]/g,'ド');
	enhavo = enhavo.replace(/[Dd]/g,'ㇳ゙');

	enhavo = enhavo.replace(/[Ff][Aa]/g,'ファ');
	enhavo = enhavo.replace(/[Ff][Ii]/g,'フィ');
	enhavo = enhavo.replace(/[Ff][Uu]/g,'フ');
	enhavo = enhavo.replace(/[Ff][Ee]/g,'フェ');
	enhavo = enhavo.replace(/[Ff][Oo]/g,'フォ');
	enhavo = enhavo.replace(/[Ff]/g,'ㇷ');

	enhavo = enhavo.replace(/[Gg][Aa]/g,'ガ');
	enhavo = enhavo.replace(/[Gg][Ii]/g,'ギ');
	enhavo = enhavo.replace(/[Gg][Uu]/g,'グ');
	enhavo = enhavo.replace(/[Gg][Ee]/g,'ゲ');
	enhavo = enhavo.replace(/[Gg][Oo]/g,'ゴ');
	enhavo = enhavo.replace(/[Gg]/g,'ㇰ゙');

	enhavo = enhavo.replace(/[Ĝĝ][Aa]/g,'ヂャ');
	enhavo = enhavo.replace(/[Ĝĝ][Ii]/g,'ヂ');
	enhavo = enhavo.replace(/[Ĝĝ][Uu]/g,'ヂュ');
	enhavo = enhavo.replace(/[Ĝĝ][Ee]/g,'ヂェ');
	enhavo = enhavo.replace(/[Ĝĝ][Oo]/g,'ヂョ');
	enhavo = enhavo.replace(/[Ĝĝ]/g,'ㇱ゙');

	enhavo = enhavo.replace(/[Hh][Aa]/g,'ハ');
	enhavo = enhavo.replace(/[Hh][Ii]/g,'ヒ');
	enhavo = enhavo.replace(/[Hh][Uu]/g,'ホゥ');
	enhavo = enhavo.replace(/[Hh][Ee]/g,'ヘ');
	enhavo = enhavo.replace(/[Hh][Oo]/g,'ホ');
	enhavo = enhavo.replace(/[Hh]/g,'ㇹ');

	enhavo = enhavo.replace(/[Ĥĥ][Aa]/g,'ッハ');
	enhavo = enhavo.replace(/[Ĥĥ][Ii]/g,'ッヒ');
	enhavo = enhavo.replace(/[Ĥĥ][Uu]/g,'ッホウ');
	enhavo = enhavo.replace(/[Ĥĥ][Ee]/g,'ッヘ');
	enhavo = enhavo.replace(/[Ĥĥ][Oo]/g,'ッホ');
	enhavo = enhavo.replace(/[Ĥĥ]/g,'ッㇹ');

	enhavo = enhavo.replace(/[Jj][Aa]/g,'ヤ');
	enhavo = enhavo.replace(/[Jj][Ii]/g,'イィ');
	enhavo = enhavo.replace(/[Jj][Uu]/g,'ユ');
	enhavo = enhavo.replace(/[Jj][Ee]/g,'イェ');
	enhavo = enhavo.replace(/[Jj][Oo]/g,'ヨ');
	enhavo = enhavo.replace(/[Jj]/g,'ィ');

	enhavo = enhavo.replace(/[Ĵĵ][Aa]/g,'ジャ');
	enhavo = enhavo.replace(/[Ĵĵ][Ii]/g,'ジ');
	enhavo = enhavo.replace(/[Ĵĵ][Uu]/g,'ジュ');
	enhavo = enhavo.replace(/[Ĵĵ][Ee]/g,'ジェ');
	enhavo = enhavo.replace(/[Ĵĵ][Oo]/g,'ジョ');
	enhavo = enhavo.replace(/[Ĵĵ]/g,'ㇱ゙');

	enhavo = enhavo.replace(/[Kk][Aa]/g,'カ');
	enhavo = enhavo.replace(/[Kk][Ii]/g,'キ');
	enhavo = enhavo.replace(/[Kk][Uu]/g,'ク');
	enhavo = enhavo.replace(/[Kk][Ee]/g,'ケ');
	enhavo = enhavo.replace(/[Kk][Oo]/g,'コ');
	enhavo = enhavo.replace(/[Kk]/g,'ㇰ');

	enhavo = enhavo.replace(/[Ll][Aa]/g,'ラ゚');
	enhavo = enhavo.replace(/[Ll][Ii]/g,'リ゚');
	enhavo = enhavo.replace(/[Ll][Uu]/g,'ル゚');
	enhavo = enhavo.replace(/[Ll][Ee]/g,'レ゚');
	enhavo = enhavo.replace(/[Ll][Oo]/g,'ロ゚');
	enhavo = enhavo.replace(/[Ll]/g,'ㇽ゚');

	enhavo = enhavo.replace(/[Mm][Aa]/g,'マ');
	enhavo = enhavo.replace(/[Mm][Ii]/g,'ミ');
	enhavo = enhavo.replace(/[Mm][Uu]/g,'ム');
	enhavo = enhavo.replace(/[Mm][Ee]/g,'メ');
	enhavo = enhavo.replace(/[Mm][Oo]/g,'モ');
	enhavo = enhavo.replace(/[Mm]/g,'ㇺ');

	enhavo = enhavo.replace(/[Nn][Aa]/g,'ナ');
	enhavo = enhavo.replace(/[Nn][Ii]/g,'ニ');
	enhavo = enhavo.replace(/[Nn][Uu]/g,'ヌ');
	enhavo = enhavo.replace(/[Nn][Ee]/g,'ネ');
	enhavo = enhavo.replace(/[Nn][Oo]/g,'ノ');
	enhavo = enhavo.replace(/[Nn]/g,'ン');

	enhavo = enhavo.replace(/[Pp][Aa]/g,'パ');
	enhavo = enhavo.replace(/[Pp][Ii]/g,'ピ');
	enhavo = enhavo.replace(/[Pp][Uu]/g,'プ');
	enhavo = enhavo.replace(/[Pp][Ee]/g,'ペ');
	enhavo = enhavo.replace(/[Pp][Oo]/g,'ポ');
	enhavo = enhavo.replace(/[Pp]/g,'ㇷ゚');

	enhavo = enhavo.replace(/[Rr][Aa]/g,'ラ');
	enhavo = enhavo.replace(/[Rr][Ii]/g,'リ');
	enhavo = enhavo.replace(/[Rr][Uu]/g,'ル');
	enhavo = enhavo.replace(/[Rr][Ee]/g,'レ');
	enhavo = enhavo.replace(/[Rr][Oo]/g,'ロ');
	enhavo = enhavo.replace(/[Rr]/g,'ㇻ');

	enhavo = enhavo.replace(/[Ss][Aa]/g,'サ');
	enhavo = enhavo.replace(/[Ss][Ii]/g,'スィ');
	enhavo = enhavo.replace(/[Ss][Uu]/g,'ス');
	enhavo = enhavo.replace(/[Ss][Ee]/g,'セ');
	enhavo = enhavo.replace(/[Ss][Oo]/g,'ソ');
	enhavo = enhavo.replace(/[Ss]/g,'ㇲ');

	enhavo = enhavo.replace(/[Ŝŝ][Aa]/g,'シャ');
	enhavo = enhavo.replace(/[Ŝŝ][Ii]/g,'シ');
	enhavo = enhavo.replace(/[Ŝŝ][Uu]/g,'シュ');
	enhavo = enhavo.replace(/[Ŝŝ][Ee]/g,'シェ');
	enhavo = enhavo.replace(/[Ŝŝ][Oo]/g,'ショ');
	enhavo = enhavo.replace(/[Ŝŝ]/g,'ㇱ');

	enhavo = enhavo.replace(/[Tt][Aa]/g,'タ');
	enhavo = enhavo.replace(/[Tt][Ii]/g,'ティ');
	enhavo = enhavo.replace(/[Tt][Uu]/g,'ト゚');
	enhavo = enhavo.replace(/[Tt][Ee]/g,'テ');
	enhavo = enhavo.replace(/[Tt][Oo]/g,'ト');
	enhavo = enhavo.replace(/[Tt]/g,'ㇳ');

	enhavo = enhavo.replace(/[Ŭŭ][Aa]/g,'ワ');
	enhavo = enhavo.replace(/[Ŭŭ][Ii]/g,'ヰ');
	enhavo = enhavo.replace(/[Ŭŭ][Uu]/g,'于');
	enhavo = enhavo.replace(/[Ŭŭ][Ee]/g,'ヱ');
	enhavo = enhavo.replace(/[Ŭŭ][Oo]/g,'ヲ');
	enhavo = enhavo.replace(/[Ŭŭ]/g,'ゥ');

	enhavo = enhavo.replace(/[Vv][Aa]/g,'ヷ');
	enhavo = enhavo.replace(/[Vv][Ii]/g,'ヸ');
	enhavo = enhavo.replace(/[Vv][Uu]/g,'ヴ');
	enhavo = enhavo.replace(/[Vv][Ee]/g,'ヹ');
	enhavo = enhavo.replace(/[Vv][Oo]/g,'ヺ');
	enhavo = enhavo.replace(/[Vv]/g,'ゥ゙');

	enhavo = enhavo.replace(/[Zz][Aa]/g,'ザ');
	enhavo = enhavo.replace(/[Zz][Ii]/g,'ズィ');
	enhavo = enhavo.replace(/[Zz][Uu]/g,'ズ');
	enhavo = enhavo.replace(/[Zz][Ee]/g,'ゼ');
	enhavo = enhavo.replace(/[Zz][Oo]/g,'ゾ');
	enhavo = enhavo.replace(/[Zz]/g,'ㇲ゛');

	enhavo = enhavo.replace(/[Aa]/g,'ア');
	enhavo = enhavo.replace(/[Ii]/g,'イ');
	enhavo = enhavo.replace(/[Uu]/g,'ウ');
	enhavo = enhavo.replace(/[Ee]/g,'エ');
	enhavo = enhavo.replace(/[Oo]/g,'オ');

	enhavo = enhavo.replace(/\ /g,'　');
	enhavo = enhavo.replace(/\,/g,'、');
	enhavo = enhavo.replace(/\./g,'。');
	enhavo = enhavo.replace(/\?/g,'？');
	enhavo = enhavo.replace(/\!/g,'！');

	enhavo = enhavo.replace(/[Xx]/g,'?');
	enhavo = enhavo.replace(/\-/g,'ー');

	document.getElementById('enhavo').value = enhavo;
}

function malgranda() {
	tiparaGrandeco--;
	if (tiparaGrandeco <= 0) {
		tiparaGrandeco = 1;
	}
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function dekdu() {
	tiparaGrandeco = 12;
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function dekkvar() {
	tiparaGrandeco = 14;
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function dekok() {
	tiparaGrandeco = 18;
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function granda() {
	tiparaGrandeco++;
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function uzuJuliamoTiparon() {
	var juliamo = document.getElementById('juliamo').checked;
	var enhavo = document.getElementById('enhavo');
	if (juliamo) {
		enhavo.setAttribute('class', 'juliamo enhavo');
	} else {
		enhavo.setAttribute('class', 'enhavo');
	}
}


