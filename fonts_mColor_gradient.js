/**********************************************
    Nuevo Script
    en donde 'uniré' en un solo codigo
    el script del "Generador_de_texto"
    y el script del "Texto_multi_color". (Y el script de texto con Gradientes)...
    para que se pueda escribir tanto a colores
    con letras normales, como con las letras
    de símbolos.
    // v5
***********************************************/

// Crear div que contendrá una "tabla u form" para elegir los colores para la opcion de gradientes:
var nuevaAncla1G = document.createElement("a");
nuevaAncla1G.appendChild(document.createTextNode(''));
var lanclaExistente = document.getElementById("RN");
var padre_g = lanclaExistente.parentNode;
var nuevoHijo1G = padre_g.insertBefore(nuevaAncla1G, lanclaExistente);
nuevaAncla1G.innerHTML = ' <div id="form_colores" style="visibility:hidden; width:300; height:250; position: absolute; top:78px; left:88px; border:3px solid #000000; background:#109fa6;"><div>Estilo predefinido 1: <button id="" style="cursor:pointer;" onclick="">Seleccionar</button></div><div>Estilo predefinido 2: <button id="" style="cursor:pointer;" onclick="">Seleccionar</button></div><div>Estilo predefinido 3: <button id="" style="cursor:pointer;" onclick="">Seleccionar</button></div><div><i>Elegir colores manualmente:</i></div><a>&nbsp;</a><select id="sel1" onclick="col_sel1();" style="background:#FFFFFF;"><option value="" style="background: #FFFFFF">¤</option><option value="ff0000" style="background: #ff0000">&nbsp;&nbsp;</option><option value="007bff" style="background:#007bff;">&nbsp;&nbsp;</option><option value="238c00" style="background:#238c00;">&nbsp;&nbsp;</option><option value="000000" style="background:#000000;">&nbsp;&nbsp;</option><option value="909090" style="background:#909090;">&nbsp;&nbsp;</option><option value="109fa6" style="background:#109fa6;">&nbsp;&nbsp;</option><option value="b300b3" style="background:#b300b3;">&nbsp;&nbsp;</option><option value="ff037f" style="background:#ff037f;">&nbsp;&nbsp;</option><option value="00ffff" style="background:#00ffff;">&nbsp;&nbsp;</option><option value="ff4000" style="background:#ff4000;">&nbsp;&nbsp;</option><option value="ff99e5" style="background:#ff99e5;">&nbsp;&nbsp;</option><option value="ffcd00" style="background:#ffcd00;">&nbsp;&nbsp;</option><option value="4be22c" style="background:#4be22c;">&nbsp;&nbsp;</option><option value="2cafe2" style="background:#2cafe2;">&nbsp;&nbsp;</option><option value="353cc4" style="background:#353cc4;">&nbsp;&nbsp;</option><option value="e22c9a" style="background:#e22c9a;">&nbsp;&nbsp;</option><option value="35a31f" style="background:#35a31f;">&nbsp;&nbsp;</option><option value="a31f6e" style="background:#a31f6e;">&nbsp;&nbsp;</option><option value="ff00ff" style="background:#ff00ff;">&nbsp;&nbsp;</option></select><a>&nbsp;</a><select id="sel2" onclick="col_sel2();" style="background:#FFFFFF;"><option value="" style="background: #FFFFFF">¤</option><option value="ff0000" style="background: #ff0000">&nbsp;&nbsp;</option><option value="007bff" style="background:#007bff;">&nbsp;&nbsp;</option><option value="238c00" style="background:#238c00;">&nbsp;&nbsp;</option><option value="000000" style="background:#000000;">&nbsp;&nbsp;</option><option value="909090" style="background:#909090;">&nbsp;&nbsp;</option><option value="109fa6" style="background:#109fa6;">&nbsp;&nbsp;</option><option value="b300b3" style="background:#b300b3;">&nbsp;&nbsp;</option><option value="ff037f" style="background:#ff037f;">&nbsp;&nbsp;</option><option value="00ffff" style="background:#00ffff;">&nbsp;&nbsp;</option><option value="ff4000" style="background:#ff4000;">&nbsp;&nbsp;</option><option value="ff99e5" style="background:#ff99e5;">&nbsp;&nbsp;</option><option value="ffcd00" style="background:#ffcd00;">&nbsp;&nbsp;</option><option value="4be22c" style="background:#4be22c;">&nbsp;&nbsp;</option><option value="2cafe2" style="background:#2cafe2;">&nbsp;&nbsp;</option><option value="353cc4" style="background:#353cc4;">&nbsp;&nbsp;</option><option value="e22c9a" style="background:#e22c9a;">&nbsp;&nbsp;</option><option value="35a31f" style="background:#35a31f;">&nbsp;&nbsp;</option><option value="a31f6e" style="background:#a31f6e;">&nbsp;&nbsp;</option><option value="ff00ff" style="background:#ff00ff;">&nbsp;&nbsp;</option></select><a>&nbsp;</a><select id="sel3" onclick="col_sel3();" style="background:#FFFFFF;"><option value="" style="background: #FFFFFF">¤</option><option value="ff0000" style="background: #ff0000">&nbsp;&nbsp;</option><option value="007bff" style="background:#007bff;">&nbsp;&nbsp;</option><option value="238c00" style="background:#238c00;">&nbsp;&nbsp;</option><option value="000000" style="background:#000000;">&nbsp;&nbsp;</option><option value="909090" style="background:#909090;">&nbsp;&nbsp;</option><option value="109fa6" style="background:#109fa6;">&nbsp;&nbsp;</option><option value="b300b3" style="background:#b300b3;">&nbsp;&nbsp;</option><option value="ff037f" style="background:#ff037f;">&nbsp;&nbsp;</option><option value="00ffff" style="background:#00ffff;">&nbsp;&nbsp;</option><option value="ff4000" style="background:#ff4000;">&nbsp;&nbsp;</option><option value="ff99e5" style="background:#ff99e5;">&nbsp;&nbsp;</option><option value="ffcd00" style="background:#ffcd00;">&nbsp;&nbsp;</option><option value="4be22c" style="background:#4be22c;">&nbsp;&nbsp;</option><option value="2cafe2" style="background:#2cafe2;">&nbsp;&nbsp;</option><option value="353cc4" style="background:#353cc4;">&nbsp;&nbsp;</option><option value="e22c9a" style="background:#e22c9a;">&nbsp;&nbsp;</option><option value="35a31f" style="background:#35a31f;">&nbsp;&nbsp;</option><option value="a31f6e" style="background:#a31f6e;">&nbsp;&nbsp;</option><option value="ff00ff" style="background:#ff00ff;">&nbsp;&nbsp;</option></select><a>&nbsp;</a><select id="sel4" onclick="col_sel4();" style="background:#FFFFFF;"><option value="" style="background: #FFFFFF">¤</option><option value="ff0000" style="background: #ff0000">&nbsp;&nbsp;</option><option value="007bff" style="background:#007bff;">&nbsp;&nbsp;</option><option value="238c00" style="background:#238c00;">&nbsp;&nbsp;</option><option value="000000" style="background:#000000;">&nbsp;&nbsp;</option><option value="909090" style="background:#909090;">&nbsp;&nbsp;</option><option value="109fa6" style="background:#109fa6;">&nbsp;&nbsp;</option><option value="b300b3" style="background:#b300b3;">&nbsp;&nbsp;</option><option value="ff037f" style="background:#ff037f;">&nbsp;&nbsp;</option><option value="00ffff" style="background:#00ffff;">&nbsp;&nbsp;</option><option value="ff4000" style="background:#ff4000;">&nbsp;&nbsp;</option><option value="ff99e5" style="background:#ff99e5;">&nbsp;&nbsp;</option><option value="ffcd00" style="background:#ffcd00;">&nbsp;&nbsp;</option><option value="4be22c" style="background:#4be22c;">&nbsp;&nbsp;</option><option value="2cafe2" style="background:#2cafe2;">&nbsp;&nbsp;</option><option value="353cc4" style="background:#353cc4;">&nbsp;&nbsp;</option><option value="e22c9a" style="background:#e22c9a;">&nbsp;&nbsp;</option><option value="35a31f" style="background:#35a31f;">&nbsp;&nbsp;</option><option value="a31f6e" style="background:#a31f6e;">&nbsp;&nbsp;</option><option value="ff00ff" style="background:#ff00ff;">&nbsp;&nbsp;</option></select><a>&nbsp;</a><select id="sel5" onclick="col_sel5();" style="background:#FFFFFF;"><option value="" style="background: #FFFFFF">¤</option><option value="ff0000" style="background: #ff0000">&nbsp;&nbsp;</option><option value="007bff" style="background:#007bff;">&nbsp;&nbsp;</option><option value="238c00" style="background:#238c00;">&nbsp;&nbsp;</option><option value="000000" style="background:#000000;">&nbsp;&nbsp;</option><option value="909090" style="background:#909090;">&nbsp;&nbsp;</option><option value="109fa6" style="background:#109fa6;">&nbsp;&nbsp;</option><option value="b300b3" style="background:#b300b3;">&nbsp;&nbsp;</option><option value="ff037f" style="background:#ff037f;">&nbsp;&nbsp;</option><option value="00ffff" style="background:#00ffff;">&nbsp;&nbsp;</option><option value="ff4000" style="background:#ff4000;">&nbsp;&nbsp;</option><option value="ff99e5" style="background:#ff99e5;">&nbsp;&nbsp;</option><option value="ffcd00" style="background:#ffcd00;">&nbsp;&nbsp;</option><option value="4be22c" style="background:#4be22c;">&nbsp;&nbsp;</option><option value="2cafe2" style="background:#2cafe2;">&nbsp;&nbsp;</option><option value="353cc4" style="background:#353cc4;">&nbsp;&nbsp;</option><option value="e22c9a" style="background:#e22c9a;">&nbsp;&nbsp;</option><option value="35a31f" style="background:#35a31f;">&nbsp;&nbsp;</option><option value="a31f6e" style="background:#a31f6e;">&nbsp;&nbsp;</option><option value="ff00ff" style="background:#ff00ff;">&nbsp;&nbsp;</option></select><a>&nbsp;</a><select id="sel6" onclick="col_sel6();" style="background:#FFFFFF;"><option value="" style="background: #FFFFFF">¤</option><option value="ff0000" style="background: #ff0000">&nbsp;&nbsp;</option><option value="007bff" style="background:#007bff;">&nbsp;&nbsp;</option><option value="238c00" style="background:#238c00;">&nbsp;&nbsp;</option><option value="000000" style="background:#000000;">&nbsp;&nbsp;</option><option value="909090" style="background:#909090;">&nbsp;&nbsp;</option><option value="109fa6" style="background:#109fa6;">&nbsp;&nbsp;</option><option value="b300b3" style="background:#b300b3;">&nbsp;&nbsp;</option><option value="ff037f" style="background:#ff037f;">&nbsp;&nbsp;</option><option value="00ffff" style="background:#00ffff;">&nbsp;&nbsp;</option><option value="ff4000" style="background:#ff4000;">&nbsp;&nbsp;</option><option value="ff99e5" style="background:#ff99e5;">&nbsp;&nbsp;</option><option value="ffcd00" style="background:#ffcd00;">&nbsp;&nbsp;</option><option value="4be22c" style="background:#4be22c;">&nbsp;&nbsp;</option><option value="2cafe2" style="background:#2cafe2;">&nbsp;&nbsp;</option><option value="353cc4" style="background:#353cc4;">&nbsp;&nbsp;</option><option value="e22c9a" style="background:#e22c9a;">&nbsp;&nbsp;</option><option value="35a31f" style="background:#35a31f;">&nbsp;&nbsp;</option><option value="a31f6e" style="background:#a31f6e;">&nbsp;&nbsp;</option><option value="ff00ff" style="background:#ff00ff;">&nbsp;&nbsp;</option></select><div>..........................</div><div><i>Instrucciones:</i></div><div>Se pueden elegir hasta 6 colores distintos...<br>Si eliges la opcion con ¤ significará<br>que no elegirás ningún color.</div></div> ';

