
// ------------------------------------------Feito----------------------------------------------------------
// let tabuada = parseInt(pront("Digite qual tabuada iremos calcular"))
// for (let i = 1; i <= 10; i = i * 1){
//     console.log ("O resultado da sua conta é: " + i)
//  }

//  --------------------------------------Corrrigido pela prof-------------------------------------------

// 1 numero dentro da condicao do for - inicializacao - variavel
// 2 numero dentro da condicao do for - condicao - verifica a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma das voltas
// i++ = a i = i+1

 let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada:"));
 console.log(`=====TABUADA ${tabuadaEscolhida}=====`)
 for(let i = 1; i <= 10; i++){
    console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i))
 }
