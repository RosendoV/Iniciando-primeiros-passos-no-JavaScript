let frutas = ["Goiaba", "Pitaya", "Manga", "Uva,", "Pera"]; 

// lendgth igual ao comprimento, ou seja, a quantidade de itens que a 
console.log("A lista de frutas tem " + frutas.length + " itens.");

console.log("A primeira fruta é a: " + frutas[0]);

// Exibe todas as frutas do array e com o seu formato
console.log(frutas);

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

// ----------------desafio - acesse a 4 fruta no console------------------------

// let frutas = ["Goiaba", "Pitaya", "Manga", "Uva,", "Pera"]; 

// // lendgth igual ao comprimento, ou seja, a quantidade de itens que a 
// console.log("A lista de frutas tem " + frutas.length + " itens.");

// console.log("A quarta fruta é a: " + frutas[3]);

// --------------------------------Desafio Correto----------------------------------

// ------------------------Desafio - listar tarefas, max 10----------------------------------------------
let afazeres = ["Lavar a Louça", "Limpar Fogão", "Arrumar a mesa", "Varrer o chão", "Recolher o Lixo"];

console.log("A lista de afazeres da cozinha tem " + afazeres.length + " itens.");

console.log("O primeiro afazer é a: " + afazeres[0]);

for(let i = 0; i < afazeres.length; i++){
    console.log(afazeres[i])
}
// =================================Correcao=================================
// let tarefasAlexia = [""]

// console.log("A lista de tarefafs tem: " tarefasAlexia.length + "itens.");

// tarefasAlexia.forEach((tarefasAlexia) => {
//     console.log(tarefasAlexia)
// });

// desafio certo---------------------------------------------------------------