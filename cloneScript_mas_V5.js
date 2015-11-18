/**************************
	CloneScript Version 5
	11/11/2015
	Author: +
**************************/


//++ Anti-Kick:
rcFC.send("700","750"); BL.pingSent=new Date().getMilliseconds();
var ver = setInterval('rcFC.send("700","750")',600000);
ver;
//clearInterval(ver);

//++ Script para el Flooder:
var scriptF = document.createElement('script');
scriptF.src = 'https://rawgit.com/Usagi86/RC_scripts/master/flooder.js';
var headF = document.getElementsByTagName('head')[0];
headF.appendChild(scriptF);

//++ Cambiar el contenido de la ventana help y mostrar ahi los nuevos elementos para el clone y para el flooder:
document.getElementById('HDB').innerHTML = ' <a style="font-size:17px; color: #0056b2;"><b>Spam-Flooder(Usar con cuidado):<b></a><div>&nbsp;</div> <div>Texto SPAM: <input id="spamText" size="60px" title="Escribe/pega acÃ¡ el texto que quieras que se envÃ­e" style="background: #C4E7FF; border:2px solid #000000" ></input></div><div>&nbsp;</div> <div>Tiempo(milisegundos): <input id="tiempo" size="5" title="Escribe un nÃºmero a partir de 1250. Mientras mayor sea mÃ¡s tiempo tardarÃ¡." value="1250" style="background: #C4E7FF; border:2px solid #000000"><i> [nÃºmero mayor a 1250]</i></input></div> <div>&nbsp;</div><div>Iniciar/Parar:&nbsp;<button id="bts1" title="Estado del Flooder" onmouseup="presbts1();" style="cursor: pointer; border: 0.8px solid #000000; background: #C5EA35;">OFF</button></div><hr size="4" width="100%" align="left" style="color: #0056b2;"></hr><a style="font-size:20px; color: #0056b2;"><b>Clonar:</a><div>Texto a mostrar: <input id="text_in" size="40" style="background: #C4E7FF; border:2px solid #000000"></input><a>&nbsp;</a><a id="bt_enviar" onmousedown="cl_text();" class="btn" style="cursor:pointer; border:0.8px solid #000000; background: #C5EA35;"><b>Enviar </b></a><div>&nbsp;</div><div>Nick a clonar: <input id="cl_nick" style="background: #C4E7FF; border:2px solid #000000"></input><a>&nbsp;&nbsp;</a><a id="bt_b" title="Letra en Negrita" onmousedown="negrita();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><b>B </b></a><a>&nbsp;</a><a id="bt_i" title="Letra en Cursiva" onmousedown="cursiva();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><i>I </i></a><a>&nbsp;</a><a id="bt_u" title="Letra subrayada" onmousedown="subrayado();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><u>U </u></a></div><a id="mostrar" style="color: #000000;" title="Solo da Click sobre el color a elegir">Color del nick a clonar:</a><div><a id="tablaSimple" style="visibility: visible; "><a id="bt1" class="btn" onclick="ocultar()" style="cursor:pointer; background: #909090;">&nbsp;&nbsp;&nbsp;</a><a id="bt2" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF0300;">&nbsp;&nbsp;&nbsp;</a><a id="bt3" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF9A00;">&nbsp;&nbsp;&nbsp;</a><a id="bt4" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FFCD00;">&nbsp;&nbsp;&nbsp;</a><a id="bt5" class="btn" onclick="ocultar()" style="cursor:pointer; background: #C5EA35;">&nbsp;&nbsp;&nbsp;</a><a id="bt6" class="btn" onclick="ocultar()" style="cursor:pointer; background: #4BE22C;">&nbsp;&nbsp;&nbsp;</a><a id="bt7" class="btn" onclick="ocultar()" style="cursor:pointer; background: #2CAFE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt8" class="btn" onclick="ocultar()" style="cursor:pointer; background: #353CC4;">&nbsp;&nbsp;&nbsp;</a><a id="bt9" class="btn" onclick="ocultar()" style="cursor:pointer; background: #992CE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt10" class="btn" onclick="ocultar()" style="cursor:pointer; background: #E22C9A;">&nbsp;&nbsp;&nbsp;</a></div><div><a id="bt11" class="btn" onclick="ocultar()" style="cursor:pointer; background: #000000;">&nbsp;&nbsp;&nbsp;</a><a id="bt12" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE1918;">&nbsp;&nbsp;&nbsp;</a><a id="bt13" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE5D18;">&nbsp;&nbsp;&nbsp;</a><a id="bt14" onclick="ocultar()" class="btn" style="cursor:pointer; background: #CEAB18;">&nbsp;&nbsp;&nbsp;</a><a id="bt15" class="btn" onclick="ocultar()" style="cursor:pointer; background: #97B71C;">&nbsp;&nbsp;&nbsp;</a><a id="bt16" class="btn" onclick="ocultar()" style="cursor:pointer; background: #35A31F;">&nbsp;&nbsp;&nbsp;</a><a id="bt17" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F7EA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt18" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F54A3;">&nbsp;&nbsp;&nbsp;</a><a id="bt19" onclick="ocultar()" class="btn" style="cursor:pointer; background: #6E1FA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt20" class="btn" onclick="ocultar()" style="cursor:pointer; background: #A31F6E;">&nbsp;&nbsp;&nbsp;</a></ul></a></div></div> ';


