var colores = ['amarillo', 'azul'];
console.log(colores);

// PUSH y UNSHIFT
colores.push('rojo'); //Agregar al final de la lista
console.log(colores);
colores.unshift('verde'); //Agregar al principio de la lista
console.log(colores);

// POP y SHIFT
colores.pop(); //Eliminar ultimo elemento
console.log(colores);
colores.shift(); //Eliminar primer elemento
console.log(colores);

//Includes

var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

//Every

var numero = [10,6,8,9];

var cumplenCondicion = numero.every((num)=>{
    return num > 5;
});
console.log(cumplenCondicion);

//SPLIT

/* Separamos el string y se convierte en un array */
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

/* Sacamos la ultima letra erronea con POP y agregamos la correcta con PUSH*/
palabraSeparada.pop();
palabraSeparada.push('y');

console.log(palabraSeparada);

//JOIN
/* Ahora vamos a juntar los elementos con JOIN, para que nuevamente sea un string*/
palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//forEach

var numeros = [1,2,3,4];
//Ver todos los numeros
numeros.forEach((num)=> console.log(num));
//Ver numero igulaes a *3*
numeros.forEach(num => {
    if(num === 3) {
        console.log(num)
    }
});

//map

//Sumar uno a cada elemento
var masUno = numeros.map((num) => {
    return num + 1
});
console.log(masUno);