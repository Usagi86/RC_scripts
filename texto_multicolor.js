/*************************
    Texto multicolor
    v1
    
*************************/

// constructor de la funcion:
function tMultiColor()
{
  var texto = rcUtil.html2bb(IN.CB.innerHTML);
  var stexto = texto.split("");
  
  var tColor1 = document.getElementById("tMC_1").value;
  var tColor2 = document.getElementById("tMC_2").value;
  
  for (var i=0; i<stexto.length; i++)
  {
    if ( i % 2 == 0 )//si el indice(i) es par:
    {
    var nm;
    var nn = "[c=" + tColor1 + "]" + stexto[i] + "[/c]";
    nm += nn;
    //console.log(nm);
    }
    else // si i no es par:
    {
    var nt = "[c=" + tColor2 + "]" + stexto[i] + "[/c]";
    nm += nt
    //console.log(nm);
    }
  
  }
  //console.log(nm);
  var nt = "[b]" + nm + "[/b]";
  var nb = nt.replace("undefined", "");
  BL.sendMessage(TB.aT,rcUtil.html2bb(nb));
  IN.CI.document.body.innerHTML="";
  nm="";
}

// crear boton:
var anclaTC = document.createTextNode('');
var nuevoAnclaC = document.createElement("a");
nuevoAnclaC.appendChild(anclaTC);

var anclaExi = document.getElementById("sBTNS");
var padreT = anclaExi.parentNode;
var nuevoHijoC = padreT.insertBefore(nuevoAnclaC, anclaExi);
//++ modificar elemento en el html:
nuevoAnclaC.innerHTML = '<button id="bTMC" onclick="tMultiColor()" onmouseup="blur()">TextoMulticolor </button> C1:<select id="tMC_1" onclick="d_color_1();" style="background: #FFFFFF; size:25px; "><option value="#FF0000" style="background: #FF0000"> </option><option value="#007BFF" style="background: #007BFF"> </option><option value="#238C00" style="background: #238C00"> </option><option value="#000000" style="background: #000000"> </option><option value="#909090" style="background: #909090"> </option><option value="#109FA6" style="background: #109FA6"> </option><option value="#B300B3" style="background: #B300B3"> </option><option value="#FF037F" style="background: #FF037F"> </option><option value="#00FFFF" style="background: #00FFFF"> </option><option value="#FF4000" style="background: #FF4000"> </option><option value="#992CE2" style="background: #992CE2"> </option></select> C2:<select id="tMC_2" onclick="d_color_2();" style="background: #FFFFFF; size:25px; "><option value="#FF0000" style="background: #FF0000"> </option><option value="#007BFF" style="background: #007BFF"> </option><option value="#238C00" style="background: #238C00"> </option><option value="#000000" style="background: #000000"> </option><option value="#909090" style="background: #909090"> </option><option value="#109FA6" style="background: #109FA6"> </option><option value="#B300B3" style="background: #B300B3"> </option><option value="#FF037F" style="background: #FF037F"> </option><option value="#00FFFF" style="background: #00FFFF"> </option><option value="#FF4000" style="background: #FF4000"> </option><option value="#992CE2" style="background: #992CE2"> </option></select>';
// Fin del boton

// funcion para darle color a la eleccion de color que hagamos:
function d_color_1()
{
var rrrr = document.getElementById("tMC_1")
rrrr.style.background = rrrr.value;
}
function d_color_2()
{
var rrrr = document.getElementById("tMC_2")
rrrr.style.background = rrrr.value;
}




