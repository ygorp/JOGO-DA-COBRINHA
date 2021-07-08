let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //quadradinho com 32px

function criarBG() {
  context.fillStyle = "lightgreen"; //Estilo do canva, do contexto
  context.fillRect(0, 0, 16 * box, 16 * box);// vai desenhar o retângulo onde vai acontecer o jogo
}

criarBG();