/*
Ailin Mabel Caminos
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*
	var importe;
	var descuento;
	var resultado;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
	*/

	var importe;
	var porcentaje;
	var descuento;
	var resultado;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	porcentaje = prompt("Ingrese el porcentaje")

	descuento = importe * porcentaje / 100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}
