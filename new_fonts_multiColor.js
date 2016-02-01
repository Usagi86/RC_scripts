//
//
//
//
/**********************************************
    Nuevo Script
    en donde 'uniré' en un solo codigo
    el script del "Generador_de_texto"
    y el script del "Texto_multi_color".
    para que se pueda escribir tanto a colores
    con letras normales, como con las letras
    de símbolos.
***********************************************/


// SCRIPT "GENERADOR DE TEXTO":
// v3.3

var myTe;

//para el html:
var nuevaAnclaT1 = document.createElement("a");
nuevaAnclaT1.appendChild(document.createTextNode(''));
var nuevaAnclaT2 = document.createElement("a");
nuevaAnclaT2.appendChild(document.createTextNode(''));
var anclaExistenteT = document.getElementById("sBTNS"); var padreT = anclaExistenteT.parentNode;
var nuevoHijoT1 = padreT.insertBefore(nuevaAnclaT1, anclaExistenteT);
var nuevoHijoT2 = padreT.insertBefore(nuevaAnclaT2, anclaExistenteT);

nuevaAnclaT1.innerHTML = ' Letras: <select id="newFont"><option value="abcdefghijklmnñopqrstuvwxyz">abc</option><option value="ᾀᏰᏨᕍ⁅ᖴgᏲḭʝḳ℄ḾṈῆṎᑬQᖇຮtᙈעᏔჯẙẔ">ᾀᏰᏨ</option><option value="მჩეძპfცhἶქκlოиῆᎤρგΓჰtυ√wჯყz">მჩე</option><option value="ÂßĈÐЄŦǤĦĪʖҚĿ♏ИῆØPҨRՏ†ЦVЩX￥Ẕ">ÂßĈ</option><option value="ΛßƇDƐFƓĤĪĴҠĿMИῆ♡ṖҨŔSƬƱѴѠӾYZ">ΛßƇ♡</option><option value="ᏗᏰՇᎴᏋƒĢᏂᎥᏠᏦᏝᎷᏁῆᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ">ᏗᏰՇ</option><option value="αвς∂εƒցнɪĵƙℓɱиῆσρףяѕтƲνωχϓՀ">αвς</option><option value="ᎯᏰᏨᕍḕᖴgᏲḭǰḳl๓nῆ๏ᑬqᖇຮtᙈvᏔჯẙẔ">ᎯᏰᏨ</option><option value="નЪ૮ԁ૯ԲցસіڙқԼறהῆଇϷ૧Я૬Ҭμνயϰϓｚ">નЪ૮</option><option value="ԹՅՇԺƐԲցɧᎥʝƙℓʍՌῆʘρφʀՏԵՄעաχՎʑ">ԹՅՇ</option><option value="48CD3F6HIJK1MИÑ0PQЯ57UVWXY2">48C</option><option value="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝñⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ">ⓐⓑⓒ</option><option value="ªb¢ÞÈF૬ɧÎjΚĻмηῆ◊ǷƍrS⊥µ√w×ýz">ªb¢</option><option value="ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢῆﾷϸϘЯଌȚȗѵ￦ҲעŻ">ΔҌﾧ</option><option value="ᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎῆOᑭᑫᖇᔕTᙀᐯᙎ᙭Yᘔ">ᗩᙖᙅ</option><option value="ᵃᵇᶜᵈᵉᶠᵍʰᶤʲᵏˡᵐⁿῆᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ">ᵃᵇᶜ</option><option value="ɐqɔpǝɟɓɥıſʞlɯuñodbɹsʇnʌʍxʎz">ɐqɔ</option><option value="∀BɔDƎℲGHIſʞlWᴎñOԀQᴚS⊥∩ᴧMXʎZ">∀Bɔ</option><option value="ąҍçժҽƒցհìʝҟӀʍղῆօքզɾʂէմѵա×վՀ">ąҍç</option><option value="ａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ">ａｂｃ</option><option value="ᕱცᕳᗬӬ∮ʛஅɪلɮᄂ♏ȠňФקϤԄƧてʊᏉʬϪץʑ">ᕱცᕳ</option><option value="ąც८ძ૯ʄ૭ҺɿڽқℓɱՈῆరƿҩ२ﻯ੮υ౮ω૪ყζ">ąც८</option><option value="ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼ"" title="ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼ">ₐᵇᵓ</option><option value="ᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄๓ՌñṎᑬQᖇຮtᙈvᏔჯẙẔ">ᾀᏰᏨ</option><option value="Aʙඋd㉫ƒＧħÏﻝĸし๓Ǹñ✿ƿqr＄†µvŴxƴz">Aʙඋ</option><option value="ᏜℬᏟᗬ℮ℱℊዞℹᎫʞᎱmɲñʘ℘ɸℛᏕʈʉʋᎳℵᎽᏃ">ᏜℬᏟ</option><option value="ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁñᎾᏢqᏒsᏆuᏉᎳxᎽᏃ">ᎪbᏟ</option><option value="♌♭꒞꒯㉹f꒸♬ﭐ꒻kLѪոñ♡рզrՖﮠvա꒾վՀ">♌♭꒞</option><option value="Ⱥβ↻DƐƑƓǶįلҠL♏ՌῆoƿףЯϚTԱVచჯӋʑ">Ⱥβ↻</option><option value="ค๒ς๔єŦɠђเןкl๓ภÑ๏թợгรtยvฬxץz">ค๒ς</option><option value="ᾆḇḉḓễḟḡḧἷjḵḺḿᾖῇỠῤǬṝṧṯῠṽᾧẍỹẐ">ᾆḇḉ</option>';
nuevaAnclaT2.innerHTML = ' <button id="enviarT" title="Te Amo mi Cielo Bella" onmousedown="pressD();" onmouseup="pressU();">Enviar</button> ';

