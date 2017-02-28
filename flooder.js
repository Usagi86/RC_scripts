/************
version 3
Author: ++
************/

//cambiar el contenido de la ventana Help:
document.getElementById('HDB').innerHTML = ' <a style="font-size:17px; color: #0056b2;"><b>Spam-Flooder(Usar con cuidado):<b></a><div>&nbsp;</div> <div>Texto SPAM: <input id="spamText" size="60px" title="Escribe/pega acá el texto que quieras que se envíe" style="background: #C4E7FF; border:2px solid #000000" ></input></div><div>&nbsp;</div> <div>Tiempo(milisegundos): <input id="tiempo" size="5" title="Escribe un número a partir de 1250. Mientras mayor sea más tiempo tardará." value="1250" style="background: #C4E7FF; border:2px solid #000000"><i> [número mayor a 1250]</i></input></div> <div>&nbsp;</div><div>Iniciar/Parar:&nbsp;<button id="bts1" title="Estado del Flooder" onmouseup="presbts1();" style="cursor: pointer; border: 0.8px solid #000000; background: #C5EA35;">OFF</button></div><hr size="4" width="100%" align="left" style="color: #0056b2;"></hr><a style="font-size:20px; color: #0056b2;"><b>Clonar:</a><div>Texto a mostrar: <input id="text_in" type="text" onkeypress="validar(event)" size="30" style="background: #C4E7FF; border:2px solid #000000; height:35px; font-size:18px"></input><a>&nbsp;</a><a id="bt_enviar" onmousedown="cl_text();" class="btn" style="cursor:pointer; border:0.8px solid #000000; background: #C5EA35;"><b>Enviar </b></a><div>&nbsp;</div><div>Nick a clonar: <input id="cl_nick" readonly="readonly" style="background: #FFFFFF; border:2px solid #000000"></input><a>&nbsp;&nbsp;</a><a id="bt_b" title="Letra en Negrita" onmousedown="negrita();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><b>B </b></a><a>&nbsp;</a><a id="bt_i" title="Letra en Cursiva" onmousedown="cursiva();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><i>I </i></a><a>&nbsp;</a><a id="bt_u" title="Letra subrayada" onmousedown="subrayado();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><u>U </u></a></div><a id="mostrar" style="color: #000000;" title="Solo da Click sobre el color a elegir">Color del nick a clonar:</a><div><a id="tablaSimple" style="visibility: visible; "><a id="bt1" class="btn" onclick="ocultar()" style="cursor:pointer; background: #909090;">&nbsp;&nbsp;&nbsp;</a><a id="bt2" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF0300;">&nbsp;&nbsp;&nbsp;</a><a id="bt3" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF9A00;">&nbsp;&nbsp;&nbsp;</a><a id="bt4" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FFCD00;">&nbsp;&nbsp;&nbsp;</a><a id="bt5" class="btn" onclick="ocultar()" style="cursor:pointer; background: #C5EA35;">&nbsp;&nbsp;&nbsp;</a><a id="bt6" class="btn" onclick="ocultar()" style="cursor:pointer; background: #4BE22C;">&nbsp;&nbsp;&nbsp;</a><a id="bt7" class="btn" onclick="ocultar()" style="cursor:pointer; background: #2CAFE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt8" class="btn" onclick="ocultar()" style="cursor:pointer; background: #353CC4;">&nbsp;&nbsp;&nbsp;</a><a id="bt9" class="btn" onclick="ocultar()" style="cursor:pointer; background: #992CE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt10" class="btn" onclick="ocultar()" style="cursor:pointer; background: #E22C9A;">&nbsp;&nbsp;&nbsp;</a></div><div><a id="bt11" class="btn" onclick="ocultar()" style="cursor:pointer; background: #000000;">&nbsp;&nbsp;&nbsp;</a><a id="bt12" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE1918;">&nbsp;&nbsp;&nbsp;</a><a id="bt13" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE5D18;">&nbsp;&nbsp;&nbsp;</a><a id="bt14" onclick="ocultar()" class="btn" style="cursor:pointer; background: #CEAB18;">&nbsp;&nbsp;&nbsp;</a><a id="bt15" class="btn" onclick="ocultar()" style="cursor:pointer; background: #97B71C;">&nbsp;&nbsp;&nbsp;</a><a id="bt16" class="btn" onclick="ocultar()" style="cursor:pointer; background: #35A31F;">&nbsp;&nbsp;&nbsp;</a><a id="bt17" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F7EA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt18" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F54A3;">&nbsp;&nbsp;&nbsp;</a><a id="bt19" onclick="ocultar()" class="btn" style="cursor:pointer; background: #6E1FA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt20" class="btn" onclick="ocultar()" style="cursor:pointer; background: #A31F6E;">&nbsp;&nbsp;&nbsp;</a></ul></a></div></div> <hr size="4" width="100%" align="left" style="color: #0056b2;"></hr><a style="font-size:17px; color: #0056b2;"><b>Bot Para enviar Privados:<b></a><div>Mensaje: <input id="botText" style="border:2px solid #000000"></input>&nbsp;Tiempo: <input id="tiempoBot" size="8" style="border:2px solid #000000"></input>&nbsp;<button id="btsB" onclick="presbtsB();">OFF</button></div> <div>&nbsp;</div><div style="font-size:17px; color: #0056b2;"><b>Bot Para Textos Largos o Conversaciones:</b></div><div><textarea id="areaTexto" rows="4" cols="50" style="color:red; background-color:black;border: 2px solid red;"></textarea></div><div><a>&nbsp;<button onclick="borracT();">Borrar</button></a><a>&nbsp;<select id="select_cT"><option onclick="" value="5000">5segundos</option><option onclick="" value="10000">10segundos</option><option onclick="" value="15000">15segundos</option><option onclick="" value="20000">20segundos</option><option onclick="" value="25000">25segundos</option><option onclick="" value="30000">30segundos</option><option onclick="" value="40000">40segundos</option><option onclick="" value="60000">1Minuto</option></select></a><a>&nbsp;<button id="boton_cT" onclick="inicT();" style="color:#FF0000;">▇▇▇</button></a><a>&nbsp;<button onclick="resetcT();">Reset</button></a></div> ';

