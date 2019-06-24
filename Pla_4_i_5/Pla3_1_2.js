/**
 * 
 */
function contarLetra(){
	var cadena=("ABACDAEFAGH");
	var totalElemRepet=0;
	var letra=prompt("introduce una letra")
	for(elementoCadena=0;elementoCadena<=cadena.length;elementoCadena++){
	posicion=cadena.charAt(elementoCadena)
		if(posicion==letra){
		totalElemRepet++;	
	//	document.write(posicion + "<BR>")

	  }
    
	} 
        document.write("El total de repeticiones de la letra " + letra + " son: " + totalElemRepet)
        
    
	
    }
