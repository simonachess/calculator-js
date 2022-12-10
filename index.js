let isActionPressed = false
let isEqualsPressed = false
let resultRow = document.getElementById('result')
resultRow.innerText = '0'

let actionRow = document.getElementById('actions')

function numberPress(number) {
    if (isEqualsPressed) {
        actionRow.innerText = ''
        resultRow.innerText = number
        isEqualsPressed = false
    } else if (isActionPressed) {
        resultRow.innerText = number
        isActionPressed = false
    } else if (resultRow.innerText === '0') {
        resultRow.innerText = number
    } else {
        resultRow.innerText = resultRow.innerText + number
    }
}

function erase() {
    resultRow.innerText = '0'
    actionRow.innerText = ''
}
function eraseLastNumber() {
    if (resultRow.innerText.length === 1) {
        resultRow.innerText = '0'
    } else {
        resultRow.innerText = resultRow.innerText.substring(0, resultRow.innerText.length - 1)
    }
}

function actionPress(action) {
    isActionPressed = true
    isEqualsPressed = false

    let numberAndAction = actionRow.innerText.split(' ')

    if (numberAndAction.length === 2) {
        if (numberAndAction[1] === '+') {
            resultRow.innerText = Number(numberAndAction[0]) + Number(resultRow.innerText)
        } else if (numberAndAction[1] === '-') {
            resultRow.innerText = Number(numberAndAction[0]) - Number(resultRow.innerText)
        } else if (numberAndAction[1] === 'x') {
            resultRow.innerText = Number(numberAndAction[0]) * Number(resultRow.innerText)
        } else if (numberAndAction[1] === '/') {
            resultRow.innerText = Number(numberAndAction[0]) / Number(resultRow.innerText)
        }

    }

    actionRow.innerText = resultRow.innerText + ' ' + action
}

function equals() {
    let numberAndAction = actionRow.innerText.split(' ')

    actionRow.innerText = actionRow.innerText + ' ' + resultRow.innerText + ' ='

    if (numberAndAction[1] === '+') {
        resultRow.innerText = Number(numberAndAction[0]) + Number(resultRow.innerText)
    } else if (numberAndAction[1] === '-') {
        resultRow.innerText = Number(numberAndAction[0]) - Number(resultRow.innerText)
    } else if (numberAndAction[1] === 'x') {
        resultRow.innerText = Number(numberAndAction[0]) * Number(resultRow.innerText)
    } else if (numberAndAction[1] === '/') {
        if ( Number(numberAndAction[0]) / Number(resultRow.innerText) === Infinity) {
            alert('Action is not possible')
            resultRow.innerText = '0'
            actionRow.innerText = ''
            return
        }
        resultRow.innerText = Math.round(Number(numberAndAction[0]) / Number(resultRow.innerText) * 100000) / 100000
    }

    isEqualsPressed = true
}

function dotPress() {
    if (resultRow.innerText.indexOf('.') === -1) {
        resultRow.innerText = resultRow.innerText + '.'
    }
}