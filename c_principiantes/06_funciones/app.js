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