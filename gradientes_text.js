
// ------------------ Gradient Output --------------------



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
//////////////////////////////////////////////////////////////////
	
	console.log(numchars);
	
//////////////////////////////////////////////////////////////////	
    for (i=0; i<numchars; ++i) 
	{
      lci = lowcolorindex(i, numchars, numcolors);
      hci = hicolorindex(i, numchars, numcolors, lci);
      rr = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].r, hci/(numcolors-1), colors.codes[hci].r, i/(numchars-1)));
      gg = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].g, hci/(numcolors-1), colors.codes[hci].g, i/(numchars-1)));
      bb = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].b, hci/(numcolors-1), colors.codes[hci].b, i/(numchars-1)));

      
	//  document.write(thetext.charAt(i).fontcolor("#"+tohex[rr]+tohex[gg]+tohex[bb]));
	
	
	//var salida = thetext.charAt(i).fontcolor("#"+tohex[rr]+tohex[gg]+tohex[bb]);
	var salida = "[c=#" + tohex[rr] + tohex[gg] + tohex[bb] + "]" + thetext.charAt(i) + "[/c]"
  nT += salida
  nR = nT.replace("undefined", "");
	//getElementById("salida_t").innerHTML = salida;
    
    
	}

  console.log(nR);
  //aqui debe ir el envio de datos:
  BL.sendMessage(TB.aT,rcUtil.html2bb(nR));
  IN.CI.document.body.innerHTML="";
  nT="";
  nR="";
}

var e_text = IN.CI.document.body.innerHTML;
var r_t = e_text.replace("<br>","");
gradient(r_t,"EA112F 6F6EF1 02B5F3 00FF00 10650D 164CB2");



