function redirecionarParaOutraPagina() {
  window.location.href = "./tokken.html";
}

function carregamentoConcluido() {
  setTimeout(function () {
    // Gradualmente torna o corpo visível antes do redirecionamento
    document.body.style.opacity = 1;
    redirecionarParaOutraPagina();
  }, 2000); // 3000 milissegundos = 3 segundos
}
