/**
 * 
 */
function numMasAlto(){
	  var cadena=""
      var numMasAlto=0;
      var numDeRepeticiones=0;
      for(rellCad=0;rellCad<=9;rellCad++){
    	rellenarCadena=Math.floor(Math.random() * ((9+1)-0)+0);
        cadena=cadena + rellenarCadena; 

      }
      document.write(cadena + "<BR>" + "<BR>"); 
      numMasAlto=cadena.charAt(0)                                      
		for(elementoCadena=0;elementoCadena<cadena.length;elementoCadena++){
		posicion=cadena.charAt(elementoCadena); 
		//document.write(posicion + "<BR>")
		
		if(posicion==numMasAlto){ 
			numDeRepeticiones++
			}
	     if(posicion>numMasAlto){
		 
	         numDeRepeticiones=1
			 numMasAlto=posicion						
		}		
			
	    }
		  document.write("El numero mas alto es el : " + numMasAlto + " y se repite  " + numDeRepeticiones+ " veces")                                                                                             
		
}
