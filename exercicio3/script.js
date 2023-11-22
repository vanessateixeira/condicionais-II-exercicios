const nome = prompt('Digite seu nome')
const idade = Number (prompt('digite sua idade'))

if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}


// b)
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

console.log('--- Com ternário abaixo ---')

nome === 'José' ? console.log('Oi, Zé!') : console.log(`Oi, ${nome}!`)
idade >= 18 ? console.log('Pode tirar CNH.') : console.log('Ainda não pode tirar a CNH.')