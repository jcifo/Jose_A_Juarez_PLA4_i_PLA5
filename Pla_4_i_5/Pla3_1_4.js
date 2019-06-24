/**Pla 3 hoja de trabajo 1 ejercicio 4
 * Decir la posición de la primera A
 */
function primeraPos(){
	var elementoCadena=0
	var cadena=prompt("introduce una cadena de letras");                 //pedimos que se introduzca una cadena de caracteres
	var totalElemRepet=0;                                                //Damos el valor 0 al total de elementos
	for(elementoCadena=0;elementoCadena<=cadena.length;elementoCadena++){// creamos un bucle que recorra la cadena
	posicion=cadena.charAt(elementoCadena);                              //le damoos a la variable posición el valor de cada elemento de la cadena
		if(posicion=="A"){                                              //le damos la condición de que cuando encuentra la primera A de detenga
		break;
}
    
} 
        var posicion1=elementoCadena+1
        document.write("La primera posicion de la letra " + "A" + " es: " + posicion1)  // escribimos la primera posición y le sumamos uno 
                                                                                              //ya que la cadena empieza a cotar por 0
       
        
	
 }