//Funcion para mostrar u ocultar el form:
	function funcMCol()
	{
	ele_boton = document.getElementById("form_colores");
		if ( ele_boton.style.visibility == "hidden" )
		{
		ele_boton.style.visibility = "visible";
		}
		else
		{
		ele_boton.style.visibility = "hidden";
		}
	}

//constructor para los selectores:
	function consEs(miVariable)
	{
	var miVariable; 
	if ( miVariable.value == "" )
	{miVariable.style.background = "#FFFFFF";}
	else
	{miVariable.style.background = "#"+miVariable.value;}
	return;
	}
	
//Funciones para dar el color a la seleccion del 'select' que hagamos:
	function col_sel1()
	{
		var sel1 = document.getElementById("sel1");
		consEs(sel1);
	}
	function col_sel2()
	{
		var sel2 = document.getElementById("sel2");
		consEs(sel2);
	}
	
	function col_sel3()
	{
		var sel3 = document.getElementById("sel3");
		consEs(sel3);
	}
	function col_sel4()
	{
		var sel4 = document.getElementById("sel4");
		consEs(sel4);
	}
	function col_sel5()
	{
		var sel5 = document.getElementById("sel5");
		consEs(sel5);
	}
	function col_sel6()
	{
		var sel6 = document.getElementById("sel6");
		consEs(sel6);
	}

