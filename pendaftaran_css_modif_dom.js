//global variable
var teks=/[^A-Za-z ]+/;
var angka=/[^0-9]+/;

var d = "2016-12-22";
var isitanggal=document.getElementById("tanggal");
isitanggal.value=d;
console.log(d);

function uppertext(tulisan){
	document.getElementById('nama').value=tulisan;
	document.getElementById('nama').value=document.getElementById('nama').value.toUpperCase();
}

function validasiteks(tulisan1){
	document.getElementById('nama').value=tulisan1;
	var element=document.getElementById('nama');
	element.value=element.value.replace(teks,"");
}

function validasiangka(tulisan3){
	document.getElementById('notelp').value=tulisan3;
	var element=document.getElementById('notelp');
	element.value=element.value.replace(angka,"");
}