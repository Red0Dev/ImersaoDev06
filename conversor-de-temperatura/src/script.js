function converter() {
  var limpeza = document.getElementById("conversao");
  limpeza.innerHTML = "";

  var quantidade = document.getElementById("temperatura").value;

  var tempKel = 273.15;
  var tempFar = 32;

  var calculoGlobal = [];
  var nomeGlobal = [];

  var calculoKel = 0;
  calculoKel = quantidade * 1 + tempKel;
  calculoGlobal.push(calculoKel.toFixed(2));
  nomeGlobal.push("Kelvin");

  var calculoFar = 0;
  calculoFar = quantidade * 1.8 + tempFar;
  calculoGlobal.push(calculoFar.toFixed(2));
  nomeGlobal.push("Fahrenheit");

  var campoConversão = document.getElementById("conversao");

  for (var i = 0; i < calculoGlobal.length; i++) {
    if (quantidade != 0) {
      campoConversão.innerHTML =
        campoConversão.innerHTML +
        `<h2>Conversão</h2>
    <h3>Temperatura total ${nomeGlobal[i]}: ${calculoGlobal[i]}</h3></br>`;
    }
  }
}

function limpar() {
  var limpeza = document.getElementById("conversao");
  limpeza.innerHTML = "";
}
