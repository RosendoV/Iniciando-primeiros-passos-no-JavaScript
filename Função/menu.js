//Funcao  01 - exercicio 08w repeticao=====================================================================
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


//Funcao 02 - exercicio 03 repeticao=======================================================================
function exibirTabuadaEscolhida(){
    let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada:"));

 console.log(`=====TABUADA ${tabuadaEscolhida}=====`);

 for(let i = 1; i <= 10; i++){
    console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i))
 }
}
exibirTabuadaEscolhida();


//Funcao 03 - exercicio 02 repeticao========================================================================
function numeroVoltas() {
    for(let i=2; i<=10; i = i + 2){
    console.log("A volta que esta é:" + i)
}
}
numeroVoltas();


//Funcao 04 - exercicio 02w repeticao======================================================================
function soma1ao100() {
    let numero = 1;
let soma = 0;

while (numero <= 100){
    soma = soma + numero;
}

alert("A soma dos números de 1 a 100 é:" + soma);
}
soma1ao100();


//Funcao 05 - exercicio 01w repeticao======================================================================
function nPares0ao20() {
    let volta = 0;
    while (volta <=20){
    console.log(volta);
    volta = volta + 2;
}
}
nPares0ao20();