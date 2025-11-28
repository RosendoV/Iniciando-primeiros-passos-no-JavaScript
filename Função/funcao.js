function exibirTabuadaEscolhida(){
    let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada:"));

 console.log(`=====TABUADA ${tabuadaEscolhida}=====`);

 for(let i = 1; i <= 10; i++){
    console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i))
 }
}


// chama a minha funcao
exibirTabuadaEscolhida();

//crie uma funcao para que solicite o nome da pessoa e exiba-o
// function exibirNomeSolicitado(){
//     let nomeSolicitado = prompt("Digite seu nome:");

//     return nomeSolicitado;

// }

// let nome = exibirNomeSolicitado();

// alert(nome);
// ============================================================================



function somarDoisNumeros(n1, n2) {
    console.log(n1+n2);
}

somarDoisNumeros(10,20);

//crie uma funcao para o exercicio 08 de estrutura condicional
//Passe via parametro e o peso e a altura

function exibirPesoAlturaSolicitado(peso, altura) {

let IMC = peso / ( altura * altura )

if (IMC < 18.5){
    alert("Abaixo do peso")
}

else if(IMC >= 18.5 && IMC <= 24.9){
    alert ("Peso Normal")
}

else if (IMC >= 25 && IMC <= 29.9){
    alert ("Sobrepeso")
}

else if (IMC >=30.0 && IMC <=34.9){
    alert ("Obesidade grau 1")
}

else if (IMC >=35.0 && IMC <=39.9){
    alert ("Obesidade grau 2")
}

else {
    alert ("Obesidade grau 3")}
}

exibirPesoAlturaSolicitado(54, 1.64)