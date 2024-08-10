let n1, n2, op, result
const displayBox = document.createElement('div')
displayBox.innerText = ''
reset()

function print() {
    console.log(`n1: ${n1}, op: ${op}, n2: ${n2}`)
}
const printButton = document.createElement('button')
printButton.innerText = 'Print'
printButton.addEventListener('click', print)
document.body.appendChild(printButton)

function reset() {
    n1 = n2 = op = result = ''
    print()
    handleDisplay()
}
const resetButton = document.createElement('button')
resetButton.innerText = 'reset'
resetButton.addEventListener('click', reset)
document.body.appendChild(resetButton)

function handleDisplay() {
    displayBox.innerText = `${n1} ${op} ${n2}`
}

function handleNumber(evt) {
    const n = evt.srcElement.innerText
    if(op === '') {
        n1 += n
    } else {
        n2 += n
    }
    handleDisplay()
    print()
}

const numbers = []
for(let i=0;i<10;i++) {
    const el = document.createElement('button')
    el.innerText = i
    el.addEventListener('click', handleNumber)
    document.body.appendChild(el)
}

function handleOperator(evt) {
    const srcOp = evt.srcElement.innerText
    if(op === '') {
        op = srcOp
    } else {
        handleResult()
        op = srcOp
    }
    print()
    handleDisplay()
}

function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

function prepareForNext() {
    n1 = result
    op = ''
    n2 = ''
    result = ''

}

function operate() {
    num1 = Number(n1)
    num2 = Number(n2)
    switch(op) {
        case '+':
            result = add(num1, num2)
            break
        case '-':
            result = subtract(num1, num2)
            break
        case '*':
            result = multiply(num1, num2)
            break
        case '/':
            result = divide(num1, num2)
            break
        default:
            result = 'invalid'
    }
    result = result.toString()
}

function handleResult() {
    print()
    operate()
    console.log(result)
    prepareForNext()
    handleDisplay()
}

const addButton = document.createElement('button')
addButton.innerText = '+'
addButton.addEventListener('click', handleOperator)
document.body.appendChild(addButton)

const subtractButton = document.createElement('button')
subtractButton.innerText = '-'
subtractButton.addEventListener('click', handleOperator)
document.body.appendChild(subtractButton)

const multiplyButton = document.createElement('button')
multiplyButton.innerText = '*'
multiplyButton.addEventListener('click', handleOperator)
document.body.appendChild(multiplyButton)

const divideButton = document.createElement('button')
divideButton.innerText = '/'
divideButton.addEventListener('click', handleOperator)
document.body.appendChild(divideButton)

const equalButton = document.createElement('button')
equalButton.innerText = '='
equalButton.addEventListener('click', handleResult)
document.body.appendChild(equalButton)

document.body.appendChild(displayBox)

// handle the case of op op
// You should round answers with long decimals so that they don’t overflow the screen