<template>
  <div class="game-container">
    <div class="controls">
      <button @click="startGame" v-if="!isRunning">Start Game</button>
      <p v-if="isRunning">Score: {{ score }}</p>
      <p v-if="gameOver" class="game-over">Game Over! Final Score: {{ score }}</p>
    </div>
    <canvas ref="canvas" width="600" height="600" @mousemove="handleMouseMove"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)
let ctx
const blockSize = 30
const canvasSize = 600
let snake = []
let dx = blockSize
let dy = 0
let food = { x: 0, y: 0 }
const score = ref(0)
const isRunning = ref(false)
const gameOver = ref(false)
let gameLoopId

function getRandomFood() {
  const x = Math.floor(Math.random() * (canvasSize / blockSize)) * blockSize
  const y = Math.floor(Math.random() * (canvasSize / blockSize)) * blockSize
  return { x, y }
}

function drawSnake() {
  snake.forEach(part => {
    ctx.fillStyle = 'green'
    ctx.fillRect(part.x, part.y, blockSize, blockSize)
    ctx.strokeStyle = '#fff'
    ctx.strokeRect(part.x, part.y, blockSize, blockSize)
  })
}

function drawFood() {
  ctx.fillStyle = 'red'
  ctx.fillRect(food.x, food.y, blockSize, blockSize)
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy }
  snake.unshift(head)

  if (head.x === food.x && head.y === food.y) {
    score.value++
    food = getRandomFood()
  } else {
    snake.pop()
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvasSize, canvasSize)
  drawFood()
  moveSnake()
  drawSnake()

  if (checkCollision()) {
    stopGame()
  } else {
    gameLoopId = setTimeout(gameLoop, 150)
  }
}

function checkCollision() {
  const [head, ...body] = snake
  return (
    head.x < 0 || head.x >= canvasSize ||
    head.y < 0 || head.y >= canvasSize ||
    body.some(part => part.x === head.x && part.y === head.y)
  )
}

function resetGame() {
  snake = [{ x: 5 * blockSize, y: 5 * blockSize }]
  dx = blockSize
  dy = 0
  food = getRandomFood()
  score.value = 0
  gameOver.value = false
}

function startGame() {
  resetGame()
  isRunning.value = true
  gameLoop()
}

function stopGame() {
  isRunning.value = false
  gameOver.value = true
  clearTimeout(gameLoopId)
}

function handleMouseMove(e) {
  if (!isRunning.value) return

  const rect = canvas.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  const head = snake[0]
  const deltaX = mouseX - head.x
  const deltaY = mouseY - head.y

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    dx = deltaX > 0 ? blockSize : -blockSize
    dy = 0
  } else {
    dx = 0
    dy = deltaY > 0 ? blockSize : -blockSize
  }
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
})
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* moved content up slightly */
}

canvas {
  background: #111;
  border: 4px solid #444;
  border-radius: 8px;
  margin-top: 10px;
}

.controls {
  text-align: center;
  margin-bottom: 5px;
}

button {
  padding: 10px 20px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #059669;
}

.game-over {
  margin-top: 10px;
  color: #ef4444;
  font-weight: bold;
}
</style>
