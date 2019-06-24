/**
 * 
 */
function SumaDiagonalNxN(){
	  var cadena=""
	  var n=0 
      var n=Math.round(Math.random() *7)+2; 
	  var n= n*n;
	     
	      for(rellCad=0;rellCad<n;rellCad++){
	    	rellenarCadena=Math.round(Math.random() * 9);
	        cadena=cadena + rellenarCadena; 

	      }	
	       
	      var nColum=Math.sqrt(cadena.length);
          var posicion=0;
          var sumaDiagonal=0;
          document.write("Cadena"+"<BR>");
          document.write(cadena+"<BR>");
          document.write("los numeros de las diagonales a sumar son :"+"<BR>"); 
          for(elementoCadena=0;elementoCadena<nColum;elementoCadena++){
        	  
        	elemento =cadena.charAt(posicion); 
        	document.write(elemento+"<BR>");        	 
        	sumaDiagonal=sumaDiagonal+parseInt(elemento);	 
        	posicion=posicion+(nColum+1);
          }
	      document.write("La suma de la diagonal es igual a : "+sumaDiagonal+"<BR>");   
}