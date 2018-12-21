
function konvertuAlEsperanto() {
	var enhavo = document.getElementById('enhavo').value;

	var h_sistemo = document.getElementById('h_sistemo').checked;
	var x_sistemo = document.getElementById('x_sistemo').checked;
	var y_sistemo = document.getElementById('y_sistemo').checked;
	var kareto_sistemo = document.getElementById('kareto_sistemo').checked;

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
		enhavo = enhavo.replace(/[uvW][xX]/g,'ŭ');
		enhavo = enhavo.replace(/C[xX]/g,'Ĉ');
		enhavo = enhavo.replace(/G[xX]/g,'Ĝ');
		enhavo = enhavo.replace(/H[xX]/g,'Ĥ');
		enhavo = enhavo.replace(/J[xX]/g,'Ĵ');
		enhavo = enhavo.replace(/S[xX]/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW][xX]/g,'Ŭ');
	}

	if (y_sistemo) {
		enhavo = enhavo.replace(/c[yY]/g,'ĉ');
		enhavo = enhavo.replace(/g[yY]/g,'ĝ');
		enhavo = enhavo.replace(/h[yY]/g,'ĥ');
		enhavo = enhavo.replace(/j[yY]/g,'ĵ');
		enhavo = enhavo.replace(/s[yY]/g,'ŝ');
		enhavo = enhavo.replace(/[uvW][yY]/g,'ŭ');
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
		enhavo = enhavo.replace(/[uvW][\^\~]/g,'ŭ');
		enhavo = enhavo.replace(/C\^/g,'Ĉ');
		enhavo = enhavo.replace(/G\^/g,'Ĝ');
		enhavo = enhavo.replace(/H\^/g,'Ĥ');
		enhavo = enhavo.replace(/J\^/g,'Ĵ');
		enhavo = enhavo.replace(/S\^/g,'Ŝ');
		enhavo = enhavo.replace(/[UVW]\^/g,'Ŭ');
	}

	document.getElementById('enhavo').value = enhavo;
}

function konvertuAlAscii() {
	var enhavo = document.getElementById('enhavo').value;

	var h_sistemo = document.getElementById('h_sistemo').checked;
	var x_sistemo = document.getElementById('x_sistemo').checked;
	var y_sistemo = document.getElementById('y_sistemo').checked;
	var kareto_sistemo = document.getElementById('kareto_sistemo').checked;

	if (h_sistemo) {
		enhavo = enhavo.replace(/ĉ/g,'ch');
		enhavo = enhavo.replace(/ĝ/g,'gh');
		enhavo = enhavo.replace(/ĥ/g,'hh');
		enhavo = enhavo.replace(/ĵ/g,'jh');
		enhavo = enhavo.replace(/ŝ/g,'sh');
		enhavo = enhavo.replace(/ŭ/g,'u');
		enhavo = enhavo.replace(/Ĉ/g,'Ch');
		enhavo = enhavo.replace(/Ĝ/g,'Gh');
		enhavo = enhavo.replace(/Ĥ/g,'Hh');
		enhavo = enhavo.replace(/Ĵ/g,'Jh');
		enhavo = enhavo.replace(/Ŝ/g,'Sh');
		enhavo = enhavo.replace(/Ŭ/g,'U');
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

	document.getElementById('enhavo').value = enhavo;
}




