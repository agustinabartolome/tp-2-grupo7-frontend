//Ejercicio 1:  Contar vocales en una cadena

function contarVocales(palabraASeparar){

    //Dividir las vocales por conjuntos

    const descubrirVocalesEspeciales = "áéíóúü";

    const descubrirVocales = "aeiou";

    let contadorVocales = 0;
    let contadorVocalesEspeciales = 0;

    //Transformación de la palabra en minúsculas

    const transformacionMinusculas = palabraASeparar.toLowerCase();

    for (let letras of transformacionMinusculas ) {

        //Al recorrer el bucle, se verifican las vocales especiales

        if (descubrirVocalesEspeciales.includes(letras)) {
            contadorVocalesEspeciales++;
        }

        //luego se verifican las demás vocales, excluyendo las especiales

        else if (descubrirVocales.includes(letras)){
            contadorVocales++;
        }


    }

    //Total de vocales

    const vocalesTotales = contadorVocalesEspeciales +  contadorVocales;

    return vocalesTotales;
}

console.log("Resolución ejercicio 1:");
console.log(contarVocales("Bandoneón")); 
console.log(contarVocales("Pingüino")); 
console.log(contarVocales("Muerte bajo el sol"));
console.log(contarVocales("Marcelino pan y vino"));
console.log();

//Ejercicio 3: Calcular la media de un array de números

function calcularMediaArrayNumerico(arr){

    //Sumar elementos del array

    let sumar = arr.reduce((sum, x) => sum + x, 0)

    //Calcular la media dividiendo la suma entre la longitud del array

    let resultadoMedia = sumar / arr.length;

    //Resultado de la media

    return resultadoMedia;

}

console.log("Resolución de ejercicio 3:");
console.log(calcularMediaArrayNumerico([100, 230, 130, 540, 50]));   
console.log(calcularMediaArrayNumerico([1, 2, 4, 6, 9]));        
console.log(calcularMediaArrayNumerico([7, 54, 81]));            
console.log();

