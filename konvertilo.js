
var vera = true;
var falsa = false;

var alfabetoj = "ABCĈDEFGĜHĤIJĴKLMNOPQRSŜTUŬVWXYZabcĉdefgĝhĥijĵklmnopqrsŝtuŭvwxyz";
var vokaloj = "AEIOUaeiou";

var tiparaGrandeco = 12;
var katakanigoInversigo = '';

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
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';

	var enhavo = elemento('enhavo').value;
	elemento('enhavo').value = hodiau() + "\r\r" + enhavo; 
}

function elemento(nomo) {
	return document.getElementById(nomo);
}

function hodiau() {
	var rezulto = 'Ŭa, hodiaŭ estas la ';

	var nun = new Date();
	var monato = nun.getMonth() + 1;
	var tago = nun.getDate();

	rezulto += ordinaj[tago] + ' de ';
	rezulto += monatoj[monato] + '.';

	return rezulto;
}

function xSistemoKontrolita() {
	var xSistemo = elemento('x_sistemo').checked;

	if (xSistemo) {
		elemento('pre_x_sistemo').checked = false;
	}
}

function preXSistemoKontrolita() {
	var preXSistemo = elemento('pre_x_sistemo').checked;

	if (preXSistemo) {
		elemento('x_sistemo').checked = false;
	}
}

