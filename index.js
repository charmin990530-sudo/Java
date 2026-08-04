console.log("HELLO WORLD") // string
console.log(true); // boolean
console.log(false); // boolean
console.log(40); // number
console.log(30.8); // number 


// operaciones matematicas:
console.log(12 * 5);
console.log(Infinity);
console.log((10 + 3) * 2);

// variables
let LastName = "Perez";
// let last_name = "snake_case"
let student = "Maria";
let suma = 98 + 12
let age = 28;


console.log("hola, " + student);


const student2 = student;
console.log(student2) // variable es como espacio de memoria

console.log(`Hola, ${student} ${LastName} y tienes: ${age} años`)

let nombre = `hello world`;
let numero = 32;
let registro = true;
let creado = false;

console.log(typeof nombre);

let sumas = 33 + 12 - 5;
console.log(sumas);

console.log(3 == '3');

console.log((5>8) && (12 >= 14));

console.log( ! ((4 > 9) ))

let edadHumano = Number(prompt('Cuantos años tienes?'));
console.log( edadHumano * 7);

let edadPerro = edadHumano * 7;
console.log(edadPerro);

//pedir datos de un triangulo y decir el area;
// pedir una temperatura en c y convertirla en F;
// pedir una distancia en KM y convertirla a M;

// Pedir datos de un triángulo y decir el área

let base = Number(prompt("Ingrese la base del triángulo:"));
let altura = Number(prompt("Ingrese la altura del triángulo:"));

let area = (base * altura) / 2;

console.log(area);

// Pedir una temperatura en C y convertirla a F

let celsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(fahrenheit);

// Pedir una distancia en KM y convertirla a M

let kilometros = Number(prompt("Ingrese la distancia en kilómetros:"));

let metros = kilometros * 1000;

console.log(metros);

// pedir el precio de un producto y aplicarle un 20% de descuento
//pedir 3notas al usuario, y decirle la nota final (promedio)


// Pedir el precio de un producto y aplicar un 20% de descuento

let precio = Number(prompt("Ingrese el precio:"));

let descuento = precio * 0.20;
let precioFinal = precio - descuento;

console.log(precioFinal);

// Pedir 3 notas al usuario y decir la nota final (promedio)

let nota1 = Number(prompt("Ingrese la primera nota:"));
let nota2 = Number(prompt("Ingrese la segunda nota:"));
let nota3 = Number(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

console.log(promedio);

let numeroDias = Number (prompt("ingrese el numero de dias:"));
let horas = ( numeroDias * 24);
let minutos = (numeroDias * 1440);

console.log(`dias en horas igual a: ${numeroDias * horas}`);
console.log( `dias en minutos igual a : ${numeroDias * minutos}`);

// Pedir la distancia recorrida y el tiempo para calcular la velocidad

let distancia = Number(prompt("Ingrese la distancia recorrida en kilómetros:"));
let tiempo = Number(prompt("Ingrese el tiempo en horas:"));

let velocidad = distancia / tiempo;

console.log(velocidad);

// if
let nota = 4;

if(nota < 3) {
    console.log(`el estudiante perdio`);

} else if (nota >= 3 && nota < 4){
    console.log(`tiene que nivelar`);

} else {
    console.log(`paso`);
    
}

// tactica de peso

// masculino
//bajo = menor a 160 libras
//medio = entre 160 y 180 libras
// pesado = mayor a 180 libras

// femenino

//bajo = menor a 115 libras
// medio = entre 115 y 135 libras
// pesado = mayor a 135 libras

let genero = prompt("¿Cuál es tu género? (masculino/femenino)");
let peso = Number(prompt("¿Cuál es tu peso en kilos?"));
let pesoEnLibras = peso * 2.2046;

console.log(`Tu peso es: ${peso} kg, lo que equivale a ${pesoEnLibras} libras`);

if (genero === "masculino") {
  if (pesoEnLibras < 160) {
    console.log("Puedes competir en la categoría: Peso bajo");
  } else if (pesoEnLibras >= 160 && pesoEnLibras <= 180) {
    console.log("Puedes competir en la categoría: Peso medio");
  } else {
    console.log("Puedes competir en la categoría: Peso pesado");
  }
} else if (genero === "femenino") {
  if (pesoEnLibras < 115) {
    console.log("Puedes competir en la categoría: Peso bajo");
  } else if (pesoEnLibras >= 115 && pesoEnLibras <= 135) {
    console.log("Puedes competir en la categoría: Peso medio");
  } else {
    console.log("Puedes competir en la categoría: Peso pesado");
  }
} else {
  console.log("Género no reconocido, escribe 'masculino' o 'femenino'");
}

let bajo = 160;
let medio = 180;

if(genero == 'f'){
    bajo = 115;
    medio = 135;

}

if(libras <= bajo){
    console.log('categoria gallo')
} else if(libras <= medio){
    console .log('categoria ligero')
} else {
    console.log('categoria pesado')
}
