// Funcion para el boton de cambiar el modo de Color (dos colores o gradientes):
function cambiar_modo()
{
  var t_ele = document.getElementById("c_btn");
  
  if ( t_ele.innerHTML == "Modo1" )
  {
    t_ele.innerHTML = "Modo2";
  }
  else
  {
    t_ele.innerHTML = "Modo1";
  }
}


// Crear los elementos para los objetos donde se elegiran dos colores a mostrar en el texto:
var anclaTC = document.createTextNode('');
var nuevoAnclaC = document.createElement("a");
nuevoAnclaC.appendChild(anclaTC);

var anclaExi = document.getElementById("sBTNS");
var padreT = anclaExi.parentNode;
var nuevoHijoC = padreT.insertBefore(nuevoAnclaC, anclaExi);

//++ modificar elemento en el html para agregar los colores de texto:
nuevoAnclaC.innerHTML = ' C1:<select id="tMC_1" onclick="d_color_1();" style="background: #FF0000; size:25px; "><option value="#FF0000" style="background: #FF0000" onclick="IN.doFocus();"> </option><option value="#007BFF" style="background: #007BFF" onclick="IN.doFocus();"> </option><option value="#238C00" style="background: #238C00" onclick="IN.doFocus();"> </option><option value="#000000" style="background: #000000" onclick="IN.doFocus();"> </option><option value="#909090" style="background: #909090" onclick="IN.doFocus();"> </option><option value="#109FA6" style="background: #109FA6" onclick="IN.doFocus();"> </option><option value="#B300B3" style="background: #B300B3" onclick="IN.doFocus();"> </option><option value="#FF037F" style="background: #FF037F" onclick="IN.doFocus();"> </option><option value="#00FFFF" style="background: #00FFFF" onclick="IN.doFocus();"> </option><option value="#FF4000" style="background: #FF4000" onclick="IN.doFocus();"> </option><option value="#992CE2" style="background: #992CE2" onclick="IN.doFocus();"> </option><option value="#FF99E5" style="background: #FF99E5" onclick="IN.doFocus();"> </option><option value="#FFCD00" style="background: #FFCD00" onclick="IN.doFocus();"> </option><option value="#4BE22C" style="background: #4BE22C" onclick="IN.doFocus();"> </option><option value="#2CAFE2" style="background: #2CAFE2" onclick="IN.doFocus();"> </option><option value="#353CC4" style="background: #353CC4" onclick="IN.doFocus();"> </option><option value="#E22C9A" style="background: #E22C9A" onclick="IN.doFocus();"> </option><option value="#35A31F" style="background: #35A31F" onclick="IN.doFocus();"> </option><option value="#A31F6E" style="background: #A31F6E" onclick="IN.doFocus();"> </option><option value="#FF00FF" style="background: #FF00FF" onclick="IN.doFocus();"> </option></select> C2:<select id="tMC_2" onclick="d_color_2();" style="background: #FF0000; size:25px; "><option value="#FF0000" style="background: #FF0000" onclick="IN.doFocus();"> </option><option value="#007BFF" style="background: #007BFF" onclick="IN.doFocus();"> </option><option value="#238C00" style="background: #238C00" onclick="IN.doFocus();"> </option><option value="#000000" style="background: #000000" onclick="IN.doFocus();"> </option><option value="#909090" style="background: #909090" onclick="IN.doFocus();"> </option><option value="#109FA6" style="background: #109FA6" onclick="IN.doFocus();"> </option><option value="#B300B3" style="background: #B300B3" onclick="IN.doFocus();"> </option><option value="#FF037F" style="background: #FF037F" onclick="IN.doFocus();"> </option><option value="#00FFFF" style="background: #00FFFF" onclick="IN.doFocus();"> </option><option value="#FF4000" style="background: #FF4000" onclick="IN.doFocus();"> </option><option value="#992CE2" style="background: #992CE2" onclick="IN.doFocus();"> </option><option value="#FF99E5" style="background: #FF99E5" onclick="IN.doFocus();"> </option><option value="#FFCD00" style="background: #FFCD00" onclick="IN.doFocus();"> </option><option value="#4BE22C" style="background: #4BE22C" onclick="IN.doFocus();"> </option><option value="#2CAFE2" style="background: #2CAFE2" onclick="IN.doFocus();"> </option><option value="#353CC4" style="background: #353CC4" onclick="IN.doFocus();"> </option><option value="#E22C9A" style="background: #E22C9A" onclick="IN.doFocus();"> </option><option value="#35A31F" style="background: #35A31F" onclick="IN.doFocus();"> </option><option value="#A31F6E" style="background: #A31F6E" onclick="IN.doFocus();"> </option><option value="#FF00FF" style="background: #FF00FF" onclick="IN.doFocus();"> </option></select> <button id="bS1" style="cursor: pointer" onmouseup="insertS1()">♫♬♪</button> ';
// Fin_de_la_creacion_de_los_elementos_html.

