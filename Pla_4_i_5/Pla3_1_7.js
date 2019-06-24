/**
 * 
 */
function posNum(){
      var elementoCadena=0;
      var cadena="";
      var totalNumero=0; 
      var numero=0
      for(rellCad=0;rellCad<=9;rellCad++){
    	rellenarCadena=Math.floor(Math.random() * ((9+1)-0)+0);
        cadena=cadena + rellenarCadena; 

      }
      document.write(cadena + "<BR>" + "<BR>"); 
      for(numero=0;numero<10;numero++){
    	  var totalNumero=0;                           
  		                                         
      
		for(elementoCadena=0;elementoCadena<cadena.length;elementoCadena++){
		posicion=cadena.charAt(elementoCadena); 
		//document.write(posicion + "<BR>")
		
		if(posicion==numero){ 
			totalNumero++
		//	document.write(totalNumero + "<BR>")
			}
			
		
			
			
	    }
		  document.write(" | " + "Num. " + numero + " | " + totalNumero  + " | " + "<BR>");
	        
		}
     
	                                                                                             
		
}


































