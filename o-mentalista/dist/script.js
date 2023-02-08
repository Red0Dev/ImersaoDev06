var numeroSecreto = parseInt(Math.random() * 1000 + 1);
var chutes = 0;
console.log(numeroSecreto);

function reiniciar() {
  numeroSecreto = parseInt(Math.random() * 1000 + 1);
  console.log(numeroSecreto);
  chutes = 0;
  document.getElementById("numeral").disabled = false;
  document.getElementById("numeral").value = "";
  var limpeza = document.getElementById("resultado");
  limpeza.innerHTML = "";
}

function advinhar() {
  var limpeza = document.getElementById("resultado");
  limpeza.innerHTML = "";

  var campoResultado = document.getElementById("resultado");

  while (chute != numeroSecreto) {
    var chute = document.getElementById("numeral").value;
    chutes++;

    if (chutes >= 10) {
      campoResultado.innerHTML =
        campoResultado.innerHTML +
        `<h2>Game Over!</h2>
      <h3>Você chegou ao máximo de chutes possivel, o numero que eu estava pensado era ${numeroSecreto}, tente novamente.</h3>`;
      document.getElementById("numeral").disabled = true;
      document.getElementById("numeral").value = "";
      break;
    }

    if (chute == numeroSecreto) {
      campoResultado.innerHTML =
        campoResultado.innerHTML +
        `<h2>Vitória!</h2>
  <h3>Perfeito! O número em minha mente era realmente ${numeroSecreto}.</h3>`;

      document.getElementById("numeral").disabled = true;
      break;
    } else if (chute < numeroSecreto) {
      campoResultado.innerHTML =
        campoResultado.innerHTML +
        `<h2>Errado!</h2>
      <h3>O numero que estou pensando é maior que ${chute}, total de ${chutes}/10 tentativas.</h3>`;
      break;
    } else if (chute > numeroSecreto) {
      campoResultado.innerHTML =
        campoResultado.innerHTML +
        `<h2>Errado!</h2>
      <h3>O numero que estou pensando é menor que ${chute}, total de ${chutes}/10 tentativas.</h3>`;
      break;
    }
  }
}

/*
 while (chute != numeroSecreto) {
    var chute = prompt(
      "Diga um número entre 1 e 1000 e tente acertar o número em meus pensamentos! Para isso te darei 10 tentativas e dica durante elas."
    );
    count++;
    if (chute == numeroSecreto) {
      alert(
        "Acertou!!! Finalmente hein " +
          nome +
          ", após um total de " +
          count +
          " chutes."
      );
      break;
    } else if (chute > numeroSecreto) {
      alert(
        "Errou! Dica: o número é menor que " +
          chute +
          "! Você já deu " +
          count +
          " de 10 chutes totais."
      );
    } else if (chute < numeroSecreto) {
      alert(
        "Errou! Dica: o número é maior que " +
          chute +
          "! Você já deu " +
          count +
          " de 10 chutes totais."
      );
    }
    if (count == 3 || count == 7) {
      var desistir = prompt(
        "Você quer desistir de tentar advinhar o número que estou pensando? Diga-me sim para que eu pare."
      );
    } else if (desistir == "sim") {
      alert("Você desistiu de advinhar, volte quando se sentir capaz." + nome);
      break;
    }

    if (count >= 10) {
      alert(
        "Perdeu!! O número secreto era " +
          numeroSecreto +
          ", tente novamente caso se ache sortudo."
      );
      break;
    }
  }
} else if (jogar == "N") {
}*/