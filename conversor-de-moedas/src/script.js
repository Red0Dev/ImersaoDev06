function converter() {
  var limpeza = document.getElementById("conversao");
  limpeza.innerHTML = "";

  var quantidade = document.getElementById("moeda").value;

  var cotaçãoDolar = 5.08;
  var cotaçãoEuro = 5.56;
  var cotaçãoBitcoin = 117005.72;

  var calculoGlobal = [];
  var nomeGlobal = [];

  var calculoDolar = 0;
  calculoDolar = quantidade * cotaçãoDolar;
  calculoGlobal.push(calculoDolar.toFixed(2));
  nomeGlobal.push("Dolar");

  var calculoEuro = 0;
  calculoEuro = quantidade * cotaçãoEuro;
  calculoGlobal.push(calculoEuro.toFixed(2));
  nomeGlobal.push("Euro");

  var calculoBitcoin = 0;
  calculoBitcoin = quantidade * cotaçãoBitcoin;
  calculoGlobal.push(calculoBitcoin.toFixed(2));
  nomeGlobal.push("Bitcoin");

  var campoConversão = document.getElementById("conversao");

  for (var i = 0; i < calculoGlobal.length; i++) {
    if (quantidade != 0) {
      campoConversão.innerHTML =
        campoConversão.innerHTML +
        `<h2>Conversão</h2>
    <h3>Valor em Reais do ${nomeGlobal[i]}: ${calculoGlobal[i]} R$. </h3></br>`;
    }
  }
}

function limpar() {
  var limpeza = document.getElementById("conversao");
  limpeza.innerHTML = "";
}

/*
//o que deu errado:
// function converter() {
//   var quantidade = document.getElementById("moeda").value;

//   var cotaçãoDolar = 5.08;
//   var cotaçãoEuro = 5.56;
//   var cotaçãoBitcoin = 117005.72;

//   var calculoDolar = quantidade * cotaçãoDolar;
//   calculoDolar = calculoDolar.toFixed(2);

//   var calculoEuro = quantidade * cotaçãoEuro;
//   calculoEuro = calculoEuro.toFixed(2);

//   var calculoBitcoin = quantidade * cotaçãoBitcoin;
//   calculoBitcoin = calculoBitcoin.toFixed(2);

//   // var calculoGlobal = [calculoDolar, calculoEuro, calculoBitcoin];

//   // for (var i = 0; i < calculoGlobal.length; i++)

//   var moedaSelecionada = document.getElementById("selectMoeda");

//   if (moedaSelecionada.selectedIndex == 0) {
//     calculoDolar;
//   } else if (moedaSelecionada.selectedIndex == 1) {
//     calculoEuro;
//   } else {
//     calculoBitcoin;
//   }

//   var campoConversão = document.getElementById("conversão");

//   for (var i in calculoGlobal)
//     if (quantidade != 0) {
//       campoConversão.innerHTML = `
//     <h2>Conversão</h2>
//     <h3>Valor em Reais: ${calculoGlobal[i]} </h3>
//     `;
//     }

  // if (
  //   document.getElementById("moeda1").value == "" ||
  //   document.getElementById("moeda2").value == "" ||
  //   document.getElementById("moeda3").value == ""
  // ) {
  //   alert("Por favor, preencha os campos corretamente.");
  //   return;
  // }*/
