/*
Ailin Mabel Caminos
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
/*
	var sueldo;
	var aumento;
	var sueldoConAumento;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10/100;
	sueldoConAumento = sueldo + aumento;

	document.getElementById("txtIdResultado").value = sueldoConAumento;
*/

//lo mismo pero se le pide al usuario el porcentaje
var sueldo;
var porcentaje;
var aumento;
var sueldoConAumento;

sueldo = parseInt(document.getElementById("txtIdSueldo").value);

porcentaje = prompt("Ingrese el porcentaje")

aumento = sueldo * porcentaje/100;
sueldoConAumento = sueldo + aumento;

document.getElementById("txtIdResultado").value = sueldoConAumento;

}
