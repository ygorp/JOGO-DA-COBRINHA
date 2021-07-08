let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32 //quadradinho com 32px
let snake = []
snake[0] = {
  x: 8 * box, //tamanho da cobrinha
  y: 8 * box
}

let direction = "right" //direção da cobrinha
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box, //comidinha, para fazer aparecer em vários lugares o random retorna numeros aleatórios. colocou * box para delimitar onde ela vai aparecer
  y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
  context.fillStyle = "lightgreen" //Estilo do canva, do contexto
  context.fillRect(0, 0, 16 * box, 16 * box) // vai desenhar o retângulo onde vai acontecer o jogo
}

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "blue"
    context.fillRect(snake[i].x, snake[i].y, box, box) //tamanho da cobrinha e dos quadradinhos
  }
}

function drawFood() {
  context.fillStyle = "red"
  context.fillRect(food.x, food.y, box, box)
}

document.addEventListener("keydown", update)

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left"
  if (event.keyCode == 38 && direction != "down") direction = "up" //direcionando através dos botões do teclado, só vai movimentar se for para posição correta.
  if (event.keyCode == 39 && direction != "left") direction = "right" //a função update vai chamar a event, toda vez que teclarmos uma direção.
  if (event.keyCode == 40 && direction != "up") direction = "down"
}

function iniciarjogo() {
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0 //Quando a cobrinha atingir o tamanho de 15 que é o tamanho do canva, ela vai receber o valor de 0  que é da esquerda para direita, fazendo ela aparcer do outro lado.
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box

  for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo);
      alert('Game Over :( ');
    }
  }

  criarBG()
  criarCobrinha()
  drawFood()

  let snakeX = snake[0].x //posição da cobrinha quando executar os movimentos.
  let snakeY = snake[0].y

  if (direction == "right") snakeX += box // para direita aumenta para ver que esta indo para direita
  if (direction == "left") snakeX -= box // para esquerda diminui para ver que esta indo para esquerda (plano cartesiano)
  if (direction == "up") snakeY -= box
  if (direction == "down") snakeY += box

  if (snakeX != food.x || snakeY != food.y) {
    snake.pop() //retira o ultimo elemento do nosso array
  } 
  else {food.x = Math.floor(Math.random() * 15 + 1) * box
       food.y = Math.floor(Math.random() * 15 + 1) * box
  }

  let newhead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newhead)
}

let jogo = setInterval(iniciarjogo, 100) // intervalo de 100 mili segundos para inciar o jogo, e a cada 100 mili segundos continuar o jogo sem travar
