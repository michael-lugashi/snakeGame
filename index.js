'use strict'

buildSnakeGrid()

function buildSnakeGrid() {
    const snakeGrid = []
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


function createElem(tagName, cls) {
    const newElem = document.createElement(tagName)
    newElem.classList.add(cls)
    return newElem
}