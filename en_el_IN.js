
// este archivo tendrá el event listener para cuando se escriba...

// será este archivo el que hará la accion, así como el que tenga la funcion y todo lo demás.
// luego en el script V5... se le hará el append.



var cabeIN = IN.CI.document.head;
cabeIN.addEventListener( "keyup", function()
{	
	IN.CI.document.body.innerHTML.replace("mas", "más");
	console.log(cabeIN);
})
