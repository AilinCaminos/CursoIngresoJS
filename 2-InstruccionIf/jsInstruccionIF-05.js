function mostrar()
{

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	console.log("La edad ingresada es " + edad);
/*
	if (edad>17) 
	{
		alert("No es adolescente");
	}
	if (edad<13) 
	{
		alert("No es adolescente");
	}
*/
/*
	if (!(edad<18 && edad>12))
	{
		alert("No es adolescente");
	}
*/

	if (edad>17 || edad<13) {
		
		alert("No es adolescente");
		
	}

}