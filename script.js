const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (numbers) => {
    calculatorScreen.value = numbers
}

let prevNumber = '';
let calculationOperator ='';
let currentNumber = '0';
const numbers = document.querySelectorAll(".number");
const inputNumber = (numbers) => {
    if(currentNumber === '0'){
        currentNumber = numbers
    }else{
        currentNumber += numbers
    }
}
numbers.forEach((numbers) => {
    numbers.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


 const inputOperator = (operator) => {
        if(calculationOperator === ''){
            prevNumber = currentNumber
        }
        calculationOperator = operator
        currentNumber = '0'
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return           
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})