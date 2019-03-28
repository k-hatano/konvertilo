
var tiparaGrandeco = 12;

onload = function() {
	document.getElementById('enhavo').style.fontSize = tiparaGrandeco + 'px';
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
	var h_sistemo = document.getElementById('h_sistemo').checked;
	var x_sistemo = document.getElementById('x_sistemo').checked;
	var pre_x_sistemo = document.getElementById('pre_x_sistemo').checked;
	var y_sistemo = document.getElementById('y_sistemo').checked;
	var kareto_sistemo = document.getElementById('kareto_sistemo').checked;
	var pre_kareto_sistemo = document.getElementById('pre_kareto_sistemo').checked;
	var apostrophe_sistemo = document.getElementById('apostrophe_sistemo').checked;
	var pre_apostrophe_sistemo = document.getElementById('pre_apostrophe_sistemo').checked;
	var angla_stila_sistemo = document.getElementById('angla_stila_sistemo').checked;

	if (anstatauigo) {
		enhavo = enhavo.replace(/w/g,'ŭ');
		enhavo = enhavo.replace(/W/g,'Ŭ');
	}

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

	document.getElementById('enhavo').value = enhavo;
}

function konvertuAlAscii() {
	var enhavo = document.getElementById('enhavo').value;

	var anstatauigo = document.getElementById('anstatauigo').checked;
	var h_sistemo = document.getElementById('h_sistemo').checked;
	var x_sistemo = document.getElementById('x_sistemo').checked;
	var pre_x_sistemo = document.getElementById('pre_x_sistemo').checked;
	var y_sistemo = document.getElementById('y_sistemo').checked;
	var kareto_sistemo = document.getElementById('kareto_sistemo').checked;
	var pre_kareto_sistemo = document.getElementById('pre_kareto_sistemo').checked;
	var apostrophe_sistemo = document.getElementById('apostrophe_sistemo').checked;
	var pre_apostrophe_sistemo = document.getElementById('pre_apostrophe_sistemo').checked;
	var angla_stila_sistemo = document.getElementById('angla_stila_sistemo').checked;

	if (anstatauigo) {
		enhavo = enhavo.replace(/ŭ/g,'w');
		enhavo = enhavo.replace(/Ŭ/g,'W');
	}

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

	document.getElementById('enhavo').value = enhavo;
}

function katakanigo() {
	var enhavo = document.getElementById('enhavo').value;

	enhavo = enhavo.replace(/[Bb][Aa]/g,'バ');
	enhavo = enhavo.replace(/[Bb][Ii]/g,'ベ');
	enhavo = enhavo.replace(/[Bb][Uu]/g,'ビ');
	enhavo = enhavo.replace(/[Bb][Ee]/g,'ボ');
	enhavo = enhavo.replace(/[Bb][Oo]/g,'ブ');
	enhavo = enhavo.replace(/[Bb]/g,'ㇷ゛');

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
	enhavo = enhavo.replace(/[Dd]/g,'ㇳ゛');

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
	enhavo = enhavo.replace(/[Gg]/g,'ㇰ゛');

	enhavo = enhavo.replace(/[Ĝĝ][Aa]/g,'ヂャ');
	enhavo = enhavo.replace(/[Ĝĝ][Ii]/g,'ヂ');
	enhavo = enhavo.replace(/[Ĝĝ][Uu]/g,'ヂュ');
	enhavo = enhavo.replace(/[Ĝĝ][Ee]/g,'ヂェ');
	enhavo = enhavo.replace(/[Ĝĝ][Oo]/g,'ヂョ');
	enhavo = enhavo.replace(/[Ĝĝ]/g,'ㇱ゛');

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
	enhavo = enhavo.replace(/[Ĵĵ]/g,'ㇱ゛');

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
	enhavo = enhavo.replace(/[Rr]/g,'ㇽ');

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
	enhavo = enhavo.replace(/[Vv]/g,'ゥ゛');

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
		enhavo.setAttribute('class', 'juliamo');
	} else {
		enhavo.removeAttribute('class', 'juliamo');
	}
}