function konvertuAlEsperanto() {
	var enhavo = elemento('enhavo').value;

	var anstatauigo = elemento('anstatauigo').checked;
	var qtohh = elemento('qtohh').checked;
	var xtogh = elemento('xtogh').checked;
	var ytojh = elemento('ytojh').checked;
	var grekaj = elemento('grekaj').checked;
	var hSistemo = elemento('h_sistemo').checked;
	var xSistemo = elemento('x_sistemo').checked;
	var plilongigitaHSistemo = elemento('plilongigita_h_sistemo').checked;
	var preXSistemo = elemento('pre_x_sistemo').checked;
	var qSistemo = elemento('q_sistemo').checked;
	var wSistemo = elemento('w_sistemo').checked;
	var ySistemo = elemento('y_sistemo').checked;
	var karetoSistemo = elemento('kareto_sistemo').checked;
	var preKaretoSistemo = elemento('pre_kareto_sistemo').checked;
	var apostropheSistemo = elemento('apostrophe_sistemo').checked;
	var preApostropheSistemo = elemento('pre_apostrophe_sistemo').checked;
	var anglaStilaSistemo = elemento('angla_stila_sistemo').checked;
	var malregulaSistemo = elemento('malregula_sistemo').checked;
	var malregulaSistemo2 = elemento('malregula_sistemo_2').checked;
	var novaHelpalfabeto = elemento('nova_helpalfabeto').checked;
	var pliGrandaSistemo = elemento('pli_granda_sistemo').checked;

	if (anstatauigo) {
		enhavo = enhavo.replace(/w/g,'ŭ').replace(/W/g,'Ŭ');
	}
	if (qtohh) {
		enhavo = enhavo.replace(/q/g,'ĥ').replace(/Q/g,'Ĥ');
	}
	if (xtogh) {
		enhavo = enhavo.replace(/x/g,'ĝ').replace(/X/g,'Ĝ');
	}
	if (ytojh) {
		enhavo = enhavo.replace(/y/g,'ĵ').replace(/Y/g,'Ĵ');
	}

	if (hSistemo) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ').replace(/C[hH]/g,'Ĉ')
					   .replace(/g[hH]/g,'ĝ').replace(/G[hH]/g,'Ĝ')
					   .replace(/h[hH]/g,'ĥ').replace(/H[hH]/g,'Ĥ')
					   .replace(/j[hH]/g,'ĵ').replace(/J[hH]/g,'Ĵ')
					   .replace(/s[hH]/g,'ŝ').replace(/S[hH]/g,'Ŝ');
	}

	if (xSistemo) {
		enhavo = enhavo.replace(/c[xX]/g,'ĉ').replace(/C[xX]/g,'Ĉ')
					   .replace(/g[xX]/g,'ĝ').replace(/G[xX]/g,'Ĝ')
					   .replace(/h[xX]/g,'ĥ').replace(/H[xX]/g,'Ĥ')
					   .replace(/j[xX]/g,'ĵ').replace(/J[xX]/g,'Ĵ')
					   .replace(/s[xX]/g,'ŝ').replace(/S[xX]/g,'Ŝ')
					   .replace(/[uvw][xX]/g,'ŭ').replace(/[UVW][xX]/g,'Ŭ');
	}

	if (karetoSistemo) {
		enhavo = enhavo.replace(/c\^/g,'ĉ').replace(/C\^/g,'Ĉ')
					   .replace(/g\^/g,'ĝ').replace(/G\^/g,'Ĝ')
					   .replace(/h\^/g,'ĥ').replace(/H\^/g,'Ĥ')
					   .replace(/j\^/g,'ĵ').replace(/J\^/g,'Ĵ')
					   .replace(/s\^/g,'ŝ').replace(/S\^/g,'Ŝ')
					   .replace(/[uvw][\^\~]/g,'ŭ').replace(/[UVW][\^\~]/g,'Ŭ');
	}

	if (grekaj) {
		enhavo = enhavo.replace(/ξ/g,'ĉ').replace(/Ξ/g,'Ĉ')
					   .replace(/γ/g,'ĝ').replace(/Γ/g,'Ĝ')
					   .replace(/χ/g,'ĥ').replace(/Χ/g,'Ĥ')
					   .replace(/θ/g,'ĵ').replace(/Θ/g,'Ĵ')
					   .replace(/σ/g,'ŝ').replace(/Σ/g,'Ŝ')
					   .replace(/υ/g,'ŭ').replace(/Υ/g,'Ŭ');
	}

	if (plilongigitaHSistemo) {
		enhavo = enhavo.replace(/k[hH]/g,'ĥ').replace(/K[hH]/g,'Ĥ')
					   .replace(/v[hH]/g,'ŭ').replace(/V[hH]/g,'Ŭ');		   
	}

	if (preXSistemo) {
		enhavo = enhavo.replace(/x[cC]/g,'ĉ').replace(/X[cC]/g,'Ĉ')
					   .replace(/x[gG]/g,'ĝ').replace(/X[gG]/g,'Ĝ')
					   .replace(/x[hH]/g,'ĥ').replace(/X[hH]/g,'Ĥ')
					   .replace(/x[jJ]/g,'ĵ').replace(/X[jJ]/g,'Ĵ')
					   .replace(/x[sS]/g,'ŝ').replace(/X[sS]/g,'Ŝ')
					   .replace(/x[uvwUVW]/g,'ŭ').replace(/X[uvwUVW]/g,'Ŭ');
	}

	if (qSistemo) {
		enhavo = enhavo.replace(/c[qQ]/g,'ĉ').replace(/C[qQ]/g,'Ĉ')
					   .replace(/g[qQ]/g,'ĝ').replace(/G[qQ]/g,'Ĝ')
					   .replace(/h[qQ]/g,'ĥ').replace(/H[qQ]/g,'Ĥ')
					   .replace(/j[qQ]/g,'ĵ').replace(/J[qQ]/g,'Ĵ')
					   .replace(/s[qQ]/g,'ŝ').replace(/S[qQ]/g,'Ŝ')
					   .replace(/[uvw][qQ]/g,'ŭ').replace(/[UVW][qQ]/g,'Ŭ');		   
	}

	if (wSistemo) {
		enhavo = enhavo.replace(/c[wW]/g,'ĉ').replace(/C[wW]/g,'Ĉ')
					   .replace(/g[wW]/g,'ĝ').replace(/G[wW]/g,'Ĝ')
					   .replace(/h[wW]/g,'ĥ').replace(/H[wW]/g,'Ĥ')
					   .replace(/j[wW]/g,'ĵ').replace(/J[wW]/g,'Ĵ')
					   .replace(/s[wW]/g,'ŝ').replace(/S[wW]/g,'Ŝ')
					   .replace(/[uv][wW]/g,'ŭ').replace(/[UV][wW]/g,'Ŭ');      
	}

	if (ySistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ').replace(/C[yY]/g,'Ĉ')
					   .replace(/g[yY]/g,'ĝ').replace(/G[yY]/g,'Ĝ')
					   .replace(/h[yY]/g,'ĥ').replace(/H[yY]/g,'Ĥ')
					   .replace(/j[yY]/g,'ĵ').replace(/J[yY]/g,'Ĵ')
					   .replace(/s[yY]/g,'ŝ').replace(/S[yY]/g,'Ŝ')
					   .replace(/[uvw][yY]/g,'ŭ').replace(/[UVW][yY]/g,'Ŭ');
	}

	if (preKaretoSistemo) {
		enhavo = enhavo.replace(/\^c/g,'ĉ').replace(/\^C/g,'Ĉ')
					   .replace(/\^g/g,'ĝ').replace(/\^G/g,'Ĝ')
					   .replace(/\^h/g,'ĥ').replace(/\^H/g,'Ĥ')
					   .replace(/\^j/g,'ĵ').replace(/\^J/g,'Ĵ')
					   .replace(/\^s/g,'ŝ').replace(/\^S/g,'Ŝ')
					   .replace(/[\^\~][uvw]/g,'ŭ').replace(/[\^\~][UVW]/g,'Ŭ');
	}

	if (apostropheSistemo) {
		enhavo = enhavo.replace(/c\'/g,'ĉ').replace(/C\'/g,'Ĉ')
					   .replace(/g\'/g,'ĝ').replace(/G\'/g,'Ĝ')
					   .replace(/h\'/g,'ĥ').replace(/H\'/g,'Ĥ')
					   .replace(/j\'/g,'ĵ').replace(/J\'/g,'Ĵ')
					   .replace(/s\'/g,'ŝ').replace(/S\'/g,'Ŝ')
					   .replace(/[uvw]\'/g,'ŭ').replace(/[UVW]\'/g,'Ŭ');
	}

	if (preApostropheSistemo) {
		enhavo = enhavo.replace(/\'c/g,'ĉ').replace(/\'C/g,'Ĉ')
					   .replace(/\'g/g,'ĝ').replace(/\'G/g,'Ĝ')
					   .replace(/\'h/g,'ĥ').replace(/\'H/g,'Ĥ')
					   .replace(/\'j/g,'ĵ').replace(/\'J/g,'Ĵ')
					   .replace(/\'s/g,'ŝ').replace(/\'S/g,'Ŝ')
					   .replace(/\'[uvw]/g,'ŭ').replace(/\'[UVW]/g,'Ŭ');
	}

	if (anglaStilaSistemo) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ').replace(/C[hH]/g,'Ĉ')
					   .replace(/t[sS]/g,'c').replace(/T[sS]/g,'C')
					   .replace(/d[gG]/g,'ĝ').replace(/D[gG]/g,'Ĝ')
					   .replace(/k[hH]/g,'ĥ').replace(/K[hH]/g,'Ĥ')
					   .replace(/j/g,'ĵ').replace(/J/g,'Ĵ')
					   .replace(/y/g,'j').replace(/Y/g,'J')
					   .replace(/s[hH]/g,'ŝ').replace(/S[hH]/g,'Ŝ')
					   .replace(/w/g,'ŭ').replace(/W/g,'Ŭ');
	}

	if (malregulaSistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ').replace(/C[yY]/g,'Ĉ')
					   .replace(/x[gG]/g,'ĝ').replace(/X[gG]/g,'Ĝ')
					   .replace(/x[hH]/g,'ĥ').replace(/X[hH]/g,'Ĥ')
					   .replace(/x[jJ]/g,'ĵ').replace(/X[jJ]/g,'Ĵ')
					   .replace(/s[yY]/g,'ŝ').replace(/S[yY]/g,'Ŝ')
					   .replace(/w/g,'ŭ').replace(/W/g,'Ŭ');
	}

	if (malregulaSistemo2) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ').replace(/C[yY]/g,'Ĉ')
					   .replace(/x[yY]/g,'ĝ').replace(/X[yY]/g,'Ĝ')
					   .replace(/q/g,'ĥ').replace(/Q/g,'Ĥ')
					   .replace(/x/g,'ĵ').replace(/X/g,'Ĵ')
					   .replace(/s[yY]/g,'ŝ').replace(/S[yY]/g,'Ŝ')
					   .replace(/w/g,'ŭ').replace(/W/g,'Ŭ');
	}

	if (novaHelpalfabeto) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ').replace(/C[hH]/g,'Ĉ')
					   .replace(/j/g,'ĝ').replace(/J/g,'Ĝ')
					   .replace(/k[hH]/g,'ĥ').replace(/K[hH]/g,'Ĥ')
					   .replace(/y/g,'j').replace(/Y/g,'J')
					   .replace(/z[hH]/g,'ĵ').replace(/Z[hH]/g,'Ĵ')
					   .replace(/s[hH]/g,'ŝ').replace(/S[hH]/g,'Ŝ')
					   .replace(/wa/g,'ŭa').replace(/Wa/g,'Ŭa')
					   .replace(/we/g,'ŭe').replace(/We/g,'Ŭe')
					   .replace(/wo/g,'ŭo').replace(/Wo/g,'Ŭo')
					   .replace(/wA/g,'ŭA').replace(/WA/g,'ŬA')
					   .replace(/wE/g,'ŭE').replace(/WE/g,'ŬE')
					   .replace(/wO/g,'ŭO').replace(/WO/g,'ŬO')
					   .replace(/au/g,'aŭ').replace(/aU/g,'aŬ')
					   .replace(/eu/g,'eŭ').replace(/eU/g,'eŬ')
					   .replace(/ou/g,'oŭ').replace(/oU/g,'oŬ')
					   .replace(/Au/g,'Aŭ').replace(/AU/g,'AŬ')
					   .replace(/Eu/g,'Eŭ').replace(/EU/g,'EŬ')
					   .replace(/Ou/g,'Oŭ').replace(/OU/g,'OŬ');   
	}

	if (pliGrandaSistemo) {
		enhavo = enhavo.replace(/c>/g,'ĉ').replace(/C>/g,'Ĉ')
					   .replace(/g>/g,'ĝ').replace(/G>/g,'Ĝ')
					   .replace(/h>/g,'ĥ').replace(/H>/g,'Ĥ')
					   .replace(/j>/g,'ĵ').replace(/J>/g,'Ĵ')
					   .replace(/s>/g,'ŝ').replace(/S>/g,'Ŝ')
					   .replace(/[uvw]>/g,'ŭ').replace(/[UVW]>/g,'Ŭ');
	}

	elemento('enhavo').value = enhavo;
}

function konvertuAlAscii() {
	var enhavo = elemento('enhavo').value;

	var anstatauigo = elemento('anstatauigo').checked;
	var qtohh = elemento('qtohh').checked;
	var xtogh = elemento('xtogh').checked;
	var ytojh = elemento('ytojh').checked;
	var grekaj = elemento('grekaj').checked;
	var hSistemo = elemento('h_sistemo').checked;
	var xSistemo = elemento('x_sistemo').checked;
	var plilongigitaHSistemo = elemento('plilongigita_h_sistemo').checked;
	var preXSistemo = elemento('pre_x_sistemo').checked;
	var qSistemo = elemento('q_sistemo').checked;
	var wSistemo = elemento('w_sistemo').checked;
	var ySistemo = elemento('y_sistemo').checked;
	var karetoSistemo = elemento('kareto_sistemo').checked;
	var preKaretoSistemo = elemento('pre_kareto_sistemo').checked;
	var apostropheSistemo = elemento('apostrophe_sistemo').checked;
	var preApostropheSistemo = elemento('pre_apostrophe_sistemo').checked;
	var anglaStilaSistemo = elemento('angla_stila_sistemo').checked;
	var malregulaSistemo = elemento('malregula_sistemo').checked;
	var malregulaSistemo2 = elemento('malregula_sistemo_2').checked;
	var novaHelpalfabeto = elemento('nova_helpalfabeto').checked;
	var pliGrandaSistemo = elemento('pli_granda_sistemo').checked;

	if (anstatauigo) {
		enhavo = enhavo.replace(/ŭ/g,'w').replace(/Ŭ/g,'W');
	}
	if (qtohh) {
		enhavo = enhavo.replace(/ĥ/g,'q').replace(/Ĥ/g,'Q');
	}
	if (xtogh) {
		enhavo = enhavo.replace(/ĝ/g,'x').replace(/Ĝ/g,'X');
	}
	if (ytojh) {
		enhavo = enhavo.replace(/ĵ/g,'y').replace(/Ĵ/g,'Y');
	}

	if (hSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'ch').replace(/Ĉ/g,'Ch')
					   .replace(/ĝ/g,'gh').replace(/Ĝ/g,'Gh')
					   .replace(/ĥ/g,'hh').replace(/Ĥ/g,'Hh')
					   .replace(/ĵ/g,'jh').replace(/Ĵ/g,'Jh')
					   .replace(/ŝ/g,'sh').replace(/Ŝ/g,'Sh');
	}

	if (xSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cx').replace(/Ĉ/g,'Cx')
					   .replace(/ĝ/g,'gx').replace(/Ĝ/g,'Gx')
					   .replace(/ĥ/g,'hx').replace(/Ĥ/g,'Hx')
					   .replace(/ĵ/g,'jx').replace(/Ĵ/g,'Jx')
					   .replace(/ŝ/g,'sx').replace(/Ŝ/g,'Sx')
					   .replace(/ŭ/g,'ux').replace(/Ŭ/g,'Ux');
	}

	if (karetoSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c^').replace(/Ĉ/g,'C^')
					   .replace(/ĝ/g,'g^').replace(/Ĝ/g,'G^')
					   .replace(/ĥ/g,'h^').replace(/Ĥ/g,'H^')
					   .replace(/ĵ/g,'j^').replace(/Ĵ/g,'J^')
					   .replace(/ŝ/g,'s^').replace(/Ŝ/g,'S^')
					   .replace(/ŭ/g,'u~').replace(/Ŭ/g,'U~');
	}

	if (grekaj) {
		enhavo = enhavo.replace(/ĉ/g,'ξ').replace(/Ĉ/g,'Ξ')
					   .replace(/ĝ/g,'γ').replace(/Ĝ/g,'Γ')
					   .replace(/ĥ/g,'χ').replace(/Ĥ/g,'Χ')
					   .replace(/ĵ/g,'θ').replace(/Ĵ/g,'Θ')
					   .replace(/ŝ/g,'σ').replace(/Ŝ/g,'Σ')
					   .replace(/ŭ/g,'υ').replace(/Ŭ/g,'Υ');
	}

	if (qSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cq').replace(/Ĉ/g,'Cq')
					   .replace(/ĝ/g,'gq').replace(/Ĝ/g,'Gq')
					   .replace(/ĥ/g,'hq').replace(/Ĥ/g,'Hq')
					   .replace(/ĵ/g,'jq').replace(/Ĵ/g,'Jq')
					   .replace(/ŝ/g,'sq').replace(/Ŝ/g,'Sq')
					   .replace(/ŭ/g,'uq').replace(/Ŭ/g,'Uq');
	}

	if (plilongigitaHSistemo) {
		enhavo = enhavo.replace(/ĥ/g,'kh').replace(/Ĥ/g,'Kh')
					   .replace(/ŭ/g,'vh').replace(/Ŭ/g,'Vh');
	}

	if (preXSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'xc').replace(/Ĉ/g,'Xc')
					   .replace(/ĝ/g,'xg').replace(/Ĝ/g,'Xg')
					   .replace(/ĥ/g,'xh').replace(/Ĥ/g,'Xh')
					   .replace(/ĵ/g,'xj').replace(/Ĵ/g,'Xj')
					   .replace(/ŝ/g,'xs').replace(/Ŝ/g,'Xs')
					   .replace(/ŭ/g,'xu').replace(/Ŭ/g,'Xu');
	}

	if (wSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cw').replace(/Ĉ/g,'Cw')
					   .replace(/ĝ/g,'gw').replace(/Ĝ/g,'Gw')
					   .replace(/ĥ/g,'hw').replace(/Ĥ/g,'Hw')
					   .replace(/ĵ/g,'jw').replace(/Ĵ/g,'Jw')
					   .replace(/ŝ/g,'sw').replace(/Ŝ/g,'Sw')
					   .replace(/ŭ/g,'uw').replace(/Ŭ/g,'Uw');
	}

	if (ySistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cy').replace(/Ĉ/g,'Cy')
					   .replace(/ĝ/g,'gy').replace(/Ĝ/g,'Gy')
					   .replace(/ĥ/g,'hy').replace(/Ĥ/g,'Hy')
					   .replace(/ĵ/g,'jy').replace(/Ĵ/g,'Jy')
					   .replace(/ŝ/g,'sy').replace(/Ŝ/g,'Sy')
					   .replace(/ŭ/g,'uy').replace(/Ŭ/g,'Uy');
	}

	if (preKaretoSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'^c').replace(/Ĉ/g,'^C')
					   .replace(/ĝ/g,'^g').replace(/Ĝ/g,'^G')
					   .replace(/ĥ/g,'^h').replace(/Ĥ/g,'^H')
					   .replace(/ĵ/g,'^j').replace(/Ĵ/g,'^J')
					   .replace(/ŝ/g,'^s').replace(/Ŝ/g,'^S')
					   .replace(/ŭ/g,'~u').replace(/Ŭ/g,'~U');
	}

	if (apostropheSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c\'').replace(/Ĉ/g,'C\'')
					   .replace(/ĝ/g,'g\'').replace(/Ĝ/g,'G\'')
					   .replace(/ĥ/g,'h\'').replace(/Ĥ/g,'H\'')
					   .replace(/ĵ/g,'j\'').replace(/Ĵ/g,'J\'')
					   .replace(/ŝ/g,'s\'').replace(/Ŝ/g,'S\'')
					   .replace(/ŭ/g,'u\'').replace(/Ŭ/g,'U\'');
	}

	if (preApostropheSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'\'c').replace(/Ĉ/g,'\'C')
					   .replace(/ĝ/g,'\'g').replace(/Ĝ/g,'\'G')
					   .replace(/ĥ/g,'\'h').replace(/Ĥ/g,'\'H')
					   .replace(/ĵ/g,'\'j').replace(/Ĵ/g,'\'J')
					   .replace(/ŝ/g,'\'s').replace(/Ŝ/g,'\'S')
					   .replace(/ŭ/g,'\'u').replace(/Ŭ/g,'\'U');
	}

	if (anglaStilaSistemo) {
		enhavo = enhavo.replace(/c/g,'ts').replace(/C/g,'Ts')
					   .replace(/ĉ/g,'ch').replace(/Ĉ/g,'Ch')
					   .replace(/ĝ/g,'dg').replace(/Ĝ/g,'Dg')
					   .replace(/ĥ/g,'kh').replace(/Ĥ/g,'Kh')
					   .replace(/j/g,'y').replace(/J/g,'Y')
					   .replace(/ĵ/g,'j').replace(/Ĵ/g,'J')
					   .replace(/ŝ/g,'sh').replace(/Ŝ/g,'Sh')
					   .replace(/ŭ/g,'w').replace(/Ŭ/g,'W');
	}

	if (malregulaSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cy').replace(/Ĉ/g,'Cy')
					   .replace(/ĝ/g,'xg').replace(/Ĝ/g,'Xg')
					   .replace(/ĥ/g,'xh').replace(/Ĥ/g,'Xh')
					   .replace(/ĵ/g,'xj').replace(/Ĵ/g,'Xj')
					   .replace(/ŝ/g,'sy').replace(/Ŝ/g,'Sy')
					   .replace(/ŭ/g,'w').replace(/Ŭ/g,'W');
	}

	if (malregulaSistemo2) {
		enhavo = enhavo.replace(/ĉ/g,'cy').replace(/Ĉ/g,'Cy')
					   .replace(/ĝ/g,'xy').replace(/Ĝ/g,'Xy')
					   .replace(/ĥ/g,'q').replace(/Ĥ/g,'Q')
					   .replace(/ĵ/g,'x').replace(/Ĵ/g,'X')
					   .replace(/ŝ/g,'sy').replace(/Ŝ/g,'Sy')
					   .replace(/ŭ/g,'w').replace(/Ŭ/g,'W');
	}

	if (novaHelpalfabeto) {
		enhavo = enhavo.replace(/ĉ/g,'ch').replace(/Ĉ/g,'Ch')
					   .replace(/j/g,'y').replace(/J/g,'Y')
					   .replace(/ĝ/g,'j').replace(/Ĝ/g,'J')
					   .replace(/ĥ/g,'kh').replace(/Ĥ/g,'Kh')
					   .replace(/ĵ/g,'zh').replace(/Ĵ/g,'Zh')
					   .replace(/ŝ/g,'sh').replace(/Ŝ/g,'Sh')
					   .replace(/ŭa/g,'wa').replace(/Ŭa/g,'Wa')
					   .replace(/ŭe/g,'we').replace(/Ŭe/g,'We')
					   .replace(/ŭo/g,'wo').replace(/Ŭo/g,'Wo')
					   .replace(/ŭA/g,'wA').replace(/ŬA/g,'WA')
					   .replace(/ŭE/g,'wE').replace(/ŬE/g,'WE')
					   .replace(/ŭO/g,'wO').replace(/ŬO/g,'WO')
					   .replace(/aŭ/g,'au').replace(/aŬ/g,'aU')
					   .replace(/eŭ/g,'eu').replace(/eŬ/g,'eU')
					   .replace(/oŭ/g,'ou').replace(/oŬ/g,'oU')
					   .replace(/Aŭ/g,'Au').replace(/AŬ/g,'AU')
					   .replace(/Eŭ/g,'Eu').replace(/EŬ/g,'EU')
					   .replace(/ŭO/g,'Ou').replace(/OŬ/g,'OU');
	}

	if (pliGrandaSistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c>').replace(/Ĉ/g,'C>')
					   .replace(/ĝ/g,'g>').replace(/Ĝ/g,'G>')
					   .replace(/ĥ/g,'h>').replace(/Ĥ/g,'H>')
					   .replace(/ĵ/g,'j>').replace(/Ĵ/g,'J>')
					   .replace(/ŝ/g,'s>').replace(/Ŝ/g,'S>')
					   .replace(/ŭ/g,'u>').replace(/Ŭ/g,'U>');
	}

	elemento('enhavo').value = enhavo;
}

function aldonuStreketonPostAkchento(vorto) {
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
	var enhavo = elemento('enhavo').value;
	var reduktuDependantajn = elemento('reduktu_dependantajn').checked;
	var rezulto = "";
	katakanigoInversigo = enhavo;

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
			rezulto += aldonuStreketonPostAkchento(vorto);
		} else {
			rezulto += karaktero;
		}
	}
	enhavo = rezulto;

	
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Nn][Jj][Aa]/g,'ニャ');
		enhavo = enhavo.replace(/[Nn][Jj][Ii]/g,'ニィ');
		enhavo = enhavo.replace(/[Nn][Jj][Uu]/g,'ニュ');
		enhavo = enhavo.replace(/[Nn][Jj][Ee]/g,'ニェ');
		enhavo = enhavo.replace(/[Nn][Jj][Oo]/g,'ニョ');
		enhavo = enhavo.replace(/[Nn][Jj]/g,'ニ');
	} else {
		enhavo = enhavo.replace(/[Nn][Jj][Aa]/g,'ㇴヤ');
		enhavo = enhavo.replace(/[Nn][Jj][Ii]/g,'ㇴイィ');
		enhavo = enhavo.replace(/[Nn][Jj][Uu]/g,'ㇴユ');
		enhavo = enhavo.replace(/[Nn][Jj][Ee]/g,'ㇴイェ');
		enhavo = enhavo.replace(/[Nn][Jj][Oo]/g,'ㇴヨ');
		enhavo = enhavo.replace(/[Nn][Jj]/g,'ㇴィ');
	}

	enhavo = enhavo.replace(/[Dd][Zz][Aa]/g,'ッザ');
	enhavo = enhavo.replace(/[Dd][Zz][Ii]/g,'ッズィ');
	enhavo = enhavo.replace(/[Dd][Zz][Uu]/g,'ッズ');
	enhavo = enhavo.replace(/[Dd][Zz][Ee]/g,'ッゼ');
	enhavo = enhavo.replace(/[Dd][Zz][Oo]/g,'ッゾ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Dd][Zz]/g,'ッズ');
	} else {
		enhavo = enhavo.replace(/[Dd][Zz]/g,'ッㇲ゙');
	}

	enhavo = enhavo.replace(/[Bb][Aa]/g,'バ');
	enhavo = enhavo.replace(/[Bb][Ii]/g,'ビ');
	enhavo = enhavo.replace(/[Bb][Uu]/g,'ブ');
	enhavo = enhavo.replace(/[Bb][Ee]/g,'ベ');
	enhavo = enhavo.replace(/[Bb][Oo]/g,'ボ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Bb]/g,'ブ');
	} else {
		enhavo = enhavo.replace(/[Bb]/g,'ㇷ゙');
	}

	enhavo = enhavo.replace(/[Cc][Aa]/g,'ツァ');
	enhavo = enhavo.replace(/[Cc][Ii]/g,'ツィ');
	enhavo = enhavo.replace(/[Cc][Uu]/g,'ツ');
	enhavo = enhavo.replace(/[Cc][Ee]/g,'ツェ');
	enhavo = enhavo.replace(/[Cc][Oo]/g,'ツォ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Cc]/g,'ツ');
	} else {
		enhavo = enhavo.replace(/[Cc]/g,'ツ゚');
	}

	enhavo = enhavo.replace(/[Ĉĉ][Aa]/g,'チャ');
	enhavo = enhavo.replace(/[Ĉĉ][Ii]/g,'チ');
	enhavo = enhavo.replace(/[Ĉĉ][Uu]/g,'チュ');
	enhavo = enhavo.replace(/[Ĉĉ][Ee]/g,'チェ');
	enhavo = enhavo.replace(/[Ĉĉ][Oo]/g,'チョ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ĉĉ]/g,'チュ');
	} else {
		enhavo = enhavo.replace(/[Ĉĉ]/g,'チ゚');
	}

	enhavo = enhavo.replace(/[Dd][Aa]/g,'ダ');
	enhavo = enhavo.replace(/[Dd][Ii]/g,'ディ');
	enhavo = enhavo.replace(/[Dd][Uu]/g,'ドゥ');
	enhavo = enhavo.replace(/[Dd][Ee]/g,'デ');
	enhavo = enhavo.replace(/[Dd][Oo]/g,'ド');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Dd]/g,'ドゥ');
	} else {
		enhavo = enhavo.replace(/[Dd]/g,'ㇳ゙');
	}

	enhavo = enhavo.replace(/[Ff][Aa]/g,'ファ');
	enhavo = enhavo.replace(/[Ff][Ii]/g,'フィ');
	enhavo = enhavo.replace(/[Ff][Uu]/g,'フ');
	enhavo = enhavo.replace(/[Ff][Ee]/g,'フェ');
	enhavo = enhavo.replace(/[Ff][Oo]/g,'フォ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ff]/g,'フ');
	} else {
		enhavo = enhavo.replace(/[Ff]/g,'ㇷ');
	}

	enhavo = enhavo.replace(/[Gg][Aa]/g,'ガ');
	enhavo = enhavo.replace(/[Gg][Ii]/g,'ギ');
	enhavo = enhavo.replace(/[Gg][Uu]/g,'グ');
	enhavo = enhavo.replace(/[Gg][Ee]/g,'ゲ');
	enhavo = enhavo.replace(/[Gg][Oo]/g,'ゴ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Gg]/g,'グ');
	} else {
		enhavo = enhavo.replace(/[Gg]/g,'ㇰ゙');
	}

	enhavo = enhavo.replace(/[Ĝĝ][Aa]/g,'ヂャ');
	enhavo = enhavo.replace(/[Ĝĝ][Ii]/g,'ヂ');
	enhavo = enhavo.replace(/[Ĝĝ][Uu]/g,'ヂュ');
	enhavo = enhavo.replace(/[Ĝĝ][Ee]/g,'ヂェ');
	enhavo = enhavo.replace(/[Ĝĝ][Oo]/g,'ヂョ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ĝĝ]/g,'ヂュ');
	} else {
		enhavo = enhavo.replace(/[Ĝĝ]/g,'ッ゙ュ');
	}

	enhavo = enhavo.replace(/[Hh][Aa]/g,'ハ');
	enhavo = enhavo.replace(/[Hh][Ii]/g,'ヒ');
	enhavo = enhavo.replace(/[Hh][Uu]/g,'ホゥ');
	enhavo = enhavo.replace(/[Hh][Ee]/g,'ヘ');
	enhavo = enhavo.replace(/[Hh][Oo]/g,'ホ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Hh]/g,'ホ');
	} else {
		enhavo = enhavo.replace(/[Hh]/g,'ㇹ');
	}

	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ĥĥ][Aa]/g,'ッハ');
		enhavo = enhavo.replace(/[Ĥĥ][Ii]/g,'ッヒ');
		enhavo = enhavo.replace(/[Ĥĥ][Uu]/g,'ッホゥ');
		enhavo = enhavo.replace(/[Ĥĥ][Ee]/g,'ッヘ');
		enhavo = enhavo.replace(/[Ĥĥ][Oo]/g,'ッホ');
		enhavo = enhavo.replace(/[Ĥĥ]/g,'ッホ');
	} else {
		enhavo = enhavo.replace(/[Ĥĥ][Aa]/g,'カ゚');
		enhavo = enhavo.replace(/[Ĥĥ][Ii]/g,'キ゚');
		enhavo = enhavo.replace(/[Ĥĥ][Uu]/g,'ク゚');
		enhavo = enhavo.replace(/[Ĥĥ][Ee]/g,'ケ゚');
		enhavo = enhavo.replace(/[Ĥĥ][Oo]/g,'コ゚');
		enhavo = enhavo.replace(/[Ĥĥ]/g,'ㇰ゚');
	}

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
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ĵĵ]/g,'ジ');
	} else {
		enhavo = enhavo.replace(/[Ĵĵ]/g,'ㇱ゙');
	}

	enhavo = enhavo.replace(/[Kk][Aa]/g,'カ');
	enhavo = enhavo.replace(/[Kk][Ii]/g,'キ');
	enhavo = enhavo.replace(/[Kk][Uu]/g,'ク');
	enhavo = enhavo.replace(/[Kk][Ee]/g,'ケ');
	enhavo = enhavo.replace(/[Kk][Oo]/g,'コ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Kk]/g,'ク');
	} else {
		enhavo = enhavo.replace(/[Kk]/g,'ㇰ');
	}


	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ll][Aa]/g,'ら');
		enhavo = enhavo.replace(/[Ll][Ii]/g,'り');
		enhavo = enhavo.replace(/[Ll][Uu]/g,'る');
		enhavo = enhavo.replace(/[Ll][Ee]/g,'れ');
		enhavo = enhavo.replace(/[Ll][Oo]/g,'ろ');
		enhavo = enhavo.replace(/[Ll]/g,'る');
	} else {
		enhavo = enhavo.replace(/[Ll][Aa]/g,'ラ゚');
		enhavo = enhavo.replace(/[Ll][Ii]/g,'リ゚');
		enhavo = enhavo.replace(/[Ll][Uu]/g,'ル゚');
		enhavo = enhavo.replace(/[Ll][Ee]/g,'レ゚');
		enhavo = enhavo.replace(/[Ll][Oo]/g,'ロ゚');
		enhavo = enhavo.replace(/[Ll]/g,'ㇽ゚');
	}

	enhavo = enhavo.replace(/[Mm][Aa]/g,'マ');
	enhavo = enhavo.replace(/[Mm][Ii]/g,'ミ');
	enhavo = enhavo.replace(/[Mm][Uu]/g,'ム');
	enhavo = enhavo.replace(/[Mm][Ee]/g,'メ');
	enhavo = enhavo.replace(/[Mm][Oo]/g,'モ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Mm]/g,'ム');
	} else {
		enhavo = enhavo.replace(/[Mm]/g,'ㇺ');
	}

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
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Pp]/g,'プ');
	} else {
		enhavo = enhavo.replace(/[Pp]/g,'ㇷ゚');
	}

	enhavo = enhavo.replace(/[Rr][Aa]/g,'ラ');
	enhavo = enhavo.replace(/[Rr][Ii]/g,'リ');
	enhavo = enhavo.replace(/[Rr][Uu]/g,'ル');
	enhavo = enhavo.replace(/[Rr][Ee]/g,'レ');
	enhavo = enhavo.replace(/[Rr][Oo]/g,'ロ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Rr]/g,'ラ');
	} else {
		enhavo = enhavo.replace(/[Rr]/g,'ㇻ');
	}

	enhavo = enhavo.replace(/[Ss][Aa]/g,'サ');
	enhavo = enhavo.replace(/[Ss][Ii]/g,'スィ');
	enhavo = enhavo.replace(/[Ss][Uu]/g,'ス');
	enhavo = enhavo.replace(/[Ss][Ee]/g,'セ');
	enhavo = enhavo.replace(/[Ss][Oo]/g,'ソ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ss]/g,'ス');
	} else {
		enhavo = enhavo.replace(/[Ss]/g,'ㇲ');
	}

	enhavo = enhavo.replace(/[Ŝŝ][Aa]/g,'シャ');
	enhavo = enhavo.replace(/[Ŝŝ][Ii]/g,'シ');
	enhavo = enhavo.replace(/[Ŝŝ][Uu]/g,'シュ');
	enhavo = enhavo.replace(/[Ŝŝ][Ee]/g,'シェ');
	enhavo = enhavo.replace(/[Ŝŝ][Oo]/g,'ショ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ŝŝ]/g,'シ');
	} else {
		enhavo = enhavo.replace(/[Ŝŝ]/g,'ㇱ');
	}

	enhavo = enhavo.replace(/[Tt][Aa]/g,'タ');
	enhavo = enhavo.replace(/[Tt][Ii]/g,'ティ');
	enhavo = enhavo.replace(/[Tt][Uu]/g,'トゥ');
	enhavo = enhavo.replace(/[Tt][Ee]/g,'テ');
	enhavo = enhavo.replace(/[Tt][Oo]/g,'ト');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Tt]/g,'ト');
	} else {
		enhavo = enhavo.replace(/[Tt]/g,'ㇳ');
	}


	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Ŭŭ][Aa]/g,'ワ');
		enhavo = enhavo.replace(/[Ŭŭ][Ii]/g,'ウィ');
		enhavo = enhavo.replace(/[Ŭŭ][Uu]/g,'ウ');
		enhavo = enhavo.replace(/[Ŭŭ][Ee]/g,'ウェ');
		enhavo = enhavo.replace(/[Ŭŭ][Oo]/g,'ウォ');
	} else {
		enhavo = enhavo.replace(/[Ŭŭ][Aa]/g,'ワ');
		enhavo = enhavo.replace(/[Ŭŭ][Ii]/g,'ヰ');
		enhavo = enhavo.replace(/[Ŭŭ][Uu]/g,'于');
		enhavo = enhavo.replace(/[Ŭŭ][Ee]/g,'ヱ');
		enhavo = enhavo.replace(/[Ŭŭ][Oo]/g,'ヲ');
	}
	enhavo = enhavo.replace(/[Ŭŭ]/g,'ゥ');

	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Vv][Aa]/g,'ヴァ');
		enhavo = enhavo.replace(/[Vv][Ii]/g,'ヴィ');
		enhavo = enhavo.replace(/[Vv][Uu]/g,'ヴ');
		enhavo = enhavo.replace(/[Vv][Ee]/g,'ヴェ');
		enhavo = enhavo.replace(/[Vv][Oo]/g,'ヴォ');
		enhavo = enhavo.replace(/[Vv]/g,'ヴ');
	} else {
		enhavo = enhavo.replace(/[Vv][Aa]/g,'ヷ');
		enhavo = enhavo.replace(/[Vv][Ii]/g,'ヸ');
		enhavo = enhavo.replace(/[Vv][Uu]/g,'ヴ');
		enhavo = enhavo.replace(/[Vv][Ee]/g,'ヹ');
		enhavo = enhavo.replace(/[Vv][Oo]/g,'ヺ');
		enhavo = enhavo.replace(/[Vv]/g,'ゥ゙');
	}

	enhavo = enhavo.replace(/[Zz][Aa]/g,'ザ');
	enhavo = enhavo.replace(/[Zz][Ii]/g,'ズィ');
	enhavo = enhavo.replace(/[Zz][Uu]/g,'ズ');
	enhavo = enhavo.replace(/[Zz][Ee]/g,'ゼ');
	enhavo = enhavo.replace(/[Zz][Oo]/g,'ゾ');
	if (reduktuDependantajn) {
		enhavo = enhavo.replace(/[Zz]/g,'ズ');
	} else {
		enhavo = enhavo.replace(/[Zz]/g,'ㇲ゙');
	}

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
	enhavo = enhavo.replace(/\"/g,'”');
	enhavo = enhavo.replace(/\'/g,'゠');

	enhavo = enhavo.replace(/\-/g,'ー');

	elemento('enhavo').value = enhavo;
	elemento('revertu').disabled = undefined;
}

function revertu() {
	elemento('enhavo').value = katakanigoInversigo;
	katakanigoInversigo = '';
	elemento('revertu').disabled = 'disabled';
	elemento('revertuMultBajtoj').disabled = 'disabled';
}

function multajBajtoj() {
	var enhavo = elemento('enhavo').value;
	var rezulto = "";
	juliamoInversigo = enhavo;

	enhavo = enhavo.replace(/\-/g,'ー');
	enhavo = enhavo.replace(/ /g,' ');
	enhavo = enhavo.replace(/\ /g,' ');
	enhavo = enhavo.replace(/\./g,'．');
	enhavo = enhavo.replace(/\,/g,'，');
	enhavo = enhavo.replace(/\?/g,'？');
	enhavo = enhavo.replace(/\!/g,'！');
	enhavo = enhavo.replace(/\"/g,'”');
	enhavo = enhavo.replace(/\'/g,'’');

	enhavo = enhavo.replace(/a/g,'ａ').replace(/A/g,'Ａ');
	enhavo = enhavo.replace(/b/g,'ｂ').replace(/B/g,'Ｂ');
	enhavo = enhavo.replace(/c/g,'ｃ').replace(/C/g,'Ｃ');
	enhavo = enhavo.replace(/d/g,'ｄ').replace(/D/g,'Ｄ');
	enhavo = enhavo.replace(/e/g,'ｅ').replace(/E/g,'Ｅ');
	enhavo = enhavo.replace(/f/g,'ｆ').replace(/F/g,'Ｆ');
	enhavo = enhavo.replace(/g/g,'ｇ').replace(/G/g,'Ｇ');
	enhavo = enhavo.replace(/h/g,'ｈ').replace(/H/g,'Ｈ');
	enhavo = enhavo.replace(/i/g,'ｉ').replace(/I/g,'Ｉ');
	enhavo = enhavo.replace(/j/g,'ｊ').replace(/J/g,'Ｊ');
	enhavo = enhavo.replace(/k/g,'ｋ').replace(/K/g,'Ｋ');
	enhavo = enhavo.replace(/l/g,'ｌ').replace(/L/g,'Ｌ');
	enhavo = enhavo.replace(/m/g,'ｍ').replace(/M/g,'Ｍ');
	enhavo = enhavo.replace(/n/g,'ｎ').replace(/N/g,'Ｎ');
	enhavo = enhavo.replace(/o/g,'ｏ').replace(/O/g,'Ｏ');
	enhavo = enhavo.replace(/p/g,'ｐ').replace(/P/g,'Ｐ');
	enhavo = enhavo.replace(/q/g,'ｑ').replace(/Q/g,'Ｑ');
	enhavo = enhavo.replace(/r/g,'ｒ').replace(/R/g,'Ｒ');
	enhavo = enhavo.replace(/s/g,'ｓ').replace(/S/g,'Ｓ');
	enhavo = enhavo.replace(/t/g,'ｔ').replace(/T/g,'Ｔ');
	enhavo = enhavo.replace(/u/g,'ｕ').replace(/U/g,'Ｕ');
	enhavo = enhavo.replace(/v/g,'ｖ').replace(/V/g,'Ｖ');
	enhavo = enhavo.replace(/w/g,'ｗ').replace(/W/g,'Ｗ');
	enhavo = enhavo.replace(/x/g,'ｘ').replace(/X/g,'Ｘ');
	enhavo = enhavo.replace(/y/g,'ｙ').replace(/Y/g,'Ｙ');
	enhavo = enhavo.replace(/z/g,'ｚ').replace(/Z/g,'Ｚ');

	enhavo = enhavo.replace(/ĉ/g,'㍍').replace(/Ĉ/g,'㌢');
	enhavo = enhavo.replace(/ĝ/g,'㌔').replace(/Ĝ/g,'㌘');
	enhavo = enhavo.replace(/ĥ/g,'㌃').replace(/Ĥ/g,'㌶');
	enhavo = enhavo.replace(/ĵ/g,'㌍').replace(/Ĵ/g,'㌻');
	enhavo = enhavo.replace(/ŝ/g,'㌫').replace(/Ŝ/g,'㍗');
	enhavo = enhavo.replace(/ŭ/g,'㌦').replace(/Ŭ/g,'㌧');
	enhavo = enhavo.replace(/\¥/g,'㍊');

	elemento('enhavo').value = enhavo;
	elemento('revertuMultBajtoj').disabled = undefined;
}

function revertuMultBajtoj() {
	elemento('enhavo').value = juliamoInversigo;
	katakanigoInversigo = '';
	elemento('revertu').disabled = 'disabled';
	elemento('revertuMultBajtoj').disabled = 'disabled';
}

function malgranda() {
	tiparaGrandeco--;
	if (tiparaGrandeco <= 0) {
		tiparaGrandeco = 1;
	}
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function granda() {
	tiparaGrandeco++;
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function agorduTiparaGrandeco(grandeco) {
	tiparaGrandeco = grandeco;
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function uzuJuliamoTiparon() {
	var juliamo = elemento('juliamo').checked;
	var enhavo = elemento('enhavo');
	if (juliamo) {
		enhavo.setAttribute('class', 'juliamo enhavo');
	} else {
		enhavo.setAttribute('class', 'enhavo');
	}
}

function elektuTiparon(tiparo) {
	var tiparoElektilo = elemento('tiparo');
	tiparoElektilo.setAttribute('class', tiparo);

	var enhavo = elemento('enhavo');
	enhavo.setAttribute('class', tiparo + ' enhavo');
}

function malshaltuChiujn() {
	elemento('anstatauigo').checked = false;
	elemento('qtohh').checked = false;
	elemento('xtogh').checked = false;
	elemento('ytojh').checked = false;
	elemento('grekaj').checked = false;
	elemento('h_sistemo').checked = false;
	elemento('x_sistemo').checked = false;
	elemento('plilongigita_h_sistemo').checked = false;
	elemento('pre_x_sistemo').checked = false;
	elemento('q_sistemo').checked = false;
	elemento('w_sistemo').checked = false;
	elemento('y_sistemo').checked = false;
	elemento('kareto_sistemo').checked = false;
	elemento('pre_kareto_sistemo').checked = false;
	elemento('apostrophe_sistemo').checked = false;
	elemento('pre_apostrophe_sistemo').checked = false;
	elemento('angla_stila_sistemo').checked = false;
	elemento('malregula_sistemo').checked = false;
	elemento('malregula_sistemo_2').checked = false;
	elemento('nova_helpalfabeto').checked = false;
	elemento('pli_granda_sistemo').checked = false;

	sistemoElectita();
}

function sistemoElectita() {
	var electitaj = 0;

	electitaj += elemento('anstatauigo').checked ? 1 : 0;
	electitaj += elemento('qtohh').checked ? 1 : 0;
	electitaj += elemento('xtogh').checked ? 1 : 0;
	electitaj += elemento('ytojh').checked ? 1 : 0;
	electitaj += elemento('grekaj').checked ? 1 : 0;
	electitaj += elemento('h_sistemo').checked ? 1 : 0;
	electitaj += elemento('x_sistemo').checked ? 1 : 0;
	electitaj += elemento('plilongigita_h_sistemo').checked ? 1 : 0;
	electitaj += elemento('pre_x_sistemo').checked ? 1 : 0;
	electitaj += elemento('q_sistemo').checked ? 1 : 0;
	electitaj += elemento('w_sistemo').checked ? 1 : 0;
	electitaj += elemento('y_sistemo').checked ? 1 : 0;
	electitaj += elemento('kareto_sistemo').checked ? 1 : 0;
	electitaj += elemento('pre_kareto_sistemo').checked ? 1 : 0;
	electitaj += elemento('apostrophe_sistemo').checked ? 1 : 0;
	electitaj += elemento('pre_apostrophe_sistemo').checked ? 1 : 0;
	electitaj += elemento('angla_stila_sistemo').checked ? 1 : 0;
	electitaj += elemento('malregula_sistemo').checked ? 1 : 0;
	electitaj += elemento('malregula_sistemo_2').checked ? 1 : 0;
	electitaj += elemento('nova_helpalfabeto').checked ? 1 : 0;
	electitaj += elemento('pli_granda_sistemo').checked ? 1 : 0;

	if (electitaj == 1) {
		elemento('sistemo_electita').innerHTML = "" + 1 + " sistemo elektita";
	} else {
		elemento('sistemo_electita').innerHTML = "" + electitaj + " sistemoj elektitaj";
	}
}