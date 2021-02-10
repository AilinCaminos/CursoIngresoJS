function mostrar()
{

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	console.log("La edad ingresada es " + edad);

/*
	if(edad>12) 
	{
		if (edad<18) 
		{
			
			alert("es adolescente");

		}
	}
*/

	if (edad<18 && edad>12)
	{
		alert("es adolescente");	
	}


}