/*************************
    Texto multicolor
    v1
    
*************************/

// constructor de la funcion:
function tMultiColor()
{
  var texto = rcUtil.html2bb(IN.CB.innerHTML);
  var stexto = texto.split("");
  
  for (var i=0; i<stexto.length; i++)
  {
    if ( i % 2 == 0 )//si el indice(i) es par:
    {
    var nm;
    var nn = "[c=#ff037f]" + stexto[i] + "[/c]";
    nm += nn;
    //console.log(nm);
    }
    else // si i no es par:
    {
    var nt = "[c=#109fa6]" + stexto[i] + "[/c]";
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
nuevoAnclaC.innerHTML = '<button id="bTMC" onclick="tMultiColor()">TextoMulticolor </button>';
// Fin del boton




