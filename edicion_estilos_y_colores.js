/************************************************
Editor de esilos
Se agregaron nuevos colores para las fuentes
Author: ++
************************************************/

//++ Nuevos colores:

document.getElementById('CP').innerHTML = '<table border="0" cellspacing="2" cellpadding="0"><tbody><tr><td><a onclick="newColor1();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #109FA6;">&nbsp;</a></td><td><a onclick="newColor2();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #B300B3;">&nbsp;</a></td><td><a onclick="newColor3();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF99E5;">&nbsp;</a></td><td><a onclick="newColor4();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF4000;">&nbsp;</a></td><td><a onclick="newColor5();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #238C00;">&nbsp;</a></td><td><a onclick="newColor6();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF037F;">&nbsp;</a></td><td><a onclick="newColor7();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #00FFFF;">&nbsp;</a></td><td><a onclick="newColor8();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #007BFF;">&nbsp;</a></td><td><a onclick="newColor9();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #14CCD6;">&nbsp;</a></td><td><a onclick="newColor10();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #0056b2;">&nbsp;</a></td></tr><tr><td><a onclick="return IN.sCol(27);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #909090;">&nbsp;</a></td><td><a onclick="return IN.sCol(28);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF0300;">&nbsp;</a></td><td><a onclick="return IN.sCol(29);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF9A00;">&nbsp;</a></td><td><a onclick="return IN.sCol(30);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FFCD00;">&nbsp;</a></td><td><a onclick="return IN.sCol(31);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #C5EA35;">&nbsp;</a></td><td><a onclick="return IN.sCol(32);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #4BE22C;">&nbsp;</a></td><td><a onclick="return IN.sCol(33);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #2CAFE2;">&nbsp;</a></td><td><a onclick="return IN.sCol(34);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #353CC4;">&nbsp;</a></td><td><a onclick="return IN.sCol(35);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #992CE2;">&nbsp;</a></td><td><a onclick="return IN.sCol(36);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #E22C9A;">&nbsp;</a></td></tr><tr><td><a onclick="return IN.sCol(37);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #000000;">&nbsp;</a></td><td><a onclick="return IN.sCol(38);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CE1918;">&nbsp;</a></td><td><a onclick="return IN.sCol(39);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CE5D18;">&nbsp;</a></td><td><a onclick="return IN.sCol(40);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CEAB18;">&nbsp;</a></td><td><a onclick="return IN.sCol(41);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #97B71C;">&nbsp;</a></td><td><a onclick="return IN.sCol(42);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #35A31F;">&nbsp;</a></td><td><a onclick="return IN.sCol(43);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #1F7EA3;">&nbsp;</a></td><td><a onclick="return IN.sCol(44);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #1F54A3;">&nbsp;</a></td><td><a onclick="return IN.sCol(45);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #6E1FA3;">&nbsp;</a></td><td><a onclick="return IN.sCol(46);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #A31F6E;">&nbsp;</a></td></tr></tbody></table>';

//++ Funciones para elegir los colores:
function newColor1()
{
	IN.doFocus();
	IN.clr="#109FA6";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor2()
{
	IN.doFocus();
	IN.clr="#B300B3";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor3()
{
	IN.doFocus();
	IN.clr="#FF99E5";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor4()
{
	IN.doFocus();
	IN.clr="#FF4000";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor5()
{
	IN.doFocus();
	IN.clr="#238C00";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor6()
{
	IN.doFocus();
	IN.clr="#FF037F";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor7()
{
	IN.doFocus();
	IN.clr="#00FFFF";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor8()
{
	IN.doFocus();
	IN.clr="#007BFF";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor9()
{
	IN.doFocus();
	IN.clr="#14CCD6";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor10()
{
	IN.doFocus();
	IN.clr = "#0056b2";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
//Fin de nuevos colores.

//+ NUEVA EDICION DE ESTILOS:
//Fondos:
document.getElementById("WRP").style.background='rgb(0,0,0)';
document.getElementsByClassName("pN")[0].style.background = 'rgba(44,175,226,1)';
document.getElementsByClassName("pN")[1].style.background = 'rgba(44,175,226,0.8)';
document.getElementsByClassName("pN")[2].style.background = 'rgba(44,175,226,0.8)';

// PL, PC (lista de participantes):
document.getElementById("PL").style.color='#FFFFFF';
document.getElementById("PC").style.color='#FFFFFF';
//Fin_de_edicion_de_estilos.
