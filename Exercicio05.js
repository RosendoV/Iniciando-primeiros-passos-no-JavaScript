// Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let numero01 = parseInt(prompt("Digite o primeiro número:"))
let numero02 = parseInt(prompt("Digite o segundo número:"))
let numero03 = parseInt(prompt("Digite o terceiro número:"))


// Utilizamos o IF toda vez que precisamos conferir algo

// Crescente 1 2 3
if(numero01 < numero02 && numero02 < numero03) {
    // Só entra neste bloco se for verdadeiro
    console.log("O primeiro: " + numero01 + "número digitado é menor que o segundo: " + numero02) ;
    alert("Está em ordem crescente.")
}

// Decrescente 3 2 1 
if(numero03 > numero02 && numero02 > numero01){
    // alert("O terceiro: " + numero03+ "número digitado é maior que o segundo" + numero02)
    alert("Está em ordem decrescente")
}


// Aleatoria 2 3 1 
else{
    alert("Os números estão em ordem aleatória")
}
