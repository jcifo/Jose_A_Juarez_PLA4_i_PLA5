/**
 * 
 */

function contarA(){
	var cadena=("ABACDAEFAGH");
	var totalElemRepet=0;
	
	for(elementoCadena=0;elementoCadena<=cadena.length;elementoCadena++){
	posicion=cadena.charAt(elementoCadena)
		if(posicion=="A"){
		totalElemRepet++;	
		//document.write(posicion + "<BR>")
	  }
	} 
        document.write("El total de repeticiones de la letra A son: " + totalElemRepet)	
    }