// funcion para darle color a la eleccion de color que hagamos en el 'select':
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
// funcion para insertar simbolos:
function insertS1()
{
CI.window.document.getElementById("B").innerHTML += "♫♬♪";
//IN.doFocus();
}


//para el html:
var nuevaAnclaT1 = document.createElement("a");
nuevaAnclaT1.appendChild(document.createTextNode(''));
var anclaExistenteT = document.getElementById("sBTNS");
var padreT = anclaExistenteT.parentNode;
var nuevoHijoT1 = padreT.insertBefore(nuevaAnclaT1, anclaExistenteT);

// Parte del html con los nuevos símbolos:
nuevaAnclaT1.innerHTML = ' Letras: <select id="newFont"><option value="abcdefghijklmnñopqrstuvwxyz">abc</option><option value="ᾀᏰᏨᕍ⁅ᖴgᏲḭʝḳ℄ḾṈῆṎᑬQᖇຮtᙈעᏔჯẙẔ">ᾀᏰᏨ</option><option value="მჩეძპfცhἶქκlოиῆᎤρგΓჰtυ√wჯყz">მჩე</option><option value="ÂßĈÐЄŦǤĦĪʖҚĿ♏ИῆØPҨRՏ†ЦVЩX￥Ẕ">ÂßĈ</option><option value="ΛßƇDƐFƓĤĪĴҠĿMИῆ♡ṖҨŔSƬƱѴѠӾYZ">ΛßƇ♡</option><option value="ᏗᏰՇᎴᏋƒĢᏂᎥᏠᏦᏝᎷᏁῆᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ">ᏗᏰՇ</option><option value="αвς∂εƒցнɪĵƙℓɱиῆσρףяѕтƲνωχϓՀ">αвς</option><option value="ᎯᏰᏨᕍḕᖴgᏲḭǰḳl๓nῆ๏ᑬqᖇຮtᙈvᏔჯẙẔ">ᎯᏰᏨ</option><option value="નЪ૮ԁ૯ԲցસіڙқԼறהῆଇϷ૧Я૬Ҭμνயϰϓｚ">નЪ૮</option><option value="ԹՅՇԺƐԲցɧᎥʝƙℓʍՌῆʘρφʀՏԵՄעաχՎʑ">ԹՅՇ</option><option value="48CD3F6HIJK1MИÑ0PQЯ57UVWXY2">48C</option><option value="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝñⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ">ⓐⓑⓒ</option><option value="ªb¢ÞÈF૬ɧÎjΚĻмηῆ◊ǷƍrS⊥µ√w×ýz">ªb¢</option><option value="ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢῆﾷϸϘЯଌȚȗѵ￦ҲעŻ">ΔҌﾧ</option><option value="ᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎῆOᑭᑫᖇᔕTᙀᐯᙎ᙭Yᘔ">ᗩᙖᙅ</option><option value="ᵃᵇᶜᵈᵉᶠᵍʰᶤʲᵏˡᵐⁿῆᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ">ᵃᵇᶜ</option><option value="ɐqɔpǝɟɓɥıſʞlɯuñodbɹsʇnʌʍxʎz">ɐqɔ</option><option value="∀BɔDƎℲGHIſʞlWᴎñOԀQᴚS⊥∩ᴧMXʎZ">∀Bɔ</option><option value="ąҍçժҽƒցհìʝҟӀʍղῆ✿քզɾʂէմѵա×վՀ">ąҍç</option><option value="ａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ">ａｂｃ</option><option value="ᕱცᕳᗬӬ∮ʛஅɪلɮᄂ♏ȠňФקϤԄƧてʊᏉʬϪץʑ">ᕱცᕳ</option><option value="ąც८ძ૯ʄ૭ҺɿڽқℓɱՈῆరƿҩ२ﻯ੮υ౮ω૪ყζ">ąც८</option><option value="ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼ"" title="ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼ">ₐᵇᵓ</option><option value="ᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄๓ՌñṎᑬQᖇຮtᙈvᏔჯẙẔ">ᾀᏰᏨ</option><option value="Aʙඋd㉫ƒＧħÏﻝĸし๓Ǹñ✿ƿqr＄†µvŴxƴz">Aʙඋ</option><option value="ᏜℬᏟᗬ℮ℱℊዞℹᎫʞᎱmɲñʘ℘ɸℛᏕʈʉʋᎳℵᎽᏃ">ᏜℬᏟ</option><option value="ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁñᎾᏢqᏒsᏆuᏉᎳxᎽᏃ">ᎪbᏟ</option><option value="♌♭꒞꒯㉹f꒸♬ﭐ꒻kLѪոñ♡рզrՖﮠvա꒾վՀ">♌♭꒞</option><option value="Ⱥβ↻DƐƑƓǶįلҠL♏ՌῆoƿףЯϚTԱVచჯӋʑ">Ⱥβ↻</option><option value="ค๒ς๔єŦɠђเןкl๓ภÑ๏թợгรtยvฬxץz">ค๒ς</option><option value="ᾆḇḉḓễḟḡḧἷjḵḺḿᾖῇỠῤǬṝṧṯῠṽᾧẍỹẐ">ᾆḇḉ</option></select> <button id="c_btn" onmouseup="cambiar_modo()">Modo1</button> <button id="mostForm" onclick="funcMCol()">Colores</button>';

