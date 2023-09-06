/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    return array[0];

 }
 
 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    return array[array.length - 1]
 }
 
 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    return array.length
 }
 
 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    return array.map((num) =>{
        return num + 1;
     });
 }
 
 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push (elemento);
    return array;
 }
 
 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift (elemento);
    return array;
 }
 
 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    frase = palabras.join(' ');
    return frase;
 }
 
 function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    for (let i = 0;i < array.length;i++){
        if (array[i] === elemento){
            return true;
        }
    }
    return false;
 }
 
 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    let suma = 0;
    for(let i = 0; i < arrayOfNums.length; i++){
        suma = suma + arrayOfNums[i]
    } return suma;
 }
 
 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    let suma = 0;
    for(let i = 0; i < resultadosTest.length; i++){
        suma = suma + resultadosTest[i]
    } return suma / resultadosTest.length;
 }
 
 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    var numeroGrande = arrayOfNums[0];
    for(let i = 0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] > numeroGrande){
            numeroGrande = arrayOfNums[i];
        }
    }
    return numeroGrande;
 }
 
 function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    var producto = 1;
    if(arguments.length === 0){
        return 0;
    } else if(arguments.length === 1){
        return arguments[0];
    } else {
        for(let i = 0; i < arguments.length; i++){
            producto = producto * arguments[i];
        }
        return producto;
    }
 }
 
 function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    var elementos = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18){
            elementos = elementos + 1;
        }
    } return elementos;
 }
 
 function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
    if(numeroDeDia === 1 || numeroDeDia === 7){
         return "Es fin de semana"
        } else {
            return "Es dia laboral"
    };
    

 }
//Primer funcion pensando que tenia que dar la respuesta de cada elemento
 function diaDeLaSemanaBis(numeroDeDia) {
    var valor = "";
    for(let i = 0; i < numeroDeDia.length; i++){
        if(numeroDeDia[i] === 1 || numeroDeDia[i] === 7){
            numeroDeDia[i] = "Es fin de semana, ";
            valor = valor + numeroDeDia[i]
        } else {
            numeroDeDia[i] = "Es dia laboral, ";
            valor = valor + numeroDeDia[i];
        };
    }
    return valor;
 }

 
 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    var numero = String(num).split("").map((num)=>{
        return Number(num)
        })
        if(numero[0] === 9){
            return true;
        } else return false;

 }
 
 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[0]) {
          return false;
        }
      }
      return true;
 }

 
 function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    var mesesPedidos = [];
    var mesesBuscados = ["Enero", "Marzo", "Noviembre"];
    for (var i = 0; i < array.length; i++) {
       if (mesesBuscados.includes(array[i])) {
          mesesPedidos.push(array[i]);
       }
    }
    if (mesesPedidos.length === mesesBuscados.length) {
       return mesesPedidos;
    } else {
       return "No se encontraron los meses pedidos";
    }
 }

 function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    let i = 0;
    arreglo = [];
    while(i <= 10){
        tabla = i * 6;
        i = i + 1;
        arreglo.push(tabla);
    }
    return arreglo;
 }
 
 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    arregloMayor = [];

    for(let i = 0;i<array.length;i++){
        if(array[i] > 100){
            arregloMayor.push(array[i])
        }
    }
    return arregloMayor;
 }
 
 /* ----------------------------------------------------------------------------------
 💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
 -------------------------------------------------------------------------------------*/
 
 function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var arreglo = [];
    let i = 0;
    while(i < 10){
        num = num + 2
        i++
        if(i === num){
          return "Se interrumpió la ejecución";
          break;
        };
        arreglo.push(num);
    }
    return arreglo;
 }
 
 function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var arreglo = [];
    let i = 0;
    while(i < 9){
        num = num + 2
        i++
        if(i === 5 && num == 5){continue};
        arreglo.push(num);
    }
    return arreglo;
    
 }
 
 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
    tablaDelSeis,
    mayorACien,
    breakStatement,
    continueStatement,
 };

 console.log(devolverPrimerElemento([8,2,3,4]))
 console.log();
 console.log(devolverUltimoElemento([8,2,3,10]))
 console.log();
 console.log(obtenerLargoDelArray([1,2,3,4,5,5,6,6,34]))
 console.log();
 console.log(incrementarPorUno([1,2,3]));
 console.log();
 console.log(agregarItemAlFinalDelArray([1,2],3));
 console.log();
 console.log(agregarItemAlComienzoDelArray([2,3],1));
 console.log();
 console.log(dePalabrasAFrase(['hola', 'como', 'estas?']));
 console.log();
 console.log(arrayContiene([1,2,3,4,5],2));
 console.log();
 console.log(agregarNumeros([1,4,-4]));
 console.log();
 console.log(promedioResultadosTest([5,45,3454,1442,12424]));
 console.log();
 console.log(numeroMasGrande([1,2,3,2,1]));
 console.log();
 console.log(multiplicarArgumentos(5,2,2,4));
 console.log();
 console.log(cuentoElementos([-24,2,42,1,18,54,3,5,8]));
 console.log();
 console.log(diaDeLaSemana(6));
 console.log();
 console.log(diaDeLaSemanaBis([2,1,3,4,5,6,7,8,-1]));
 console.log();
 console.log(empiezaConNueve(2323));
 console.log();
 console.log(todosIguales([1,2,1]));
 console.log();
 console.log(mesesDelAño(["Marzo", "Diciembre", "Noviembre"]));
 console.log();
 console.log(tablaDelSeis());
 console.log();
 console.log(mayorACien([101,2,102,3,103,4,104]));
 console.log();
 console.log(breakStatement(-6));
 console.log();
 console.log(continueStatement(50));