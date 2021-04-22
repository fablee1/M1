let stats = 0

const generateMainCells = function() {
    let playField = document.getElementById('playField')
    for(let x=0; x<76; x++) {
        let cell = document.createElement('div')
        cell.innerText = x+1
        cell.classList.add('cell')
        playField.appendChild(cell)
    }
}
let numberHistory = []

const resetGame = function() {
    numberHistory = []
    let previousWins = document.querySelectorAll('.cellDidWin')
    for(win of previousWins) {
        win.classList.remove('cellDidWin')
    }
    let lastWin = document.getElementsByClassName('winCell')[0]
    lastWin.classList.remove('winCell')
    document.getElementById('play').style.display = ''

    delCards()
    matches(true)

    document.getElementById('info').style.display = 'none'
    document.getElementById('newCard').style.display = ''
    document.getElementById('delCards').style.display = ''
}


const playGame = function() {
    let cardCount = document.getElementsByClassName('playerCard').length
    if(cardCount < 1) {
        writeInfo('Please create atleast 1 card to start game.')
        return
    }

    let previousWin = document.getElementsByClassName('winCell')[0]
    if(previousWin) {
        previousWin.classList.remove('winCell')
        previousWin.classList.add('cellDidWin')
    }
    let randomNumber
    let numberInHistory = false
    while(!numberInHistory) {
        randomNumber = Math.floor(Math.random() * 76)
        if(!numberHistory.includes(randomNumber)) {
            numberInHistory = true
        }
    }
    numberHistory.push(randomNumber)
    let cells = document.querySelectorAll('.cell')
    cells[randomNumber].classList.add('winCell')
    previousWinCell = cells[randomNumber]
    if(numberHistory.length === 76) {
        document.getElementById('play').style.display = 'none'
    }


    let allPlayerCells = document.querySelectorAll('.playerCell')
    for(cell of allPlayerCells) {
        if(cell.innerText == randomNumber) {
            cell.style.backgroundColor = 'rgb(5, 204, 5)';
            cell.classList.add('winningCell')
            matches()
        }
    }

    checkWin()


    document.getElementById('info').style.display = 'none'
    document.getElementById('newCard').style.display = 'none'
    document.getElementById('delCards').style.display = 'none'
}

const matches = function(reset) {
    let matches = document.getElementById('stats')
    if(reset) {
        stats = 0
    } else {
        stats++
    }
    matches.innerText = `Matches: ${stats}`
}

const writeInfo = function(info) {
    let infoPlace = document.getElementById('info')
    infoPlace.innerText = info
    infoPlace.style.display = ''
}

const newCard = function() {
    let cardCount = document.getElementsByClassName('playerCard').length
    if(cardCount === 4) {
        writeInfo('Sorry card limit is 4.')
        return
    }

    let newCard = document.createElement('div')
    newCard.classList.add('playerCard')
    let randNumbers = []
    for(let x=0; x<24; x++) {
        let cell = document.createElement('div')
        let randomNumber
        let numberWas = false
        while(!numberWas) {
            randomNumber = Math.floor(Math.random() * 76)
            if(!randNumbers.includes(randomNumber)) {
                numberWas = true
            }
        }
        randNumbers.push(randomNumber)
        cell.classList.add('playerCell')
        cell.innerText = randomNumber
        newCard.appendChild(cell)
    }
    document.getElementById('cards').appendChild(newCard)
}

const checkWin = function() {
    let cards = document.querySelectorAll('.playerCard')
    for(let x=0; x<cards.length; x++) {
        let winCell = cards[x].children
        let count = 0
        for(cell of winCell) {
            if((Array.from(cell.classList)).includes('winningCell')) {
                count++
            }
        }
        if(count == 24) {
            alert('YOU WON. Resetting.')
            resetGame()
        }
    }
}

const delCards = function() {
    let cards = document.querySelectorAll('.playerCard')
    for(card of cards) {
        card.remove()
    }
    document.getElementById('info').style.display = 'none'
}

window.onload = function() {
    generateMainCells()
}