////////////////////////////////////////
var myTe;
var r3;
var r3G;
///////////////////////////////////////


// SCRIPT "GENERADOR DE TEXTO con fuente de símbolos y de 2 Colores":
function pSMas()
{
  myTe = CI.window.document.getElementById("B").innerHTML;//debe ir dentro de la funcion.
    
	//enviar:
	var nn = document.getElementById("newFont").value
	var n_t = nn.split("");

	var rText = myTe.replace(/a/g, n_t[0]).replace(/b/g, n_t[1]).replace(/c/g, n_t[2]).replace(/d/g, n_t[3]).replace(/e/g, n_t[4]).replace(/f/g, n_t[5]).replace(/g/g, n_t[6]).replace(/h/g, n_t[7]).replace(/i/g, n_t[8]).replace(/j/g, n_t[9]).replace(/k/g, n_t[10]).replace(/l/g, n_t[11]).replace(/m/g, n_t[12]).replace(/n/g, n_t[13]).replace(/ñ/g, n_t[14]).replace(/o/g, n_t[15]).replace(/p/g,n_t[16]).replace(/q/g,n_t[17]).replace(/r/g, n_t[18]).replace(/s/g, n_t[19]).replace(/t/g, n_t[20]).replace(/u/g, n_t[21]).replace(/v/g, n_t[22]).replace(/w/g, n_t[23]).replace(/x/g, n_t[24]).replace(/y/g, n_t[25]).replace(/z/g, n_t[26]);

	var negrita0 = ""; var negrita1 = "";
	if (document.getElementById('TBB').className == "tbtn")//black
	{
	negrita0 = ""; negrita1 = "";
	}
	else
	{
	negrita0 = "[b]"; negrita1 = "[/b]";
	}

	var r2= rText;
	//EXCEPCIONES de fuente:
	r3 = r2.replace("+", "").replace(/&nbsp;/g, " ").replace(/&ՌβϚƿ;/g, " ").replace(/&ภ๒รթ;/g, " ").replace(/&ᾖḇṧῤ;/g, " ").replace(/&ᏁbsᏢ;/g, " ").replace(/&ՌᏰຮᑬ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&ɲℬᏕ℘;/g, " ").replace(/&ո♭Ֆр;/g, " ").replace(/&ᶮᵇᶳᵖ;/g, " ").replace(/&Ոცﻯƿ;/g, " ").replace(/&ṈᏰຮᑬ;/g, " ").replace(/&ⁿᵇˢᵖ;/g, " ").replace(/&иჩჰρ;/g, " ").replace(/&ИßՏP;/g, " ").replace(/&ИßSṖ;/g, " ").replace(/&ᏁᏰᏕᎮ;/g, " ").replace(/&ивѕρ;/g, " ").replace(/&nᏰຮᑬ;/g, " ").replace(/&הЪ૬Ϸ;/g, " ").replace(/&ՌՅՏρ;/g, " ").replace(/&И85P;/g, " ").replace(/&ⓝⓑⓢⓟ;/g, " ").replace(/&ηbSǷ;/g, " ").replace(/&ﾢҌଌϸ;/g, " ").replace(/&ᑎᙖᔕᑭ;/g, " ").replace(/&uqsd;/g, " ").replace(/&nbsd;/g, " ").replace(/&ᴎBSԀ;/g, " ").replace(/&ղҍʂք;/g, " ").replace(/&ｎｂｓｐ;/g, " ").replace(/&ȠცƧק;/g, " ");
	//Excepciones (cada vez que se agrega una fuente agregar su respectiva excepcion a <br>):
	r4 = r3.replace("<br>", "").replace("<Ᏸᖇ>", "").replace("<ჩΓ>", "").replace("<ßR>", "").replace("<ßŔ>", "").replace("<ᏰᏒ>", "").replace("<вя>", "").replace("<Ᏸᖇ>", "").replace("<ЪЯ>", "").replace("<Յʀ>", "").replace("<8Я>", "").replace("<ⓑⓡ>", "").replace("<br>", "").replace("<ҌЯ>", "").replace("<ᙖᖇ>", "").replace("<ᵇʳ>", "").replace("<bɹ>", "").replace("<Bᴚ>", "").replace("<ҍɾ>", "").replace("<ｂｒ>", "").replace("<ცԄ>", "").replace("<ც२>", "").replace("<ᵇͬ>", "").replace("<Ᏸᖇ>", "").replace("<ʙr>", "").replace("<ℬℛ>", "").replace("<bᏒ>", "").replace("<♭r>", "").replace("<βЯ>", "").replace("<๒г>", "").replace("<ḇṝ>", "");

////////////////////////////////////////////////////////////////////////////////////////////////
// constructor de la funcion para texto multicolor:

  var texto = r4;
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
    }
    else // si i no es par:
    {
    var nt = "[c=" + tColor2 + "]" + stexto[i] + "[/c]";
    nm += nt
    }
  }

  if ( texto != "" )
  {
    var nt = "[b]" + nm + "[/b]";
    var nb = nt.replace("undefined", "");
    BL.sendMessage(TB.aT,rcUtil.html2bb(nb));
    IN.CI.document.body.innerHTML="";
    nm="";
  }
