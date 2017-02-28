/************
version 3
Author: ++
************/

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


