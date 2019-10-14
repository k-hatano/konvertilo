
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
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';

	var enhavo = elemento('enhavo').value;
	elemento('enhavo').value = hodiaux() + "\r\r" + enhavo; 
}

function elemento(nomo) {
	return document.getElementById(nomo);
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
	var x_sistemo = elemento('x_sistemo').checked;

	if (x_sistemo) {
		elemento('pre_x_sistemo').checked = false;
	}
}

function preXSistemoKontrolita() {
	var pre_x_sistemo = elemento('pre_x_sistemo').checked;

	if (pre_x_sistemo) {
		elemento('x_sistemo').checked = false;
	}
}

function konvertuAlEsperanto() {
	var enhavo = elemento('enhavo').value;

	var anstatauigo = elemento('anstatauigo').checked;
	var grekaj = elemento('grekaj').checked;
	var h_sistemo = elemento('h_sistemo').checked;
	var x_sistemo = elemento('x_sistemo').checked;
	var plilongigita_h_sistemo = elemento('plilongigita_h_sistemo').checked;
	var pre_x_sistemo = elemento('pre_x_sistemo').checked;
	var q_sistemo = elemento('q_sistemo').checked;
	var w_sistemo = elemento('w_sistemo').checked;
	var y_sistemo = elemento('y_sistemo').checked;
	var kareto_sistemo = elemento('kareto_sistemo').checked;
	var pre_kareto_sistemo = elemento('pre_kareto_sistemo').checked;
	var apostrophe_sistemo = elemento('apostrophe_sistemo').checked;
	var pre_apostrophe_sistemo = elemento('pre_apostrophe_sistemo').checked;
	var angla_stila_sistemo = elemento('angla_stila_sistemo').checked;
	var malregula_sistemo = elemento('malregula_sistemo').checked;

	if (h_sistemo) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ')
					   .replace(/g[hH]/g,'ĝ')
					   .replace(/h[hH]/g,'ĥ')
					   .replace(/j[hH]/g,'ĵ')
					   .replace(/s[hH]/g,'ŝ')
					   .replace(/C[hH]/g,'Ĉ')
					   .replace(/G[hH]/g,'Ĝ')
					   .replace(/H[hH]/g,'Ĥ')
					   .replace(/J[hH]/g,'Ĵ')
					   .replace(/S[hH]/g,'Ŝ');
	}

	if (x_sistemo) {
		enhavo = enhavo.replace(/c[xX]/g,'ĉ')
					   .replace(/g[xX]/g,'ĝ')
					   .replace(/h[xX]/g,'ĥ')
					   .replace(/j[xX]/g,'ĵ')
					   .replace(/s[xX]/g,'ŝ')
					   .replace(/[uvw][xX]/g,'ŭ')
					   .replace(/C[xX]/g,'Ĉ')
					   .replace(/G[xX]/g,'Ĝ')
					   .replace(/H[xX]/g,'Ĥ')
					   .replace(/J[xX]/g,'Ĵ')
					   .replace(/S[xX]/g,'Ŝ')
					   .replace(/[UVW][xX]/g,'Ŭ');
	}

	if (kareto_sistemo) {
		enhavo = enhavo.replace(/c\^/g,'ĉ')
					   .replace(/g\^/g,'ĝ')
					   .replace(/h\^/g,'ĥ')
					   .replace(/j\^/g,'ĵ')
					   .replace(/s\^/g,'ŝ')
					   .replace(/[uvw][\^\~]/g,'ŭ')
					   .replace(/C\^/g,'Ĉ')
					   .replace(/G\^/g,'Ĝ')
					   .replace(/H\^/g,'Ĥ')
					   .replace(/J\^/g,'Ĵ')
					   .replace(/S\^/g,'Ŝ')
					   .replace(/[UVW][\^\~]/g,'Ŭ');
	}

	if (anstatauigo) {
		enhavo = enhavo.replace(/w/g,'ŭ')
					   .replace(/W/g,'Ŭ');
	}

	if (grekaj) {
		enhavo = enhavo.replace(/ξ/g,'ĉ')
					   .replace(/γ/g,'ĝ')
					   .replace(/χ/g,'ĥ')
					   .replace(/θ/g,'ĵ')
					   .replace(/σ/g,'ŝ')
					   .replace(/υ/g,'ŭ')
					   .replace(/Ξ/g,'Ĉ')
					   .replace(/Γ/g,'Ĝ')
					   .replace(/Χ/g,'Ĥ')
					   .replace(/Θ/g,'Ĵ')
					   .replace(/Σ/g,'Ŝ')
					   .replace(/Υ/g,'Ŭ');
	}

	if (plilongigita_h_sistemo) {
		enhavo = enhavo.replace(/k[hH]/g,'ĥ')
					   .replace(/v[hH]/g,'ŭ')
					   .replace(/K[xX]/g,'Ĥ')
					   .replace(/V[xX]/g,'Ŭ');
	}

	if (pre_x_sistemo) {
		enhavo = enhavo.replace(/x[cC]/g,'ĉ')
					   .replace(/x[gG]/g,'ĝ')
					   .replace(/x[hH]/g,'ĥ')
					   .replace(/x[jJ]/g,'ĵ')
					   .replace(/x[sS]/g,'ŝ')
					   .replace(/x[uvwUVW]/g,'ŭ')
					   .replace(/X[cC]/g,'Ĉ')
					   .replace(/X[gG]/g,'Ĝ')
					   .replace(/X[hH]/g,'Ĥ')
					   .replace(/X[jJ]/g,'Ĵ')
					   .replace(/X[sS]/g,'Ŝ')
					   .replace(/X[uvwUVW]/g,'Ŭ');
	}

	if (q_sistemo) {
		enhavo = enhavo.replace(/c[qQ]/g,'ĉ')
					   .replace(/g[qQ]/g,'ĝ')
					   .replace(/h[qQ]/g,'ĥ')
					   .replace(/j[qQ]/g,'ĵ')
					   .replace(/s[qQ]/g,'ŝ')
					   .replace(/[uvw][qQ]/g,'ŭ')
					   .replace(/C[qQ]/g,'Ĉ')
					   .replace(/G[qQ]/g,'Ĝ')
					   .replace(/H[qQ]/g,'Ĥ')
					   .replace(/J[qQ]/g,'Ĵ')
					   .replace(/S[qQ]/g,'Ŝ')
					   .replace(/[UVW][qQ]/g,'Ŭ');
	}

	if (w_sistemo) {
		enhavo = enhavo.replace(/c[wW]/g,'ĉ')
					   .replace(/g[wW]/g,'ĝ')
					   .replace(/h[wW]/g,'ĥ')
					   .replace(/j[wW]/g,'ĵ')
					   .replace(/s[wW]/g,'ŝ')
					   .replace(/[uv][wW]/g,'ŭ')
					   .replace(/C[wW]/g,'Ĉ')
					   .replace(/G[wW]/g,'Ĝ')
					   .replace(/H[wW]/g,'Ĥ')
					   .replace(/J[wW]/g,'Ĵ')
					   .replace(/S[wW]/g,'Ŝ')
					   .replace(/[UV][wW]/g,'Ŭ');
	}

	if (y_sistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ')
					   .replace(/g[yY]/g,'ĝ')
					   .replace(/h[yY]/g,'ĥ')
					   .replace(/j[yY]/g,'ĵ')
					   .replace(/s[yY]/g,'ŝ')
					   .replace(/[uvw][yY]/g,'ŭ')
					   .replace(/C[yY]/g,'Ĉ')
					   .replace(/G[yY]/g,'Ĝ')
					   .replace(/H[yY]/g,'Ĥ')
					   .replace(/J[yY]/g,'Ĵ')
					   .replace(/S[yY]/g,'Ŝ')
					   .replace(/[UVW][yY]/g,'Ŭ');
	}

	if (pre_kareto_sistemo) {
		enhavo = enhavo.replace(/\^c/g,'ĉ')
					   .replace(/\^g/g,'ĝ')
					   .replace(/\^h/g,'ĥ')
					   .replace(/\^j/g,'ĵ')
					   .replace(/\^s/g,'ŝ')
					   .replace(/[\^\~][uvw]/g,'ŭ')
					   .replace(/\^C/g,'Ĉ')
					   .replace(/\^G/g,'Ĝ')
					   .replace(/\^H/g,'Ĥ')
					   .replace(/\^J/g,'Ĵ')
					   .replace(/\^S/g,'Ŝ')
					   .replace(/[\^\~][UVW]/g,'Ŭ');
	}

	if (apostrophe_sistemo) {
		enhavo = enhavo.replace(/c\'/g,'ĉ')
					   .replace(/g\'/g,'ĝ')
					   .replace(/h\'/g,'ĥ')
					   .replace(/j\'/g,'ĵ')
					   .replace(/s\'/g,'ŝ')
					   .replace(/[uvw]\'/g,'ŭ')
					   .replace(/C\'/g,'Ĉ')
					   .replace(/G\'/g,'Ĝ')
					   .replace(/H\'/g,'Ĥ')
					   .replace(/J\'/g,'Ĵ')
					   .replace(/S\'/g,'Ŝ')
					   .replace(/[UVW]\'/g,'Ŭ');
	}

	if (pre_apostrophe_sistemo) {
		enhavo = enhavo.replace(/\'c/g,'ĉ')
					   .replace(/\'g/g,'ĝ')
					   .replace(/\'h/g,'ĥ')
					   .replace(/\'j/g,'ĵ')
					   .replace(/\'s/g,'ŝ')
					   .replace(/\'[uvw]/g,'ŭ')
					   .replace(/\'C/g,'Ĉ')
					   .replace(/\'G/g,'Ĝ')
					   .replace(/\'H/g,'Ĥ')
					   .replace(/\'J/g,'Ĵ')
					   .replace(/\'S/g,'Ŝ')
					   .replace(/\'[UVW]/g,'Ŭ');
	}

	if (angla_stila_sistemo) {
		enhavo = enhavo.replace(/c[hH]/g,'ĉ')
					   .replace(/t[sS]/g,'c')
					   .replace(/d[gG]/g,'ĝ')
					   .replace(/k[hH]/g,'ĥ')
					   .replace(/j/g,'ĵ')
					   .replace(/y/g,'j')
					   .replace(/s[hH]/g,'ŝ')
					   .replace(/w/g,'ŭ')
					   .replace(/C[hH]/g,'Ĉ')
					   .replace(/T[sS]/g,'C')
					   .replace(/D[gG]/g,'Ĝ')
					   .replace(/K[hH]/g,'Ĥ')
					   .replace(/J/g,'Ĵ')
					   .replace(/Y/g,'J')
					   .replace(/S[hH]/g,'Ŝ')
					   .replace(/W/g,'Ŭ');
	}

	if (malregula_sistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ')
					   .replace(/x[gG]/g,'ĝ')
					   .replace(/q[hH]/g,'ĥ')
					   .replace(/x[jJ]/g,'ĵ')
					   .replace(/s[yY]/g,'ŝ')
					   .replace(/w/g,'ŭ')
					   .replace(/C[yY]/g,'Ĉ')
					   .replace(/X[gG]/g,'Ĝ')
					   .replace(/Q[hH]/g,'Ĥ')
					   .replace(/X[jJ]/g,'Ĵ')
					   .replace(/S[yY]/g,'Ŝ')
					   .replace(/W/g,'Ŭ');
	}

	elemento('enhavo').value = enhavo;
}

function konvertuAlAscii() {
	var enhavo = elemento('enhavo').value;

	var anstatauigo = elemento('anstatauigo').checked;
	var grekaj = elemento('grekaj').checked;
	var h_sistemo = elemento('h_sistemo').checked;
	var x_sistemo = elemento('x_sistemo').checked;
	var plilongigita_h_sistemo = elemento('plilongigita_h_sistemo').checked;
	var pre_x_sistemo = elemento('pre_x_sistemo').checked;
	var q_sistemo = elemento('q_sistemo').checked;
	var w_sistemo = elemento('w_sistemo').checked;
	var y_sistemo = elemento('y_sistemo').checked;
	var kareto_sistemo = elemento('kareto_sistemo').checked;
	var pre_kareto_sistemo = elemento('pre_kareto_sistemo').checked;
	var apostrophe_sistemo = elemento('apostrophe_sistemo').checked;
	var pre_apostrophe_sistemo = elemento('pre_apostrophe_sistemo').checked;
	var angla_stila_sistemo = elemento('angla_stila_sistemo').checked;
	var malregula_sistemo = elemento('malregula_sistemo').checked;

	if (h_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'ch')
					   .replace(/ĝ/g,'gh')
					   .replace(/ĥ/g,'hh')
					   .replace(/ĵ/g,'jh')
					   .replace(/ŝ/g,'sh')
					   .replace(/Ĉ/g,'Ch')
					   .replace(/Ĝ/g,'Gh')
					   .replace(/Ĥ/g,'Hh')
					   .replace(/Ĵ/g,'Jh')
					   .replace(/Ŝ/g,'Sh');
	}

	if (x_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cx')
					   .replace(/ĝ/g,'gx')
					   .replace(/ĥ/g,'hx')
					   .replace(/ĵ/g,'jx')
					   .replace(/ŝ/g,'sx')
					   .replace(/ŭ/g,'ux')
					   .replace(/Ĉ/g,'Cx')
					   .replace(/Ĝ/g,'Gx')
					   .replace(/Ĥ/g,'Hx')
					   .replace(/Ĵ/g,'Jx')
					   .replace(/Ŝ/g,'Sx')
					   .replace(/Ŭ/g,'Ux');
	}

	if (kareto_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c^')
					   .replace(/ĝ/g,'g^')
					   .replace(/ĥ/g,'h^')
					   .replace(/ĵ/g,'j^')
					   .replace(/ŝ/g,'s^')
					   .replace(/ŭ/g,'u~')
					   .replace(/Ĉ/g,'C^')
					   .replace(/Ĝ/g,'G^')
					   .replace(/Ĥ/g,'H^')
					   .replace(/Ĵ/g,'J^')
					   .replace(/Ŝ/g,'S^')
					   .replace(/Ŭ/g,'U~');
	}

	if (anstatauigo) {
		enhavo = enhavo.replace(/ŭ/g,'w')
					   .replace(/Ŭ/g,'W');
	}

	if (grekaj) {
		enhavo = enhavo.replace(/ĉ/g,'ξ')
					   .replace(/ĝ/g,'γ')
					   .replace(/ĥ/g,'χ')
					   .replace(/ĵ/g,'θ')
					   .replace(/ŝ/g,'σ')
					   .replace(/ŭ/g,'υ')
					   .replace(/Ĉ/g,'Ξ')
					   .replace(/Ĝ/g,'Γ')
					   .replace(/Ĥ/g,'Χ')
					   .replace(/Ĵ/g,'Θ')
					   .replace(/Ŝ/g,'Σ')
					   .replace(/Ŭ/g,'Υ');
	}

	if (q_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cq')
					   .replace(/ĝ/g,'gq')
					   .replace(/ĥ/g,'hq')
					   .replace(/ĵ/g,'jq')
					   .replace(/ŝ/g,'sq')
					   .replace(/ŭ/g,'uq')
					   .replace(/Ĉ/g,'Cq')
					   .replace(/Ĝ/g,'Gq')
					   .replace(/Ĥ/g,'Hq')
					   .replace(/Ĵ/g,'Jq')
					   .replace(/Ŝ/g,'Sq')
					   .replace(/Ŭ/g,'Uq');
	}

	if (plilongigita_h_sistemo) {
		enhavo = enhavo.replace(/ĥ/g,'kh')
					   .replace(/ŭ/g,'vh')
					   .replace(/Ĥ/g,'Kh')
					   .replace(/Ŭ/g,'Vh');
	}

	if (pre_x_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'xc')
					   .replace(/ĝ/g,'xg')
					   .replace(/ĥ/g,'xh')
					   .replace(/ĵ/g,'xj')
					   .replace(/ŝ/g,'xs')
					   .replace(/ŭ/g,'xu')
					   .replace(/Ĉ/g,'Xc')
					   .replace(/Ĝ/g,'Xg')
					   .replace(/Ĥ/g,'Xh')
					   .replace(/Ĵ/g,'Xj')
					   .replace(/Ŝ/g,'Xs')
					   .replace(/Ŭ/g,'Xu');
	}

	if (w_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cw')
					   .replace(/ĝ/g,'gw')
					   .replace(/ĥ/g,'hw')
					   .replace(/ĵ/g,'jw')
					   .replace(/ŝ/g,'sw')
					   .replace(/ŭ/g,'uw')
					   .replace(/Ĉ/g,'Cw')
					   .replace(/Ĝ/g,'Gw')
					   .replace(/Ĥ/g,'Hw')
					   .replace(/Ĵ/g,'Jw')
					   .replace(/Ŝ/g,'Sw')
					   .replace(/Ŭ/g,'Uw');
	}

	if (y_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cy')
					   .replace(/ĝ/g,'gy')
					   .replace(/ĥ/g,'hy')
					   .replace(/ĵ/g,'jy')
					   .replace(/ŝ/g,'sy')
					   .replace(/ŭ/g,'uy')
					   .replace(/Ĉ/g,'Cy')
					   .replace(/Ĝ/g,'Gy')
					   .replace(/Ĥ/g,'Hy')
					   .replace(/Ĵ/g,'Jy')
					   .replace(/Ŝ/g,'Sy')
					   .replace(/Ŭ/g,'Uy');
	}

	if (pre_kareto_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'^c')
					   .replace(/ĝ/g,'^g')
					   .replace(/ĥ/g,'^h')
					   .replace(/ĵ/g,'^j')
					   .replace(/ŝ/g,'^s')
					   .replace(/ŭ/g,'~u')
					   .replace(/Ĉ/g,'^C')
					   .replace(/Ĝ/g,'^G')
					   .replace(/Ĥ/g,'^H')
					   .replace(/Ĵ/g,'^J')
					   .replace(/Ŝ/g,'^S')
					   .replace(/Ŭ/g,'~U');
	}

	if (apostrophe_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'c\'')
					   .replace(/ĝ/g,'g\'')
					   .replace(/ĥ/g,'h\'')
					   .replace(/ĵ/g,'j\'')
					   .replace(/ŝ/g,'s\'')
					   .replace(/ŭ/g,'u\'')
					   .replace(/Ĉ/g,'C\'')
					   .replace(/Ĝ/g,'G\'')
					   .replace(/Ĥ/g,'H\'')
					   .replace(/Ĵ/g,'J\'')
					   .replace(/Ŝ/g,'S\'')
					   .replace(/Ŭ/g,'U\'');
	}

	if (pre_apostrophe_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'\'c')
					   .replace(/ĝ/g,'\'g')
					   .replace(/ĥ/g,'\'h')
					   .replace(/ĵ/g,'\'j')
					   .replace(/ŝ/g,'\'s')
					   .replace(/ŭ/g,'\'u')
					   .replace(/Ĉ/g,'\'C')
					   .replace(/Ĝ/g,'\'G')
					   .replace(/Ĥ/g,'\'H')
					   .replace(/Ĵ/g,'\'J')
					   .replace(/Ŝ/g,'\'S')
					   .replace(/Ŭ/g,'\'U');
	}

	if (angla_stila_sistemo) {
		enhavo = enhavo.replace(/c/g,'ts')
					   .replace(/ĉ/g,'ch')
					   .replace(/ĝ/g,'dg')
					   .replace(/ĥ/g,'kh')
					   .replace(/j/g,'y')
					   .replace(/ĵ/g,'j')
					   .replace(/ŝ/g,'sh')
					   .replace(/ŭ/g,'w')
					   .replace(/C/g,'Ts')
					   .replace(/Ĉ/g,'Ch')
					   .replace(/Ĝ/g,'Dg')
					   .replace(/Ĥ/g,'Kh')
					   .replace(/J/g,'Y')
					   .replace(/Ĵ/g,'J')
					   .replace(/Ŝ/g,'Sh')
					   .replace(/Ŭ/g,'W');
	}

	if (malregula_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'cy')
					   .replace(/ĝ/g,'xg')
					   .replace(/ĥ/g,'qh')
					   .replace(/ĵ/g,'xj')
					   .replace(/ŝ/g,'sy')
					   .replace(/ŭ/g,'w')
					   .replace(/Ĉ/g,'Cy')
					   .replace(/Ĝ/g,'Xg')
					   .replace(/Ĥ/g,'Qh')
					   .replace(/Ĵ/g,'Xj')
					   .replace(/Ŝ/g,'Sy')
					   .replace(/Ŭ/g,'W');
	}

	elemento('enhavo').value = enhavo;
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
	var enhavo = elemento('enhavo').value;
	var reduktu_dependantajn = elemento('reduktu_dependantajn').checked;
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
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Bb]/g,'ブ');
	} else {
		enhavo = enhavo.replace(/[Bb]/g,'ㇷ゙');
	}

	enhavo = enhavo.replace(/[Cc][Aa]/g,'ツァ');
	enhavo = enhavo.replace(/[Cc][Ii]/g,'ツィ');
	enhavo = enhavo.replace(/[Cc][Uu]/g,'ツ');
	enhavo = enhavo.replace(/[Cc][Ee]/g,'ツェ');
	enhavo = enhavo.replace(/[Cc][Oo]/g,'ツォ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Cc]/g,'ツ');
	} else {
		enhavo = enhavo.replace(/[Cc]/g,'ツ゚');
	}

	enhavo = enhavo.replace(/[Ĉĉ][Aa]/g,'チャ');
	enhavo = enhavo.replace(/[Ĉĉ][Ii]/g,'チ');
	enhavo = enhavo.replace(/[Ĉĉ][Uu]/g,'チュ');
	enhavo = enhavo.replace(/[Ĉĉ][Ee]/g,'チェ');
	enhavo = enhavo.replace(/[Ĉĉ][Oo]/g,'チョ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Ĉĉ]/g,'チュ');
	} else {
		enhavo = enhavo.replace(/[Ĉĉ]/g,'ツ゚ュ');
	}

	enhavo = enhavo.replace(/[Dd][Aa]/g,'ダ');
	enhavo = enhavo.replace(/[Dd][Ii]/g,'ディ');
	enhavo = enhavo.replace(/[Dd][Uu]/g,'ドゥ');
	enhavo = enhavo.replace(/[Dd][Ee]/g,'デ');
	enhavo = enhavo.replace(/[Dd][Oo]/g,'ド');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Dd]/g,'ドゥ');
	} else {
		enhavo = enhavo.replace(/[Dd]/g,'ㇳ゙');
	}

	enhavo = enhavo.replace(/[Ff][Aa]/g,'ファ');
	enhavo = enhavo.replace(/[Ff][Ii]/g,'フィ');
	enhavo = enhavo.replace(/[Ff][Uu]/g,'フ');
	enhavo = enhavo.replace(/[Ff][Ee]/g,'フェ');
	enhavo = enhavo.replace(/[Ff][Oo]/g,'フォ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Ff]/g,'フ');
	} else {
		enhavo = enhavo.replace(/[Ff]/g,'ㇷ');
	}

	enhavo = enhavo.replace(/[Gg][Aa]/g,'ガ');
	enhavo = enhavo.replace(/[Gg][Ii]/g,'ギ');
	enhavo = enhavo.replace(/[Gg][Uu]/g,'グ');
	enhavo = enhavo.replace(/[Gg][Ee]/g,'ゲ');
	enhavo = enhavo.replace(/[Gg][Oo]/g,'ゴ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Gg]/g,'グ');
	} else {
		enhavo = enhavo.replace(/[Gg]/g,'ㇰ゙');
	}

	enhavo = enhavo.replace(/[Ĝĝ][Aa]/g,'ヂャ');
	enhavo = enhavo.replace(/[Ĝĝ][Ii]/g,'ヂ');
	enhavo = enhavo.replace(/[Ĝĝ][Uu]/g,'ヂュ');
	enhavo = enhavo.replace(/[Ĝĝ][Ee]/g,'ヂェ');
	enhavo = enhavo.replace(/[Ĝĝ][Oo]/g,'ヂョ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Ĝĝ]/g,'ヂュ');
	} else {
		enhavo = enhavo.replace(/[Ĝĝ]/g,'ッ゙ュ');
	}

	enhavo = enhavo.replace(/[Hh][Aa]/g,'ハ');
	enhavo = enhavo.replace(/[Hh][Ii]/g,'ヒ');
	enhavo = enhavo.replace(/[Hh][Uu]/g,'ホゥ');
	enhavo = enhavo.replace(/[Hh][Ee]/g,'ヘ');
	enhavo = enhavo.replace(/[Hh][Oo]/g,'ホ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Hh]/g,'ホ');
	} else {
		enhavo = enhavo.replace(/[Hh]/g,'ㇹ');
	}

	if (reduktu_dependantajn) {
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
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Ĵĵ]/g,'ジ');
	} else {
		enhavo = enhavo.replace(/[Ĵĵ]/g,'ㇱ゙');
	}

	enhavo = enhavo.replace(/[Kk][Aa]/g,'カ');
	enhavo = enhavo.replace(/[Kk][Ii]/g,'キ');
	enhavo = enhavo.replace(/[Kk][Uu]/g,'ク');
	enhavo = enhavo.replace(/[Kk][Ee]/g,'ケ');
	enhavo = enhavo.replace(/[Kk][Oo]/g,'コ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Kk]/g,'ク');
	} else {
		enhavo = enhavo.replace(/[Kk]/g,'ㇰ');
	}


	if (reduktu_dependantajn) {
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
	if (reduktu_dependantajn) {
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
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Pp]/g,'プ');
	} else {
		enhavo = enhavo.replace(/[Pp]/g,'ㇷ゚');
	}

	enhavo = enhavo.replace(/[Rr][Aa]/g,'ラ');
	enhavo = enhavo.replace(/[Rr][Ii]/g,'リ');
	enhavo = enhavo.replace(/[Rr][Uu]/g,'ル');
	enhavo = enhavo.replace(/[Rr][Ee]/g,'レ');
	enhavo = enhavo.replace(/[Rr][Oo]/g,'ロ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Rr]/g,'ラ');
	} else {
		enhavo = enhavo.replace(/[Rr]/g,'ㇻ');
	}

	enhavo = enhavo.replace(/[Ss][Aa]/g,'サ');
	enhavo = enhavo.replace(/[Ss][Ii]/g,'スィ');
	enhavo = enhavo.replace(/[Ss][Uu]/g,'ス');
	enhavo = enhavo.replace(/[Ss][Ee]/g,'セ');
	enhavo = enhavo.replace(/[Ss][Oo]/g,'ソ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Ss]/g,'ス');
	} else {
		enhavo = enhavo.replace(/[Ss]/g,'ㇲ');
	}

	enhavo = enhavo.replace(/[Ŝŝ][Aa]/g,'シャ');
	enhavo = enhavo.replace(/[Ŝŝ][Ii]/g,'シ');
	enhavo = enhavo.replace(/[Ŝŝ][Uu]/g,'シュ');
	enhavo = enhavo.replace(/[Ŝŝ][Ee]/g,'シェ');
	enhavo = enhavo.replace(/[Ŝŝ][Oo]/g,'ショ');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Ŝŝ]/g,'シ');
	} else {
		enhavo = enhavo.replace(/[Ŝŝ]/g,'ㇱ');
	}

	enhavo = enhavo.replace(/[Tt][Aa]/g,'タ');
	enhavo = enhavo.replace(/[Tt][Ii]/g,'ティ');
	enhavo = enhavo.replace(/[Tt][Uu]/g,'トゥ');
	enhavo = enhavo.replace(/[Tt][Ee]/g,'テ');
	enhavo = enhavo.replace(/[Tt][Oo]/g,'ト');
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Tt]/g,'ト');
	} else {
		enhavo = enhavo.replace(/[Tt]/g,'ㇳ');
	}


	if (reduktu_dependantajn) {
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

	if (reduktu_dependantajn) {
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
	if (reduktu_dependantajn) {
		enhavo = enhavo.replace(/[Zz]/g,'ズ');
	} else {
		enhavo = enhavo.replace(/[Zz]/g,'ㇲ゛');
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
	enhavo = enhavo.replace(/\'/g,'’');

	enhavo = enhavo.replace(/\-/g,'ー');

	elemento('enhavo').value = enhavo;
}

function malgranda() {
	tiparaGrandeco--;
	if (tiparaGrandeco <= 0) {
		tiparaGrandeco = 1;
	}
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function dekdu() {
	tiparaGrandeco = 12;
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function dekkvar() {
	tiparaGrandeco = 14;
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function dekok() {
	tiparaGrandeco = 18;
	elemento('enhavo').style.fontSize = tiparaGrandeco + 'px';
}

function granda() {
	tiparaGrandeco++;
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

function malsyaltuCyiujn() {
	elemento('anstatauigo').checked = false;
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
}