////////////////////////////////////////////////////////////////////////////////////////////////
	IN.clear();
	IN.doFocus();
}
//Fin del Generador_de_texto_+_texto_multi_color.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// FUNCION PARA TEXTO CON GRADIENTE:
function pGrad()
{
  myTe = CI.window.document.getElementById("B").innerHTML;//debe ir dentro de la funcion.
    
	//enviar:
	var nnG = document.getElementById("newFont").value
	var n_t = nnG.split("");

	var rTextG = myTe.replace(/a/g, n_t[0]).replace(/b/g, n_t[1]).replace(/c/g, n_t[2]).replace(/d/g, n_t[3]).replace(/e/g, n_t[4]).replace(/f/g, n_t[5]).replace(/g/g, n_t[6]).replace(/h/g, n_t[7]).replace(/i/g, n_t[8]).replace(/j/g, n_t[9]).replace(/k/g, n_t[10]).replace(/l/g, n_t[11]).replace(/m/g, n_t[12]).replace(/n/g, n_t[13]).replace(/ñ/g, n_t[14]).replace(/o/g, n_t[15]).replace(/p/g,n_t[16]).replace(/q/g,n_t[17]).replace(/r/g, n_t[18]).replace(/s/g, n_t[19]).replace(/t/g, n_t[20]).replace(/u/g, n_t[21]).replace(/v/g, n_t[22]).replace(/w/g, n_t[23]).replace(/x/g, n_t[24]).replace(/y/g, n_t[25]).replace(/z/g, n_t[26]);

	var r2= rTextG;
	//EXCEPCIONES de fuente:
	r3G = r2.replace("+", "").replace("undefined", "").replace(/&nbsp;/g, " ").replace(/&ՌβϚƿ;/g, " ").replace(/&ภ๒รթ;/g, " ").replace(/&ᾖḇṧῤ;/g, " ").replace(/&ᏁbsᏢ;/g, " ").replace(/&ՌᏰຮᑬ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&ɲℬᏕ℘;/g, " ").replace(/&ո♭Ֆр;/g, " ").replace(/&ᶮᵇᶳᵖ;/g, " ").replace(/&Ոცﻯƿ;/g, " ").replace(/&ṈᏰຮᑬ;/g, " ").replace(/&ⁿᵇˢᵖ;/g, " ").replace(/&иჩჰρ;/g, " ").replace(/&ИßՏP;/g, " ").replace(/&ИßSṖ;/g, " ").replace(/&ᏁᏰᏕᎮ;/g, " ").replace(/&ивѕρ;/g, " ").replace(/&nᏰຮᑬ;/g, " ").replace(/&הЪ૬Ϸ;/g, " ").replace(/&ՌՅՏρ;/g, " ").replace(/&И85P;/g, " ").replace(/&ⓝⓑⓢⓟ;/g, " ").replace(/&ηbSǷ;/g, " ").replace(/&ﾢҌଌϸ;/g, " ").replace(/&ᑎᙖᔕᑭ;/g, " ").replace(/&uqsd;/g, " ").replace(/&nbsd;/g, " ").replace(/&ᴎBSԀ;/g, " ").replace(/&ղҍʂք;/g, " ").replace(/&ｎｂｓｐ;/g, " ").replace(/&ȠცƧק;/g, " ");
	//Excepciones (cada vez que se agrega una fuente agregar su respectiva excepcion a <br>):
	r4G = r3G.replace("undefined", "").replace("<br>", "").replace("<Ᏸᖇ>", "").replace("<ჩΓ>", "").replace("<ßR>", "").replace("<ßŔ>", "").replace("<ᏰᏒ>", "").replace("<вя>", "").replace("<Ᏸᖇ>", "").replace("<ЪЯ>", "").replace("<Յʀ>", "").replace("<8Я>", "").replace("<ⓑⓡ>", "").replace("<br>", "").replace("<ҌЯ>", "").replace("<ᙖᖇ>", "").replace("<ᵇʳ>", "").replace("<bɹ>", "").replace("<Bᴚ>", "").replace("<ҍɾ>", "").replace("<ｂｒ>", "").replace("<ცԄ>", "").replace("<ც२>", "").replace("<ᵇͬ>", "").replace("<Ᏸᖇ>", "").replace("<ʙr>", "").replace("<ℬℛ>", "").replace("<bᏒ>", "").replace("<♭r>", "").replace("<βЯ>", "").replace("<๒г>", "").replace("<ḇṝ>", "");

////////////////////////////////////////////////////////////////////////////////////////////////
// constructor de la funcion para texto con Gradiente:

  var textoG = r4G;// SALIDA DE TEXTO YA CON LOS CARACTERES CAMBIADOS.
  
// lookup table
var tohex = new Array(256);
var hex = "0123456789ABCDEF";
var count = 0;
for (x=0; x<16; x++) {
 for (y=0; y<16; y++) {
 tohex[count] = hex.charAt(x) + hex.charAt(y);
 count++;
 }
}

//ColorCode constructor
function ColorCode(hexcode) {
  if (hexcode.length == 7) {
    this.r = parseInt(hexcode.substring(1,3),16);
    this.g = parseInt(hexcode.substring(3,5),16);
    this.b = parseInt(hexcode.substring(5,7),16);
  }
  else if (hexcode.length == 6) {
    this.r = parseInt(hexcode.substring(0,2),16);
    this.g = parseInt(hexcode.substring(2,4),16);
    this.b = parseInt(hexcode.substring(4,6),16);
  }
  else {
    this.r = this.g = this.b = 0;
    alert("Error: ColorCode constructor failed");
  }
  if (isNaN(this.r)||isNaN(this.g)||isNaN(this.b))
    alert("Error: ColorCode constructor failed");
}

// ColorList constructor
function ColorList(hexcodes) {
  var i = 0;
  var c = 0;
  this.codes = new Array(Math.round(hexcodes.length/7));
  while (i < hexcodes.length) {
    if (isNaN(parseInt(hexcodes.substring(i,i+6),16))) ++i;
    else {
      this.codes[c] = new ColorCode(hexcodes.substring(i,i+6));
      i += 7;
      ++c;
    }
  }
  this.len = c;
}

function interpolate (x1, y1, x3, y3, x2) {
  if (x3 == x1) return y1
  else return (x2-x1)*(y3-y1)/(x3-x1) + y1
}

// x=index of letter, y=number of letters, z=number of colors
function lowcolorindex (x, y, z) {
  if (y == 1) return 0
  else return Math.floor( (x*(z-1))/(y-1) )
}

function hicolorindex (x, y, z, low) { 
  if ( low*(y-1) == x*(z-1) ) return low
  else if (y == 1) return 0
  else return Math.floor( (x*(z-1))/(y-1) + 1 )
}

//
var nT;
var nR;
function gradient (thetext,thecolors) 
{
    var colors = new ColorList(thecolors);
    var numcolors = colors.len;
    var numchars = thetext.length;
    var rr = 0;
    var gg = 0;
    var bb = 0;
    var lci = 0; //lower color index
    var hci = 0; //high color index

	for (i=0; i<numchars; ++i) 
	{
      	lci = lowcolorindex(i, numchars, numcolors);
      	hci = hicolorindex(i, numchars, numcolors, lci);
      	rr = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].r, hci/(numcolors-1), colors.codes[hci].r, i/(numchars-1)));
      	gg = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].g, hci/(numcolors-1), colors.codes[hci].g, i/(numchars-1)));
      	bb = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].b, hci/(numcolors-1), colors.codes[hci].b, i/(numchars-1)));
	/////
	var salida = "[c=#" + tohex[rr] + tohex[gg] + tohex[bb] + "]" + thetext.charAt(i) + "[/c]"
  	nT += salida
  	nR = nT.replace("undefined", "");
	}

  //aqui debe ir el envio de datos:
  var tN = "[b]"+nR+"[/b]";
  var uT = tN.replace("undefined", "");
  BL.sendMessage(TB.aT,rcUtil.html2bb(uT));
  IN.CI.document.body.innerHTML="";
  nT="";
  nR="";
}
	if ( myTe != "" )
	{
	// Aqui tomamos el texto y se lo pasamos a la funcion de arriba:
	var e_text = textoG;
	var r_t = e_text.replace("undefined", "").replace("<br>", "");
	gradient(r_t,"EA112F FF037F 6F6EF1  02B5F3 00FF00 10650D 164CB2");
	}
////////////////////////////////////////////////////////////////////////////////////////////////
	IN.clear();
	IN.doFocus();
}
//Fin del Generador_de_texto + Gradiente.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Aquí se crea la llamada al evento, agregando la funcion a la caja de texto del elemento B:
var elemento = CI.window.document.getElementById("B");
elemento.addEventListener( "keyup", function()
{
  myTe = CI.window.document.getElementById("B").innerHTML;

  if ( myTe.search(/\053/) > -1 )
	{
	//053= +
	// aqui se ejecuta la (las) funcion (es) propiamente:
		if ( document.getElementById("c_btn").innerHTML == "Modo1" )
		{
		pGrad();
		}
		else
		{
		pSMas();
		}
	}
})
//Fin del add_event_listener.


// FIN DEL SCRIPT.


