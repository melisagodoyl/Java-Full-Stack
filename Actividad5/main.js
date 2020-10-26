


 let respuesta = prompt("¿Querés que te mostremos la tabla del 11 , 10 y 9 ? ingresar S/N");


    if( respuesta == 'S') 
    {
    	tablas();

    }
    else if( respuesta == 'N') 
    {
    	alert("gracias, vuelva prontos");

    }
    else {
    alert("no ingresaste el caracter correcto.");
	}


    function tablas() {

    let number = 11;

    for(let n= 1; n<=3; n++){

	for (let m = 1; m<=10 ; m++) {
	if (m == 1) {
		document.write(`<h3>La tabla del ${number} </h3>`);
	}
	document.write(`<h4> ${number} x ${m} : ${number * m}</h4>`);	
	}
	number--;
	}
}