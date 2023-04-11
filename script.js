const imagens = [
	"imagem1.jpg",
	"imagem2.jpg",
	"imagem3.jpg"
  ];
  let posicaoAtual = 0;
  const botao = document.getElementById("botao");
  const imagem = document.getElementById("imagem");

  botao.addEventListener("click", function() {
  posicaoAtual = (posicaoAtual + 1) % imagens.length;
  imagem.src = imagens[posicaoAtual];
});
