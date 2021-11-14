'use strict'

const snakeGrid = []
let movement = null
let lastKey = null

buildSnakeGrid()

document.addEventListener('keydown', snakeMovement)


function buildSnakeGrid() {
    for (let i = 0; i < 15; i++) {
        const gridRow = []
        for (let j = 0; j < 15; j++) {
            const backGroundColor= i%2 ? ['Grey', 'Black'][j%2]: ['Black', 'Grey'][j%2]
            const gridSpace = createElem('div', `gridSpace${backGroundColor}`)
            gameContainer.append(gridSpace)
            gridRow.push(gridSpace)
        }
        snakeGrid.push(gridRow)
    }
    makeSnake(snakeGrid)
}

function makeSnake(snakeGrid) {
    const randomRow = Math.floor(Math.random()*11)
    const randomCol = Math.floor(Math.random()*11)
    const snake = snakeGrid[randomRow+2][randomCol+2]
    snake.classList.add('snake')
}

function snakeMovement(event) {
    const possibleMoves = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    if (!possibleMoves.includes(event.key)) return
    else if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && (lastKey === 'ArrowLeft' || lastKey === 'ArrowRight')) return
    else if ((event.key === 'ArrowUp' || event.key === 'ArrowDown') && (lastKey === 'ArrowUp' || lastKey === 'ArrowDown')) return
    lastKey = event.key
    // event.repeat = false;
    const snake = gameContainer.querySelector('.snake')
    // console.log(snakeGrid.indexOf(snake));
    let snakeRow;
    let snakeCol;
    for (let i = 0; i < snakeGrid.length; i++) {
        snakeCol = snakeGrid[i].indexOf(snake)
        if (snakeCol !== -1) {
            snakeRow = i
            break
        }
    }
    const snakePosition = [snakeRow, snakeCol]

    clearInterval(movement)
    // snake.classList.remove('snake')
    if (event.key === 'ArrowLeft') {
        movement = setInterval(moveLeft, 200, snakePosition)
    }
    if (event.key === 'ArrowRight') {
        movement = setInterval(moveRight, 200, snakePosition)
    }
    if (event.key === 'ArrowUp') {
        movement = setInterval(moveUp, 200, snakePosition)
    }
    if (event.key === 'ArrowDown') {
        movement = setInterval(moveDown, 200, snakePosition)
    }
}
function moveLeft(snakePos) {
    snakeGrid[snakePos[0]][snakePos[1]].classList.remove('snake')
    const snake = snakeGrid[snakePos[0]][--snakePos[1]]
    snake.classList.add('snake')
}

function moveRight(snakePos) {
    snakeGrid[snakePos[0]][snakePos[1]].classList.remove('snake')
    const snake = snakeGrid[snakePos[0]][++snakePos[1]]
    snake.classList.add('snake')
}
function moveUp(snakePos) {
    snakeGrid[snakePos[0]][snakePos[1]].classList.remove('snake')
    const snake = snakeGrid[--snakePos[0]][snakePos[1]]
    snake.classList.add('snake')
}
function moveDown(snakePos) {
    snakeGrid[snakePos[0]][snakePos[1]].classList.remove('snake')
    const snake = snakeGrid[++snakePos[0]][snakePos[1]]
    snake.classList.add('snake')
}
function createElem(tagName, cls) {
    const newElem = document.createElement(tagName)
    newElem.classList.add(cls)
    return newElem
}