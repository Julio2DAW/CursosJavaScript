//concatenar texto
console.log('Hello ' + 'World')

//template literals
const nombre = 'Julio'
console.log('Hello ' + nombre)
console.log(`Hello ${nombre}`)

//typeof
console.log(typeof nombre)

//.length
console.log(nombre.length)

//.includes()
console.log(nombre.includes('i'))

//.slice(start, end)
console.log(nombre.slice(2, 3))

//.replace('este texto', 'por este texto')
console.log(nombre.replace('J', 'JJ'))

//.trim()
const texto = '             a              bg'
console.log(texto.trim())

//.split(',')
const geolocation = 'Calle San Roque, 12, 4G'
console.log(geolocation.split(','))

//Ejercicio 1
/**
 *  Te han pedido que incluyas en el texto de la próxima newsletter
    unas variables dinámicas que te vienen del usuario
    Nombre: Cristina
    Videojuego: Link awakening
    Descuento: 20%
 */
const NOMBRE2 = 'Felipe'
const GAME = 'Link awakening'
const DESCUENTO = 20
const NEWSLETTER = `Hola ${NOMBRE2} tienes un descuento del ${DESCUENTO}% por comprar ${GAME}`
document.querySelector('.newsletter-text').innerHTML = NEWSLETTER