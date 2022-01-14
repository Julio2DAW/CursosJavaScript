console.log(Boolean(1))
console.log(Boolean('Whatever'))
console.log(Boolean(3.14))
console.log(Boolean(10>5))
console.log(Boolean(1<100))
console.log(Boolean('1' == 1))
console.log(Boolean('1' === 1))

//False (Falso)
//0 -0
console.log(Boolean(0))
console.log(Boolean(-0))

//""
console.log(Boolean(''))

//NaN
console.log(Boolean(NaN))

//null
console.log(Boolean(null))

//undefined
console.log(Boolean(undefined))

//'1' === 1
console.log(Boolean('1' === 1))

//Ejercicio 1
/**
 * Mostrar una información al usuario dependiendo de si está conectado o no.
 * Mensaje si no está conectado: Debes registrarte para leer este artículo.
 * Mensaje si está conectado: Haz click aquí para ver el contenido.
 */

const USER_LOGGED = true;
const BLOCK_TEXT = document.querySelector('.block_text')

if(USER_LOGGED){
    BLOCK_TEXT.innerHTML = 'Haz click aquí para ver el contenido.'
} else{
    BLOCK_TEXT.innerHTML = 'Debes registrarte para leer este artículo.'
}