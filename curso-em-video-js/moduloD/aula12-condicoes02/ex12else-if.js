//ESTRUTURA CONDICIONAL ANINHADA
var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são ${horas} horas.`)

if (horas < 12 ) {
    console.log(`Bom Dia!`)
} else if (horas < 18) {
    console.log(`Boa Tarde!`)
} else if (horas <= 23) {
    console.log(`Boa Noite!`)
} else if (horas > 0 || horas < 6) {
    console.log(`Boa Madrugada`)
}