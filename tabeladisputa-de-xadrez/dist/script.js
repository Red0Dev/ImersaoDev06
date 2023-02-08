var jogador1 = {
  nome: "Player 1",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyu453SAXx47XepodAnoSrc7T32i4Fkj1E3Rbpx83NoOvpNKUT9Z9J9XYMA7JY-UFA-eU&usqp=CAU",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var jogador2 = {
  nome: "Player 2",
  avatar:
    "https://png.pngtree.com/png-vector/20190929/ourlarge/pngtree-chess-horse-glyph-icon-vector-png-image_1771038.jpg",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var listaJogadores = [jogador1, jogador2];

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  var resultado = "";

  for (var i = 0; i < listaJogadores.length; i++) {
    resultado += `
      <tr>
          <td>${listaJogadores[i].nome}</td>
          <td><img src="${listaJogadores[i].avatar}" class="avatar"></td>
          <td>${listaJogadores[i].vitoria}</td>
          <td>${listaJogadores[i].empate}</td>
          <td>${listaJogadores[i].derrota}</td>
          <td>${listaJogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i} )">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
           <td><button vonClick="removerJogador(${i})">Remover</button></td>
      </tr>
  `;

    //botão de derrota caso precise:
    // <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
  }
  elementoTabela.innerHTML = resultado;
}

function adicionarVitoria(jogador) {
  listaJogadores[jogador].vitoria++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 3;

  for (var i in listaJogadores) {
    if (i != jogador) {
      listaJogadores[i].derrota++;
    }
  }
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  listaJogadores[jogador].empate++;
  listaJogadores[jogador].pontos++;

  for (var i in listaJogadores) {
    if (i != jogador) {
      listaJogadores[i].empate++;
      listaJogadores[i].pontos++;
    }
  }
  exibirNaTela();
}

//função de adicionar derrota pelo botão de derrota:
// function adicionarDerrota(i) {
//   listaJogadores[i].derrota++;
//   exibirNaTela();
// }

function removerJogador(i) {
  listaJogadores.splice(i, 1);
  exibirNaTela();
}

function reiniciar() {
  for (var i in listaJogadores) {
    listaJogadores[i].pontos = 0;
    listaJogadores[i].vitoria = 0;
    listaJogadores[i].empate = 0;
    listaJogadores[i].derrota = 0;
  }
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  exibirNaTela();
}

function adicionarJogador() {
  var nomeJogador = prompt(
    "Insira o nome do jogador que irá participar da disputa."
  );
  var avatarJogador = prompt(
    "Insira a URL para o avatar do jogador que irá participar da disputa."
  );

  if (
    avatarJogador.endsWith("png") ||
    avatarJogador.endsWith("jpe") ||
    avatarJogador.endsWith("jpeg") ||
    avatarJogador.endsWith("jpg")
  ) {
    var novoJogador = {
      nome: nomeJogador,
      avatar: avatarJogador,
      pontos: 0,
      vitoria: 0,
      empate: 0,
      derrota: 0
    };

    listaJogadores.push(novoJogador);

    reiniciar();

    exibirNaTela();
  } else {
    alert(
      "A URL do avatar está errada, verifique se ela termina em: png, jpe, jpeg ou jpg."
    );
    return;
  }
}

function finalizarDisputa() {
  var vencedor = "";
  var contador = 0;
  var maior = 0;

  var campoResultado = document.getElementById("resultado");

  // Verifica qual é maior pontuação da disputa
  for (var i in listaJogadores) {
    if (listaJogadores[i].pontos > maior) {
      vencedor = listaJogadores[i].nome;
      maior = listaJogadores[i].pontos;
      var posicao = i;
    }
  }

  // Verifica quantos jogadores possuem a maior pontuação
  for (var i in listaJogadores) {
    if (listaJogadores[i].pontos == maior) {
      contador++; // Conta o número de jogadores com a maior pontuação
    }
  }

  // Caso haja mais de um jogador com a maior pontuação
  if (contador > 1) {
    campoResultado.innerHTML = `
    <h2>Resultado</h2>
    <p>Houve empate entre ${contador} jogadores com ${maior} pontos.
    `;
  }

  // Caso haja apenas um jogador com a maior pontuação
  else {
    campoResultado.innerHTML = `
    <h2>Resultado</h2>
    <h3>Vencedor: ${listaJogadores[posicao].nome}</h3>
    <img src=${listaJogadores[posicao].avatar}>
    <p>${listaJogadores[posicao].pontos} pontos, com ${listaJogadores[posicao].vitoria} vitórias, ${listaJogadores[posicao].empate} empates e ${listaJogadores[posicao].derrota} derrotas</p>
    `;
  }
}