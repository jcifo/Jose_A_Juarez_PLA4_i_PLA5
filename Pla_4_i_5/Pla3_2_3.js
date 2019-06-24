/**
 * 
 */

function SumaDiagonal(){
	  var cadena=""
	      for(rellCad=0;rellCad<=24;rellCad++){
	    	rellenarCadena=Math.floor(Math.random() * ((9+1)-0)+0);
	        cadena=cadena + rellenarCadena; 

	      }
    document.write(cadena+"<BR>")
	
	var valorCelda=new Array();

	for(b=0;b<5;b++){
		valorCelda[b]=new Array();
	

	}
	var posicion=-1;
	for(f=0;f<5;f++){
		for(c=0;c<5;c++){
		posicion++;	
		elementoCadena=cadena.charAt(posicion);	
		valorCelda[f][c]=elementoCadena	;
		//document.write(valorCelda[f][c]+"<BR>")
		}
	}
	///////////////////////////////////////////////////////////////////
	var sumaDiagonal=0
	 // Obtener la referencia del elemento body
	  var body = document.getElementsByTagName("body")[0];	
	  
	  // Crea un elemento <table> y un elemento <tbody>
	  var tabla   = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	 
	  // Crea las celdas
	  for (var fila = 0; fila < 5; fila++) {
		  // Crea las hileras de la tabla
	  var hilera = document.createElement("tr");
	    for (var colum = 0; colum < 5; colum++) {
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
	  document.write("<BR>" +"La suma de la diagonal es :" + sumaDiagonal)
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  //appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");
	 
	
		
		
	
	
}