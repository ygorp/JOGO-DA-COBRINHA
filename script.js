let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //quadradinho com 32px
let snake = [];
snake[0] = {
  x: 8 * box,  //tamanho da cobrinha
  y: 8 * box
}

let direction = "right"; //direção da cobrinha

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

function iniciarjogo(){
  criarBG();
  criarCobrinha();

  let snakex = snake[0].x; //posição da cobrinha quando executar os movimentos.
  let snakey = snake[0].y;

  if(direction == "right") snakex += box; // para direita aumenta para ver que esta indo para direita
  if(direction == "left") snakex -= box; // para esquerda diminui para ver que esta indo para esquerda (plano cartesiano)
  if(direction == "up") snake -= box;
  if(direction == "down") snake += box;

  snake.pop(); //retira o ultimo elemento do nosso array

  let newhead = {
    x:snakex,
    y:snakey
  }

  snake.unshift(newhead);
}

let jogo = setInterval(iniciarjogo, 100) // intervalo de 100 mili segundos para inciar o jogo, e a cada 100 mili segundos continuar o jogo sem travar

