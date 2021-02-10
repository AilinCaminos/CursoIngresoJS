function mostrar()
{

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	console.log("La edad ingresada es " + edad);

	if(edad<13)
	{
		alert("niño");
	}
	else 
	{
		if(edad<18)
		{
			alert("adolescente");
		}
		else
		{
			alert("mayor");
		}
	}

}