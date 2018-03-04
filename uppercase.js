
// Script UPPERCASE intercalado:


function cambiarTexto()
{
	var texto = IN.CB.innerHTML;
	var stexto = texto.split("");
	if (controlMayus==true)
	{
		for (var i=0; i<stexto.length; i++)
		{
  		if ( i % 2 == 0 ) 
  		{//si el indice es impar...
		var textoImpar = stexto[i].toUpperCase()
		textoImpar += stexto[i+1];// le sumamos los caracteres Pares.

		var textoArray = new Array(textoImpar);//metemos eso en un array.
		var unirT;
		unirT += textoArray.toString();//convertimos el array en string.
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
		IN.CB.innerHTML = unirT3.replace("undefined", "").replace("&NbSp;", " ").replace(/&NbSp;/g, " ").replace(/&nBsP;/g, " ");//reemplazamos el texto quese muestra.
  		//console.log(unirT3.replace("undefined", ""));
		IN.doFocus();
 	}
	}	
}


// bloque para el archivo que llama a los demás codigos:
var elemento = CI.window.document.getElementById("B");
var controlMayus = false;
elemento.addEventListener( "keyup", function()
		{
		  myTe = IN.CB.textContent;

		  if ( myTe.search(/\056/) > -1 )
			{
				cambiarTexto();
			}
		})

// Funcion para el boton que activa y desactiva:
function mM()
{
  var bmM = document.getElementById("boton_mM")
  if ( bmM.style.background == "rgb(250, 250, 250) none repeat scroll 0% 0%" )
    {
		//activar:
      bmM.style.background = "rgb(50,250,50)";
      bmM.textContent = "M";
controlMayus = true;
IN.doFocus();
    }
  else
    {
		//desactivar:
      bmM.style.background = "rgb(250,250,250)";
      bmM.textContent = "m";
			controlMayus = false;
			IN.doFocus();
    }  
}