//++ ANTIGÜO ARCHIVO DE CABECERA ++//

// variable que guardara el codigo del color del clon:
var colorN="#000000";

// funcion para darle al clon el color que elijamos:
function ocultar()//(antiguo nombre de otra funcion que ocultaba un elemento)
{
	document.getElementById("mostrar").style.color = colorN;
}

// al dar click sobre los colores me elegira uno nuevo para el clon:
document.getElementById("bt1").onclick=function() {colorN="#909090";};
document.getElementById("bt2").onclick=function() {colorN="#FF0300";};
document.getElementById("bt3").onclick=function() {colorN="#FF9A00";};
document.getElementById("bt4").onclick=function() {colorN="#FFCD00";};
document.getElementById("bt5").onclick=function() {colorN="#C5EA35";};
document.getElementById("bt6").onclick=function() {colorN="#4BE22C";};
document.getElementById("bt7").onclick=function() {colorN="#2CAFE2";};
document.getElementById("bt8").onclick=function() {colorN="#353CC4";};
document.getElementById("bt9").onclick=function() {colorN="#992CE2"; };
document.getElementById("bt10").onclick=function() {colorN="#E22C9A";};
document.getElementById("bt11").onclick=function() {colorN="#000000";};
document.getElementById("bt12").onclick=function() {colorN="#CE1918";};
document.getElementById("bt13").onclick=function() {colorN="#CE5D18";};
document.getElementById("bt14").onclick=function() {colorN="#CEAB18";};
document.getElementById("bt15").onclick=function() {colorN="#97B71C";};
document.getElementById("bt16").onclick=function() {colorN="#35A31F";};
document.getElementById("bt17").onclick=function() {colorN="#1F7EA3";};
document.getElementById("bt18").onclick=function() {colorN="#1F54A3";};
document.getElementById("bt19").onclick=function() {colorN="#6E1FA3";};
document.getElementById("bt20").onclick=function() {colorN="#A31F6E";};
//FIN_del_antiguo_cab


////++++ AQUI IRA EL SCRIPT PARA CLONAR ++++////

var ctrl1=0; var ctrl2=0; var ctrl3=0;
function negrita(){
if (ctrl1==0){ctrl1=1;document.getElementById("bt_b").style.background="rgb(213, 255, 115)";}else
{ctrl1=0;document.getElementById("bt_b").style.background="transparent";}
}
function cursiva(){
if (ctrl2==0){ctrl2=1;document.getElementById("bt_i").style.background="rgb(213, 255, 115)";}else
{ctrl2=0;document.getElementById("bt_i").style.background="transparent";}
}
function subrayado(){
if (ctrl3==0){ctrl3=1;document.getElementById("bt_u").style.background="rgb(213, 255, 115)";}else
{ctrl3=0;document.getElementById("bt_u").style.background="transparent";}
}
function cl_text(){
var myText=document.getElementById("text_in").value;
var u_nick=document.getElementById("cl_nick").value;
var bo0; var bo1; var it0; var it1; var un0; var un1; 
if (ctrl1==1){bo0 = "[/b]"; bo1 = "[b]";}else{bo0 = ""; bo1 = "";}
if (ctrl2==1){it0 = "[/i]"; it1 = "[i]";}else{it0 = ""; it1 = "";}
if (ctrl3==1){un0 = "[/u]"; un1 = "[u]";}else{un0 = ""; un1 = "";}
var T_1 = un1 + it1 + bo1 + "[c=" + colorN + "]" + myText + "[/c]" + bo0 + it0 + un0;
var chekk=ULS.getID(u_nick); 
	if (chekk!==null && T_1!="[c=" + colorN + "]"+"[/c]" && T_1!="[b]"+"[c=" + colorN + "]"+"[/c]"+"[/b]" && T_1!="[i]"+"[c=" + colorN + "]"+"[/c]"+"[/i]" && T_1!="[u]"+"[c=" + colorN + "]"+"[/c]"+"[/u]" && T_1!="[b]"+"[i]"+"[c=" + colorN + "]"+"[/c]"+"[/i]"+"[/b]" && T_1!="[b]"+"[u]"+"[c=" + colorN + "]"+"[/c]"+"[/u]"+"[/b]")
	{
	rcFC.send("500","612",chekk,T_1);
	myText=document.getElementById("text_in").value="";
	}

};
//FIN_DEL_SCRIPT_DE_CLONAR


/////////////////////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////////
//++ GENERADOR DE TEXTO (letras-caracteres):
var script=document.createElement('script');
script.src='https://rawgit.com/Usagi86/RC_scripts/master/generador_de_texto.js';
var head=document.getElementsByTagName('head')[0];
head.appendChild(script);
//Fin_del_generador_de_texto.


//necesario en chrome:
document.getElementById("CI").style.height="50px";

//FIN DEL SCRIPT.
