/**
 * 
 */
function listaAbc(){
	  var cadena=""
      var numDeRepeticiones=0;
	  var valorAsci=0;
	  var alfabeto="";
	  var contador=0;
	  var elementoCadena=""
		  
      for(rellCad=0;rellCad<=9;rellCad++){
    	rellenarCadena=Math.floor(Math.random() * ((90+1)-65)+65);
    	valorAsci=rellenarCadena;
    	valorAlfa=String.fromCharCode(valorAsci); 
    	cadena=cadena + valorAlfa  
      }
	  document.write(cadena + "<BR>");

	  for(rellenarAlfa=65;rellenarAlfa<=90;rellenarAlfa++){

		  valorAlfabeto=String.fromCharCode(rellenarAlfa);
		  alfabeto=alfabeto+valorAlfabeto;  
		  
	  }
	 // document.write(alfabeto + "<BR>");	
	  
//////////////////////////////////////////////////////////
	  
	  // Obtener la referencia del elemento body
	  var body = document.getElementsByTagName("body")[0];	  
	  // Crea un elemento <table> y un elemento <tbody>
	  var tabla   = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	 
	  // Crea las celdas
	  for (var fila = 0; fila < 26; fila++) {
		contador=0
		valorAlfabeto=alfabeto.charAt(fila);
	    var hilera = document.createElement("tr");
	    // Crea las hileras de la tabla
	 for (elementoCadena=0;elementoCadena<=9;elementoCadena++){
		valorElemento=cadena.charAt(elementoCadena);
		//document.write(alfabeto + "<BR>")
		if (valorAlfabeto===valorElemento){
			//document.write(alfabeto + "<BR>")
			//document.write(valorElemento + "<BR>")
		contador++;
		}
		
		
		
		
	  }
	   
	 
	   // for (var j = 0; j < 2; j++) {
	      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
	      // texto sea el contenido de <td>, ubica el elemento <td> al final
	      // de la hilera de la tabla
	      var celda = document.createElement("td");
	      var textoCelda = document.createTextNode(valorAlfabeto);
	      celda.appendChild(textoCelda);
	      hilera.appendChild(celda);
	      var celda = document.createElement("td");
	      var textoCelda = document.createTextNode(contador);
	      celda.appendChild(textoCelda);
	      hilera.appendChild(celda);  
	   // }
	 
	    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	
	    tblBody.appendChild(hilera);
	  }
	 
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");
	
}




