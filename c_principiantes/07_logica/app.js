const VUELO = 100
const HOTEL = 50
const TOUR = 30
const TOTAL = VUELO+HOTEL+TOUR
const PRESUPUESTO = 300

if(PRESUPUESTO > TOTAL){

    console.log('Me voy de viaje')
} else if (PRESUPUESTO === TOTAL) {
    
    console.log('Este mes solo como arroz')
} else{

    console.log('Me quedo en casita')
}

const LADRILLOS = 200
const CEMENTO = 140
const ARENA = 50
const FACTURA = LADRILLOS+CEMENTO+ARENA
const POSEO = 3000

const RESULT = FACTURA > POSEO
    ? console.log('No le puedo hacer la caseta al perro')
    : console.log('Si le puedo hacer la caseta al perro')