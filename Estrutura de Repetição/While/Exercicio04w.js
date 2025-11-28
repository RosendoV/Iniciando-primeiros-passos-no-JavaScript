// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

// ----------------------feito--------------------------------------------------

let idedaUsuario = parseInt(prompt ("Digite sua idade"));

while (idedaUsuario <18){
    idedaUsuario = parseInt(prompt("Você precisa ter mais de 18 anos"))
} 


// ----------------------Corrigido pela prof---------------------------------------

let informesuaidade = parseInt(prompt("Qual ésua idade?"))

while (informesuaidade < 18){
    informesuaidade= parseInt(prompt("Qual é sua idade?"))
}

if(informesuaidade >=18){
    alert("Você é maior de 18 anos!")
}