//++ ScriptMultiSpam:(Flooder)

function multiSpam()
{
	var myText=document.getElementById("spamText").value;
	var us_lista = ULS.users.length;
	var uS = Math.floor((Math.random()*us_lista)+0);
	var u_nick=ULS.users[uS].nick;
	var T_1="[b][c="+IN.clr+"]"+myText+"[/c][/b]";
	var textO=T_1;
	var chekk=ULS.getID(u_nick); 
	if (chekk!=null) 
	{
		rcFC.send("500","612",chekk,textO);
	}
}

var spamm;
function presbts1(){
if (document.getElementById("bts1").innerHTML=="ON..")
	{
		rcFC.playSound("msg");
		document.getElementById("bts1").innerHTML="OFF";
		clearInterval(spamm);
	}
else
	{
		rcFC.playSound("join");
		document.getElementById("bts1").innerHTML="ON..";
		spamm = setInterval('multiSpam();',document.getElementById("tiempo").value);
	}
}
//Fin_multispam_flooder.


//++ BOT QUE MANDA PRIVADOS:
function mi_bot()
{
	var _bot = document.getElementById("botText").value;//tomará el valor del text input. document.getElementById("botText").value;
	var usLista = ULS.users.length;
	var uSL = Math.floor((Math.random()*usLista)+0);
	var id = ULS.users[uSL].nick;
	
	var checkUser=ULS.getID(id);
	if (checkUser != null && checkUser != BL.uID)
	{
		rcFC.send("500","503",ULS.getID(id), _bot);
		CA.addUserMessage(4,ULS.getID(id),_bot);
	}
}
var miBot;
function presbtsB(){
if (document.getElementById("btsB").innerHTML=="ON..")
	{
		rcFC.playSound("msg");
		document.getElementById("btsB").innerHTML="OFF";
		clearInterval(miBot);
	}
else
	{
		rcFC.playSound("join");
		document.getElementById("btsB").innerHTML="ON..";
		miBot = setInterval('mi_bot();',document.getElementById("tiempoBot").value);
	}
}
//Fin_del_bot_que_manda_pvs.

//BOT PARA MULTITEXTOS:

var contador = -1; 

function multiSpam2()
{
	var cT = document.getElementById("areaTexto").value
	var ncT = cT.split(".");
	
	contador +=1;
	if (contador < ncT.length && contador >= 0)
	{
	//console.log(ncT[contador]);
	IN.CI.document.body.innerHTML = ncT[contador];
	BL.sendMessage(TB.aT,rcUtil.html2bb(IN.CB.innerHTML));
	}
	else
	{
	clearInterval(spamm2);
	document.getElementById("boton_cT").style.color = "rgb(255, 0, 0)";
  contador = -1;
	}
}

var spamm2;
function inicT(){
  var bcT = document.getElementById("boton_cT");
  
if (bcT.style.color == "rgb(255, 0, 0)")
	{
	rcFC.playSound("join");
    bcT.style.color = "rgb(0, 255, 0)";
    spamm2 = setInterval('multiSpam2();', document.getElementById("select_cT").value);
	}
else
	{
	rcFC.playSound("msg");
	bcT.style.color = "rgb(255, 0, 0)";
    clearInterval(spamm2);
	}
}


//funcion para borrar el contenido del textarea
function borracT()
{
	document.getElementById("areaTexto").value = "";
}

function resetcT()
{
	contador = -1;
}
//Fin_bot_multitextos.


