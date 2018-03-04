
// Script UPPERCASE intercalado:

function cambiarTexto()
{
  var texto = IN.CB.innerHTML;

var stexto = texto.split("");
for (var i=0; i<stexto.length; i++)
{
  if ( i % 2 == 0 ) 
  {//si el indice es impar...
		var textoImpar = stexto[i].toUpperCase()
		textoImpar += stexto[i+1];// le sumamos los caracteres Pares.

		var textoArray = new Array(textoImpar);
		var unirT;
		unirT += textoArray.toString();
		var unirT2 = unirT.replace("undefined", "");
		//console.log(unirT2);
  }
}
	
  var textoUnido = unirT2.replace("undefined", "");

  //console.log(textoUnido);
	//BL.sendMessage(TB.aT,rcUtil.html2bb(textoUnido));
	unirT="";
  if ( IN.CB.textContent.endsWith(".") == true )
	{
	var textoArray2 = new Array(textoUnido);
  var unirT3;
	unirT3 += textoArray2.toString();
	IN.CB.innerHTML = unirT3.replace("undefined", "").replace("&NbSp;", " ").replace(/&nBsP;/g, " ");
  console.log(unirT3.replace("undefined", ""));
	IN.doFocus();
  }
}


//Esto para la caja de texto:
var elemento = CI.window.document.getElementById("B");
elemento.addEventListener( "keyup", function()
{
  myTe = IN.CB.textContent;

  if ( myTe.search(/\056/) > -1 )
	{
		cambiarTexto();
	}
})
