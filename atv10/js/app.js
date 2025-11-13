const botaoAcao = document.getElementById('actionButton');
const divResposta = document.getElementById('resposta');
const nome = document.getElementById('userInput');
botaoAcao.addEventListener('click', function() {
  let mensagem = `Olá, Fazendeiro(a) ${nome.value}!`;
  divResposta.textContent = mensagem;
});

