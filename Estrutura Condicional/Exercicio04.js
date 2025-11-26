let numero01 = parseFloat(prompt("Digite sua primeira nota"))

let numero02 = parseFloat(prompt("Digite sua segunda nota"))

let numero03 = parseFloat(prompt("Digite sua terceira nota"))

let numero04 = parseFloat(prompt("Digite sua quarta nota"))


let media = (numero01 + numero02 + numero03 + numero04) /4

  if ( media >= 7) {
    alert ("Aprovado")
  } else if (media <= 7 && media <7 && media >= 5 ) {
    alert ("Recuperação")

  }if ( media <5) {
     alert ("Reprovado")
  }


