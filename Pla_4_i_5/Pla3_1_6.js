/**
 * 
 */
function posicionesA(){
	var cadena=prompt("introduce una cadena de letras");
	var totalElemRepet=0;
	var numeroDePosicion=" ";
	//var letra=prompt("introduce la letra que quieras saber cuantas veces se repite")
	for(elementoCadena=0;elementoCadena<=cadena.length;elementoCadena++){
	posicion=cadena.charAt(elementoCadena)
		if(posicion=="A"){
		//totalElemRepet++;	
			
		posicionReal=elementoCadena+1;	
		numeroDePosicion=numeroDePosicion + " , " + posicionReal;
		//document.write(posicion + "<BR>")

	 }
    	
	} 
        document.write("Las posiciones de la letra A son: " + numeroDePosicion)
       
        
	
    }