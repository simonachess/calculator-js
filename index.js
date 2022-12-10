let isActionPressed = false
let isEqualsPressed = false
let resultRow = document.getElementById('result')
resultRow.innerHTML = '0'

let actionRow = document.getElementById('actions')

function numberPress(number) {
    if (isEqualsPressed) {
        actionRow.innerHTML = ''
        resultRow.innerHTML = number
        isEqualsPressed = false
    } else if (isActionPressed) {
        resultRow.innerHTML = number
        isActionPressed = false
    } else if (resultRow.innerHTML === '0') {
        resultRow.innerHTML = number
    } else {
        resultRow.innerHTML = resultRow.innerHTML + number
    }
}

function erase() {
    resultRow.innerHTML = '0'
    actionRow.innerHTML = ''
}
function eraseLastNumber() {
    if (resultRow.innerHTML.length === 1) {
        resultRow.innerHTML = '0'
    } else {
        resultRow.innerHTML = resultRow.innerHTML.substring(0, resultRow.innerHTML.length - 1)
    }
}

function actionPress(action) {
    isActionPressed = true
    isEqualsPressed = false

    let numberAndAction = actionRow.innerHTML.split(' ')

    if (numberAndAction.length === 2) {
        if (numberAndAction[1] === '+') {
            resultRow.innerHTML = Number(numberAndAction[0]) + Number(resultRow.innerHTML)
        } else if (numberAndAction[1] === '-') {
            resultRow.innerHTML = Number(numberAndAction[0]) - Number(resultRow.innerHTML)
        } else if (numberAndAction[1] === 'x') {
            resultRow.innerHTML = Number(numberAndAction[0]) * Number(resultRow.innerHTML)
        } else if (numberAndAction[1] === '/') {
            resultRow.innerHTML = Number(numberAndAction[0]) / Number(resultRow.innerHTML)
        }

    }

    actionRow.innerHTML = resultRow.innerHTML + ' ' + action
}

function equals() {
    let numberAndAction = actionRow.innerHTML.split(' ')

    actionRow.innerHTML = actionRow.innerHTML + ' ' + resultRow.innerHTML + ' ='

    if (numberAndAction[1] === '+') {
        resultRow.innerHTML = Number(numberAndAction[0]) + Number(resultRow.innerHTML)
    } else if (numberAndAction[1] === '-') {
        resultRow.innerHTML = Number(numberAndAction[0]) - Number(resultRow.innerHTML)
    } else if (numberAndAction[1] === 'x') {
        resultRow.innerHTML = Number(numberAndAction[0]) * Number(resultRow.innerHTML)
    } else if (numberAndAction[1] === '/') {
        if ( Number(numberAndAction[0]) / Number(resultRow.innerHTML) === Infinity) {
            alert('Action is not possible')
            resultRow.innerHTML = '0'
            actionRow.innerHTML = ''
            return
        }
        resultRow.innerHTML = Number(numberAndAction[0]) / Number(resultRow.innerHTML)
    }

    isEqualsPressed = true
}

function dotPress() {
    if (resultRow.innerHTML.indexOf('.') === -1) {
        resultRow.innerHTML = resultRow.innerHTML + '.'
    }
}