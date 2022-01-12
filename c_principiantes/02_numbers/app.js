// + Sumar
console.log(2+2)

// - Restar
console.log(4-2)

// * Multiplicar
console.log(3*5)

// / Dividir
console.log(10/5)

// < Menor que
console.log(10<20)

// > Mayor que
console.log(40>20)

// <= Menor que
console.log(10<=20)

// >= Mayor que
console.log(40>=20)

// == Igual que
console.log(20==20)

// != No es igual que
console.log(30!=0)

// typeof
let num = 10
let text = '10'
console.log(typeof num)
console.log(typeof text)

// NaN
const notNumber = 2+'asdf'
console.log(typeof notNumber)

// isNaN()
console.log(isNaN(NaN))
console.log(isNaN('whatever'))
console.log(isNaN('12'))
console.log(isNaN(12))

// toString()
let number = 1
console.log(number)
console.log(number.toString())

// toFixed()
console.log(number.toFixed(2))

// Ejercicio 1
// Si la cena cuesta 102$, que parte tiene qie pagar cada uno si somos 6 comensales?

const TOTAL = 102
const COMENSALES = 6
const TOTAL_COMENSALES = TOTAL / COMENSALES
console.log(TOTAL_COMENSALES)

// Ejercicio 2
// Móvil 300$ + Casco 30$ + Funda 10$
// Descuento 10%

const PRECIO_MOVIL = 300
const PRECIO_CASCO = 30
const PRECIO_FUNDA = 10
const TOTAL2 = PRECIO_MOVIL + PRECIO_CASCO + PRECIO_FUNDA
const SUBTOTAL = TOTAL2 * 10 / 100
console.log(SUBTOTAL)