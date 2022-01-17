//define
function hola() {

    console.log('Hola Mundo')
}
//ejecuta
hola()

function suma() {

    console.log(2+2)
}
suma()

const MENSAJE = 'Hello World'
function hello() {

    console.log(MENSAJE)
}

function sum(a,b) {

    console.log(a+b)
}

sum(2, 5)
suma(10, 5)

function saludar(nombre = 'World') {

    console.log('Hello' + nombre)
}

saludar()
saludar('Julio')

function saludar2(name = 'Mundo') {

    return `Hello ${name}`
}

saludar2()

console.log('Funciones II')

var saludar3 = function(name = 'world') {
    
    return `Hello ${name}`
}

console.log(saludar3())
console.log(saludar3('Julio'));

const INFORMACION = 'Texto de ejemplo'
var nuevo = (nombre) => `Hello ${nombre}`
var adios = (nombre) => {
    
    return `Adios ${nombre}`
}

console.log(nuevo('Cris'))
console.log(adios('Fernando'))