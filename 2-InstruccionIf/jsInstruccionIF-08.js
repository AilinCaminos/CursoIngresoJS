function mostrar()
{

	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;

	console.log("La edad ingresada es " + edad);

	if(edad>17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}

}