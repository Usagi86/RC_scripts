//v1 (2015/08/07)
// crear elementos
var nuevaAnclaCrear = document.createElement('a');
var anclaTextoCrear = document.createTextNode('');
nuevaAnclaCrear.appendChild(anclaTextoCrear);
var anclaEx = document.getElementById('sBTNS');
var padre = anclaEx.parentNode;
var nuevoHijoCrear = padre.insertBefore(nuevaAnclaCrear, anclaEx);
nuevaAnclaCrear.innerHTML = "<div id='cambiar' style='visibility: hidden; position: absolute; top: -80px; left: 40px; border: 5px solid rgb(255, 255, 255); width: 200px; height: 100px; background: #000000'><a style='color: #FFFFFF'>Nickname:</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><button style='cursor: pointer; color: #FF0000' id='cierra_cambiar' title='cerrar este pop up' onmouseup='cerrar();'>X</button><div><a>&nbsp;</a><a><input id='nuevo_nick'></input></a></div><div>&nbsp;</div><div><a>&nbsp;</a><a>&nbsp;</a><button style='cursor: pointer;' title='entrar&cambiar nick' id='btn_cambiar' class='btn' onmouseup='entrar();'>join Chat</button></div></div>";


// funciones para mostrar u ocultar
function cerrar()
{
  document.getElementById('cambiar').style.visibility = 'hidden';
}

function entrar()
{
var n_nick = document.getElementById('nuevo_nick').value;
rcFC.connect(BL.host,BL.port);
if (n_nick != '')
  {
    BL.nick = n_nick;
  }
document.getElementById('cambiar').style.visibility = 'hidden';
}
