// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var x = 0; x < (array.length); x++) {
    if (typeof array[x] == 'number') {
      array[x]++
    }
    else {
      return "El array debe ser una matriz de enteros"
    }
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for (var x = 0; x < palabras.length; x++) {
    if (typeof palabras[x] === 'string') {
      return palabras.join(" ")
    }
    else {
      return "El array debe ser una matriz de strings"
    }
  }
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var index = array.indexOf(elemento)
  if (index !== -1) {
    return true
  }
  else {
    return false
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0

  numeros.forEach(numero => {
    if (typeof numero === 'number'){
      suma += numero
    }
    else {
      return "El array debe ser una matriz de enteros"
    }
  })

  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma = 0

  resultadosTest.forEach(numero => {
    if (typeof numero === 'number') {
      suma += numero
    }
    else {
      return "El array debe ser una matriz de enteros"
    }
  })
  
  promedio = suma / resultadosTest.length

  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = 0

  for (var x = 0; x < numeros.length; x++){
    if (typeof numeros[x] === 'number') {
      if (numeros[x] > mayor) {
        mayor = numeros[x]
      }
    }
    else {
      return "El array debe ser una matriz de enteros"
    }
  }

  return mayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0
  }
  else if (arguments.length === 1) {
    return arguments[0]
  }
  else {
    producto = 1
    for (var x = 0; x < arguments.length; x++) {
      producto = arguments[x] * producto
    }
    return producto
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cantidad = 0
  for (var x = 0; x < arreglo.length; x++) {
    if (arreglo[x] > 18) {
      cantidad += 1 
    }
  }
  return cantidad
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana"
  }
  else {
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str = n.toString()
  if (str[0] === '9') {
    return true
  }
  else {
    return false
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var x = 0; x < arreglo.length; x++) {
    if (arreglo[x] === arreglo[x+1]) {
      return true
    }
    else {
      return false
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = []
  for (var x = 0; x < array.length; x++) {
    if (array[x] === "Enero" || array[x] === 'Marzo' || array[x] === 'Noviembre') {
      meses.push(array[x])
    }
  }
  if (meses.length >= 3) {
    return meses
  }
  else {
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevo = []
  for (var x = 0; x < array.length; x++) {
    if (array[x] > 100) {
      nuevo.push(array[x])
    }
  }
  return nuevo
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  veces = 0
  array = []

  do {
    numero += 2
    veces ++
    array.push(numero)
    if (veces === numero) {
     break
    }
  } while (veces < 10)

  if (veces === 10) {
    return array
  }
  else {
    return "Se interrumpió la ejecución"
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  veces = 0
  array = []

  do {
    if (veces === 5) {
      veces ++
      continue
    }
    else {
      numero += 2
      veces ++
      array.push(numero)
    }
  } while (veces < 10)

  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
