let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //quadradinho com 32px
let snake = [];
snake[0] = {
  x: 8 * box,  //tamanho da cobrinha
  y: 8 * box
}
function criarBG() {
  context.fillStyle = "lightgreen"; //Estilo do canva, do contexto
  context.fillRect(0, 0, 16 * box, 16 * box);// vai desenhar o retângulo onde vai acontecer o jogo
}

function criarCobrinha(){
  for(i=0; i < snake.length; i++){
    context.fillStyle = "blue"
    context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho da cobrinha e dos quadradinhos
  }
}

criarBG();
criarCobrinha();