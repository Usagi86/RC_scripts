/**********************************************
    Nuevo Script
    en donde 'uniré' en un solo codigo
    el script del "Generador_de_texto"
    y el script del "Texto_multi_color".
    para que se pueda escribir tanto a colores
    con letras normales, como con las letras
    de símbolos.
***********************************************/


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


// SCRIPT "GENERADOR DE TEXTO":
// v4
var myTe;
var r3;

//para el html:
var nuevaAnclaT1 = document.createElement("a");
nuevaAnclaT1.appendChild(document.createTextNode(''));
var anclaExistenteT = document.getElementById("sBTNS");
var padreT = anclaExistenteT.parentNode;
var nuevoHijoT1 = padreT.insertBefore(nuevaAnclaT1, anclaExistenteT);


// Parte del html con los nuevos símbolos:
nuevaAnclaT1.innerHTML = ' Letras: <select id="newFont"><option value="abcdefghijklmnñopqrstuvwxyz">abc</option><option value="ᾀᏰᏨᕍ⁅ᖴgᏲḭʝḳ℄ḾṈῆṎᑬQᖇຮtᙈעᏔჯẙẔ">ᾀᏰᏨ</option><option value="მჩეძპfცhἶქκlოиῆᎤρგΓჰtυ√wჯყz">მჩე</option><option value="ÂßĈÐЄŦǤĦĪʖҚĿ♏ИῆØPҨRՏ†ЦVЩX￥Ẕ">ÂßĈ</option><option value="ΛßƇDƐFƓĤĪĴҠĿMИῆ♡ṖҨŔSƬƱѴѠӾYZ">ΛßƇ♡</option><option value="ᏗᏰՇᎴᏋƒĢᏂᎥᏠᏦᏝᎷᏁῆᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ">ᏗᏰՇ</option><option value="αвς∂εƒցнɪĵƙℓɱиῆσρףяѕтƲνωχϓՀ">αвς</option><option value="ᎯᏰᏨᕍḕᖴgᏲḭǰḳl๓nῆ๏ᑬqᖇຮtᙈvᏔჯẙẔ">ᎯᏰᏨ</option><option value="નЪ૮ԁ૯ԲցસіڙқԼறהῆଇϷ૧Я૬Ҭμνயϰϓｚ">નЪ૮</option><option value="ԹՅՇԺƐԲցɧᎥʝƙℓʍՌῆʘρφʀՏԵՄעաχՎʑ">ԹՅՇ</option><option value="48CD3F6HIJK1MИÑ0PQЯ57UVWXY2">48C</option><option value="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝñⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ">ⓐⓑⓒ</option><option value="ªb¢ÞÈF૬ɧÎjΚĻмηῆ◊ǷƍrS⊥µ√w×ýz">ªb¢</option><option value="ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢῆﾷϸϘЯଌȚȗѵ￦ҲעŻ">ΔҌﾧ</option><option value="ᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎῆOᑭᑫᖇᔕTᙀᐯᙎ᙭Yᘔ">ᗩᙖᙅ</option><option value="ᵃᵇᶜᵈᵉᶠᵍʰᶤʲᵏˡᵐⁿῆᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ">ᵃᵇᶜ</option><option value="ɐqɔpǝɟɓɥıſʞlɯuñodbɹsʇnʌʍxʎz">ɐqɔ</option><option value="∀BɔDƎℲGHIſʞlWᴎñOԀQᴚS⊥∩ᴧMXʎZ">∀Bɔ</option><option value="ąҍçժҽƒցհìʝҟӀʍղῆ✿քզɾʂէմѵա×վՀ">ąҍç</option><option value="ａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ">ａｂｃ</option><option value="ᕱცᕳᗬӬ∮ʛஅɪلɮᄂ♏ȠňФקϤԄƧてʊᏉʬϪץʑ">ᕱცᕳ</option><option value="ąც८ძ૯ʄ૭ҺɿڽқℓɱՈῆరƿҩ२ﻯ੮υ౮ω૪ყζ">ąც८</option><option value="ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼ"" title="ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼ">ₐᵇᵓ</option><option value="ᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄๓ՌñṎᑬQᖇຮtᙈvᏔჯẙẔ">ᾀᏰᏨ</option><option value="Aʙඋd㉫ƒＧħÏﻝĸし๓Ǹñ✿ƿqr＄†µvŴxƴz">Aʙඋ</option><option value="ᏜℬᏟᗬ℮ℱℊዞℹᎫʞᎱmɲñʘ℘ɸℛᏕʈʉʋᎳℵᎽᏃ">ᏜℬᏟ</option><option value="ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁñᎾᏢqᏒsᏆuᏉᎳxᎽᏃ">ᎪbᏟ</option><option value="♌♭꒞꒯㉹f꒸♬ﭐ꒻kLѪոñ♡рզrՖﮠvա꒾վՀ">♌♭꒞</option><option value="Ⱥβ↻DƐƑƓǶįلҠL♏ՌῆoƿףЯϚTԱVచჯӋʑ">Ⱥβ↻</option><option value="ค๒ς๔єŦɠђเןкl๓ภÑ๏թợгรtยvฬxץz">ค๒ς</option><option value="ᾆḇḉḓễḟḡḧἷjḵḺḿᾖῇỠῤǬṝṧṯῠṽᾧẍỹẐ">ᾆḇḉ</option></select>';


var myTe;
var r3;

//++
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
    //console.log(nm);
    }
    else // si i no es par:
    {
    var nt = "[c=" + tColor2 + "]" + stexto[i] + "[/c]";
    nm += nt
    //console.log(nm);
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

//BL.sendMessage(TB.aT,rcUtil.html2bb(r3));
	IN.clear();
	IN.doFocus();
}
//Fin del Generador_de_texto_+_texto_multi_color.



// Aquí se crea la llamada al evento, agregando la funcion a la caja de texto del elemento B:
var elemento = CI.window.document.getElementById("B");
elemento.addEventListener( "keyup", function()
{
  myTe = CI.window.document.getElementById("B").innerHTML;

  if ( myTe.search(/\053/) > -1 )
	{
	//053= +
	// aqui se ejecuta la funcion propiamente:
	pSMas();
	}
})
//Fin del add_event_listener.


// FIN DEL SCRIPT.


