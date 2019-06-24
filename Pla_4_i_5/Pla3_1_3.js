/**
 * 
 */
function introCadena(){
	var cadena=prompt("introduce una cadena de letras");
	var totalElemRepet=0;
	var letra=prompt("introduce la letra que quieras saber cuantas veces se repite")
	for(elementoCadena=0;elementoCadena<=cadena.length;elementoCadena++){
	posicion=cadena.charAt(elementoCadena)
		if(posicion==letra){
		totalElemRepet++;	
	//	document.write(posicion + "<BR>")

	  }
    
	} 
        document.write("El total de repeticiones de la letra " + letra + " son: " + totalElemRepet)
       
        
	
    }
