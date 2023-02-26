var idade = 67
console.log(`Você tem ${idade} anos`)

if (idade < 16 ) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatória`)    
}


//----------------------------------------
var idade = 22
console.log(`Você tem ${idade} anos`)

if (idade < 18 ) {
    console.log(`Menor de idade`)
} else {
    console.log(`Maior de idade`)
}
//
var idade = 22
console.log(`Você tem ${idade} anos`)

if (idade < 18 ) {
    console.log(`Não vota`)
} else {
    console.log(`Vota`)
}
//----------------------------------------
var idade = 22
console.log(`Você tem ${idade} anos`)

if (idade < 16 ) {
    console.log(`Não vota`)
} else {
    if (idade >= 16 && idade < 18) {  //JA ESTÁ IMPLICITO: se não é menor do que 16, obviamente ela é maior ou igual a 16
        console.log(`Voto opcional`)
    }
}
//
var idade = 22
console.log(`Você tem ${idade} anos`)

if (idade < 16 ) {
    console.log(`Não vota`)
} else {
    if (idade < 18) { //se não é menor do que 16 obviamente ela é maior ou igual a 16
        console.log(`Voto opcional`)
    }
}
//----------------------------------------
var idade = 22
console.log(`Você tem ${idade} anos`)

if (idade < 16 ) {
    console.log(`Não vota`)
} else if (idade < 18) {
    console.log(`Voto opcional`)
} else if (idade >= 18) {
    console.log(`Voto obrigatória`)    
}
//
var idade = 67
console.log(`Você tem ${idade} anos`)

if (idade < 16 ) {
    console.log(`Não vota`)
} else if (idade < 18) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatória`)    
}
//
var idade = 67
console.log(`Você tem ${idade} anos`)

if (idade < 16 ) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatória`)    
}
//----------------------------------------
