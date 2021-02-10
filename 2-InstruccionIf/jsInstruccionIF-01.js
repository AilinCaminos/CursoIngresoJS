function mostrar() {

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	console.log("La edad ingresada es " + edad);

	if (edad == 15) 
	{
		alert("niña bonita");
	}

}