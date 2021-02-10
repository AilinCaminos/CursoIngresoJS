/* 
Ailin Mabel Caminos
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var resultado;

function Sumar () 
{

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno)
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert(resultado);

	
}
function Promedio () 
{

	precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno)
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    resultado = (precioUno + precioDos + precioTres) / 3;

    alert(resultado);

}
function PrecioFinal () 
{

    var suma;
    var calculoIVA;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno)
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    calculoIVA = (suma)* 21/100;

    resultado = suma + calculoIVA;

    alert(resultado);

}