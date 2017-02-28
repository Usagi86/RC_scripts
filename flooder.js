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

