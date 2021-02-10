function mostrar()
{

	var notaRandom;

	notaRandom = Math.floor(Math.random() * 11);

	console.log(notaRandom);

	if (notaRandom < 4) 
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if((notaRandom == 9) || (notaRandom == 10))
		{
			alert("EXCELENTE");
		}else
		{
			alert("APROBÓ");
		}
	}

}