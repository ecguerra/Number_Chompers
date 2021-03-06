import Game from './src/game.js'

const canvas = document.getElementById("gameWindow")
const ctx = canvas.getContext('2d')

const GAME_WIDTH = 700
const GAME_HEIGHT = 500

ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT)

const game = new Game(GAME_WIDTH, GAME_HEIGHT)
let lastTime = 0

// game.start()

const gameLoop = (timeStamp) => {
    let deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT)
    
    game.update(deltaTime)
    game.draw(ctx)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)