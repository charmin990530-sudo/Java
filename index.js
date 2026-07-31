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

// Pedir la base y la altura al usuario
let base = parseFloat(prompt("5"));
let altura = parseFloat(prompt("10"));

// Calcular el área
let area = (base * altura) / 2;

// Mostrar el resultado
alert(`El área del triángulo es: ${area}`);

// Pedir la temperatura en Celsius
let celsius = parseFloat(prompt("20"));

// Convertir a Fahrenheit
let fahrenheit = (celsius * 1.8) + 32;

// Mostrar el resultado
alert(`${celsius}°C equivalen a ${fahrenheit}°F`);

// Pedir la distancia en kilómetros
let km = parseFloat(prompt("10"));

// Convertir a metros
let metros = km * 1000;

// Mostrar el resultado
alert(`${km} km equivalen a ${metros} metros`);










