//Ejercicio 1:  Contar vocales en una cadena

function contarVocales(palabraASeparar) {
  //Dividir las vocales por conjuntos

  const descubrirVocalesEspeciales = "áéíóúü";

  const descubrirVocales = "aeiou";

  let contadorVocales = 0;
  let contadorVocalesEspeciales = 0;

  //Transformación de la palabra en minúsculas

  const transformacionMinusculas = palabraASeparar.toLowerCase();

  for (let letras of transformacionMinusculas) {
    //Al recorrer el bucle, se verifican las vocales especiales

    if (descubrirVocalesEspeciales.includes(letras)) {
      contadorVocalesEspeciales++;
    }

    //luego se verifican las demás vocales, excluyendo las especiales
    else if (descubrirVocales.includes(letras)) {
      contadorVocales++;
    }
  }

  //Total de vocales

  const vocalesTotales = contadorVocalesEspeciales + contadorVocales;

  return vocalesTotales;
}

console.log("Resolución ejercicio 1: Contar vocales en una cadena");
console.log(contarVocales("Bandoneón"));
console.log(contarVocales("Pingüino"));
console.log(contarVocales("Muerte bajo el sol"));
console.log(contarVocales("Marcelino pan y vino"));
console.log();

//Ejercicio 2: Muestra el mayor número de un array

function mayorNumeroEnArray(arr) {
  //Ordenar los valores del array

  let ordenArray = arr.sort((a, b) => a - b);

  //Seleccionar ultimo elemento como mayor

  let numeroMayor = ordenArray[arr.length - 1];

  //Mostrar resultado

  return numeroMayor;
}

console.log("Resolución ejercicio 2: Muestra el mayor número de un array");
console.log(mayorNumeroEnArray([13, 45, 7, 22, 18]));
console.log(mayorNumeroEnArray([10, 230, 35, 82]));
console.log(mayorNumeroEnArray([100, 0, 12, 34]));
console.log();

//Ejercicio 3: Calcular la media de un array de números

function calcularMediaArrayNumerico(arr) {
  //Sumar elementos del array

  let sumar = arr.reduce((sum, x) => sum + x, 0);

  //Calcular la media dividiendo la suma entre la longitud del array

  let resultadoMedia = sumar / arr.length;

  //Resultado de la media

  return resultadoMedia;
}

console.log(
  "Resolución de ejercicio 3: Calcular la media de un array de números"
);
console.log(calcularMediaArrayNumerico([100, 230, 130, 540, 50]));
console.log(calcularMediaArrayNumerico([1, 2, 4, 6, 9]));
console.log(calcularMediaArrayNumerico([7, 54, 81]));
console.log();

//Ejercicio 4: Invertir los elementos de un array

function invertirArray(arr) {
  //Modificar el array original

  let arrayInvertido = arr.reverse();

  //Resultado obtenido

  return arrayInvertido;
}

console.log("Resolución ejercicio 4: Invertir los elementos de un array");
console.log(invertirArray([1, 2, 3, 4]));
console.log(invertirArray(["Lunes", "Martes", "Miércoles"]));
console.log(invertirArray([false, false, true]));
console.log();

//Ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci

function fibonacci(n) {
  const fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  const resultado = fib.slice(0, n);
  return resultado;
}

console.log(
  "Resolución ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci"
);
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(3));

console.log();
