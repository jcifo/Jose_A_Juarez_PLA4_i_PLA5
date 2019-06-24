/**
 * 
 */
function MediaDiagonal(){
		  var cadena=""
		  var n=0 
		  var n=Math.round(Math.random() *7)+2; 
		  var n= n*n;
	      for(rellCad=0;rellCad<n;rellCad++){
	    rellenarCadena=Math.round(Math.random() *9);
	    	 
	         cadena=cadena + rellenarCadena; 

	      }
	document.write("Cadena"+"<BR>")
    document.write(cadena+"<BR>")
	var nColum=Math.sqrt(cadena.length)
	var valorCelda=new Array();

	for(b=0;b<nColum;b++){
		valorCelda[b]=new Array();
	

	}
	var posicion=-1;
	for(f=0;f<nColum;f++){
		for(c=0;c<nColum;c++){
		posicion++;	 
		elementoCadena=cadena.charAt(posicion);	
		valorCelda[f][c]=elementoCadena	;
		}
	    }
	
	///////////////////////////////////////////////////////////////////
	var sumaDiagonal=0;
	 // Obtener la referencia del elemento body
	  var body = document.getElementsByTagName("body")[0];	  
	  // Crea un elemento <table> y un elemento <tbody>
	  var tabla   = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	 
	  // Crea las celdas
	  for (var fila = 0; fila < nColum; fila++) {
		  // Crea las hileras de la tabla
	  var hilera = document.createElement("tr");
	    for (var colum = 0; colum < nColum; colum++) {
	    	if (fila==colum){
	    		sumaDiagonal=sumaDiagonal+parseInt(valorCelda[fila][colum])
	    	}
	    	
	      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
	      // texto sea el contenido de <td>, ubica el elemento <td> al final
	      // de la hilera de la tabla  
	      var celda = document.createElement("td");
	      var textoCelda = document.createTextNode(valorCelda[fila][colum]);
	      celda.appendChild(textoCelda);
	      hilera.appendChild(celda);
	      // agrega la hilera al final de la tabla (al final del elemento tblbody)

	   }
	    tblBody.appendChild(hilera);
	  }
	  var media=sumaDiagonal/nColum
	    document.write("<BR>" +"La suma de la diagonal es : " + sumaDiagonal+"<BR>")	    
	    document.write("<BR>" +"La media de la diagonal es : " + media+"<BR>")
	  ////document.write("<BR>" +"La suma de la diagonal es :" + sumaDiagonal)
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  //appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");
	  var vector=media
	  for(rellVec=0;rellVec<n;rellVec++){
		    rellenarVector=Math.round(Math.random() *9);
		         vector=vector + "," + rellenarVector; 
		         }
	document.write("<BR>")	
	document.write("Vector:"+ "<BR>")
	document.write(vector + "<BR>")
	
 
}