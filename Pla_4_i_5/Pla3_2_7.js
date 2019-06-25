/**
 * 
 */
function TipoNumero(){
		  var cadena=""
		  var n=0 
		  var n=Math.round(Math.random() *7)+2; 
		  var n= n*n;
	      for(rellCad=0;rellCad<n;rellCad++){
	    rellenarCadena=Math.random()
	    rellenarCadena=Math.round((rellenarCadena-(0.5)) *18);
	    // document.write(rellenarCadena+"<BR>")	 
	         cadena=cadena + rellenarCadena; 

	      }
	document.write("Cadena"+"<BR>")
    document.write(cadena+"<BR>")
	var nColum=Math.sqrt(n)
	var valorCelda=new Array();

	for(b=0;b<nColum;b++){
		valorCelda[b]=new Array();
	

	}
	var posicion=-1;
	var mayoresDeCero=0
	var igualCero=0
	var menoresDeCero=0
	for(f=0;f<nColum;f++){
		for(c=0;c<nColum;c++){
		posicion++;
		elementoCadena=cadena.charAt(posicion);	
		if(elementoCadena=="-"){
		posicion++;
		elementoCadena=cadena.charAt(posicion);
		
		elementoCadena=("-" + elementoCadena)
		}
		valorCelda[f][c]=elementoCadena	;
		if(c>f){
			if (elementoCadena>0){
			mayoresDeCero++
			}
			if (elementoCadena==0){
			igualCero++
			}
			if (elementoCadena<0){
				menoresDeCero++
				}
		}
		}
	    }
		//document.write(valorCelda[f][c]+"<BR>")
	document.write("<BR>")
	document.write("Hay " + menoresDeCero + " numeros menores de cero por encima de la diagonal"+"<BR>"+"<BR>")
	document.write("Hay " + mayoresDeCero + " numeros mayores de cero por encima de la diagonal"+"<BR>"+"<BR>")
	document.write("Hay " + igualCero + " numeros iguales a cero por encima de la diagonal"+"<BR>"+"<BR>")
	
	///////////////////////////////////////////////////////////////////
	 ///var sumaDiagonal=0;
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
	    	///if (fila==colum){
	    	///	sumaDiagonal=sumaDiagonal+parseInt(valorCelda[fila][colum])
	    	///}
	      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
	      // texto sea el contenido de <td>, ubica el elemento <td> al final
	      // de la hilera de la tabla  
	      var celda = document.createElement("td");
	      var textoCelda = document.createTextNode(valorCelda[fila][colum]);
	      celda.appendChild(textoCelda);
	      if(colum>fila){
	      celda.style.backgroundColor = "D2F2F7";
	      }
	      hilera.appendChild(celda);
	      // agrega la hilera al final de la tabla (al final del elemento tblbody)

	   }
	    
	    tblBody.appendChild(hilera);
		
	  }
	  ////document.write("<BR>" +"La suma de la diagonal es :" + sumaDiagonal)
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  //appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");
}