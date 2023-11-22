const numero = Number (prompt('Digite um número'))

if (numero % 2 === 0){
    console.log(`${numero} é divisível por 2.`)

    if (numero % 3 === 0){
        console.log(`${numero} é divisível por 2 e 3.`)
    } else 
        console.log(`${numero} não é divisível por 3.`)

} else 
    console.log(`${numero} não é divisível por 2.`)

console.log('---- if reduzido com operador lógico ----')

const numero2 = Number (prompt('Digite um número'))

if (numero % 2 === 0 && numero % 3 === 0){
    console.log(`${numero} é divisível por 2 e 3.`)
} else
    console.log(`${numero} não é divisível por 2 e 3.`)
    







