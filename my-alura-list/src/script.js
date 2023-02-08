var elementoListaFilmes = document.getElementById("listaFilmes");

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nome").value;
  var trailerFilme = document.getElementById("trailer").value;

  //para adicionar o trailer junto a imagem do filme
  var elementoFilme =
    "<a href=" +
    trailerFilme +
    " target='_blank'>" +
    "<img src=" +
    filmeFavorito +
    "> <p>" +
    nomeFilme +
    "</p";
  ("</a>");

  //verifica se as caixinhas de imagem, nome e trailer estão preenchidas, caso não, receberá um alerta e retornará
  if (
    document.getElementById("filme").value == "" ||
    document.getElementById("nome").value == "" ||
    document.getElementById("trailer").value == ""
  ) {
    alert("Por favor, preencha os campos corretamente.");
    return;
  }

  //verifica se a imagem é jpeg, jpe, jpg ou png
  else if (
    filmeFavorito.endsWith("jpeg") ||
    filmeFavorito.endsWith("jpe") ||
    filmeFavorito.endsWith("jpg") ||
    filmeFavorito.endsWith("png")
  ) {
    //se for, ela será impressa a partir da variavel elementoFilme e as caixinhas serão limpas
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilme;
    document.getElementById("filme").value = "";
    document.getElementById("trailer").value = "";
    document.getElementById("nome").value = "";

    //caso não seja um dos 4 tipos de img, a imagem não será impressa, um alerta de erro aparecerá e retornará
  } else {
    alert(
      "O link que foi inserido não é funcional, verifique o endereço de imagem termina com: jpeg, jpe, jpg ou png"
    );
    return;
  }
}