//++
function pSMas()
{
    var myTe = CI.window.document.getElementById("B").innerHTML;//debe ir dentro de la funcion.
    
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

//
	var r2= "[c=" + IN.clr+ "]" + negrita0 + rText + negrita1 + "[/c]"
	
	r3 = r2.replace("+", "").replace(/&ՌβϚƿ;/g, " ").replace(/&ภ๒รթ;/g, " ").replace(/&ᾖḇṧῤ;/g, " ").replace(/&ᏁbsᏢ;/g, " ").replace(/&ՌᏰຮᑬ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&ɲℬᏕ℘;/g, " ").replace(/&ո♭Ֆр;/g, " ").replace(/&ᶮᵇᶳᵖ;/g, " ").replace(/&Ոცﻯƿ;/g, " ").replace(/&ṈᏰຮᑬ;/g, " ").replace(/&ⁿᵇˢᵖ;/g, " ").replace(/&иჩჰρ;/g, " ").replace(/&ИßՏP;/g, " ").replace(/&ИßSṖ;/g, " ").replace(/&ᏁᏰᏕᎮ;/g, " ").replace(/&ивѕρ;/g, " ").replace(/&nᏰຮᑬ;/g, " ").replace(/&הЪ૬Ϸ;/g, " ").replace(/&ՌՅՏρ;/g, " ").replace(/&И85P;/g, " ").replace(/&ⓝⓑⓢⓟ;/g, " ").replace(/&ηbSǷ;/g, " ").replace(/&ﾢҌଌϸ;/g, " ").replace(/&ᑎᙖᔕᑭ;/g, " ").replace(/&uqsd;/g, " ").replace(/&nbsd;/g, " ").replace(/&ᴎBSԀ;/g, " ").replace(/&ղҍʂք;/g, " ").replace(/&ｎｂｓｐ;/g, " ").replace(/&ȠცƧק;/g, " ");

	BL.sendMessage(TB.aT,rcUtil.html2bb(r3));
	IN.clear();
	IN.doFocus();
}
//Fin del Generador_de_texto.

//++ Aquí se crea la llamada al evento, agregando la funcion a la caja de texto del elemento B:
var elemento = CI.window.document.getElementById("B");

elemento.addEventListener( "keyup", function()
{
  myTe = CI.window.document.getElementById("B").innerHTML;

  if ( myTe.search(/\053/) > -1 )
	{
	//056= .
	//053= +
	// aqui se ejecuta la funcion propiamente:
	pSMas();
	}
})


//Fin.





