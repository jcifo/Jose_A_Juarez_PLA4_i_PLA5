/**
 * 
 */
function alertaNum(){
var cadena=prompt("introduce una cadena de letras");
document.write(cadena + "<BR>")
var totalElemRepet=0;
var numeroDePosicion=" ";
var posicionAsci=0;
//var letra=prompt("introduce la letra que quieras saber cuantas veces se repite")
for(elementoCadena=0;elementoCadena<=cadena.length;elementoCadena++){
posicion=cadena.charAt(elementoCadena);
posicionAsci=cadena.charCodeAt(elementoCadena);
//document.write(posicionAsci + "<BR>");
if (posicionAsci>=49 && posicionAsci<=57){
		
	posicionReal=elementoCadena+1;
	document.write("OJO!!! en la posicion " + posicionReal + " tienes el numero " + posicion + "<BR>")

  }
 } 
}
	
