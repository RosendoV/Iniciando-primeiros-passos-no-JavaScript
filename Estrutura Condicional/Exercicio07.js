// let valor = parseFloat(prompt("Digite o valor total da compra: "));
// let desconto = 0;
// let mensagemDesconto = "";

// if (valor > 200) {
//     desconto = 0.20;
//     mensagemDesconto = "Desconto aplicado: 20%";
// } else if (valor > 100) {
//     desconto = 0.10;
//     mensagemDesconto = "Desconto aplicado: 10%";
// } else {
//     desconto = 0;
//     mensagemDesconto = "Sem desconto.";
// }

// let valorDesconto = valor * desconto;
// let valorFinal = valor - valorDesconto;

// alert(mensagemDesconto +
//       "\nValor do desconto: R$ " + valorDesconto.toFixed(2) +
//       "\nValor final da compra: R$ " + valorFinal.toFixed(2));


// -----------------------------------Corrigido com a professora --------------------------------------------------

let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra:"));

let desconto;

if(valorTotalCompra <= 100){
    desconto = 0;
}

else if(valorTotalCompra > 100 && valorTotalCompra <= 200){   
    desconto = 0.10;
}

else{
    desconto = 20/100;
}

let valorFinal = valorTotalCompra - ( valorTotalCompra * desconto )

alert(valorFinal);