/*************************
    Texto multicolor
    v1
    
*************************/

// constructor de la funcion:
function tMultiColor()
{
  var texto = rcUtil.html2bb(IN.CB.innerHTML);
  var stexto = texto.split("");
  var nm;
  
  for (var i=0; i<stexto.length; i++)
  {
    if ( i % 2 == 0 )//si el indice(i) es par:
    {
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
  BL.sendMessage(TB.aT,rcUtil.html2bb(nt));
  IN.CI.document.body.innerHTML="";
  nm="";
}

// crear boton:



