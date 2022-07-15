/*
let name = 'naro';
console.log(name);

Cannot be reserved keyword #NOTE
Should be meaningful #NOTE
Cannot start with a number #NOTE
Cannot contain a spare or hyphen (-) #NOTE
Are case-sensitive #NOTE

const interestRate = 0.3;
console.log(interestRate)

(const) if you dont want to re assign #NOTE
(let) if you want to re assign #NOTE

let name = 'Naro';
let age = 14;
// let isApproved = false;
// let firstName = undefined
// let selectedColor = null

let person = {
    name: 'naro',
    age: 14
};

// dot notation #NOTE
person.name = 'ahmed';

// bracket notation #NOTE
person['name'] = 'mikasa';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
selectedColors[3] = 'black';
console.log(selectedColors.length);

// performing a tast #NOTE
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Naro', 'Ackerman');

calculating a value #NOTE
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);

*/

// var myVar = 50;
// var myNum = 10
// // adding/subtract/divide/multiply something to a variable by using += -= *= /=
// myVar = myVar + 1;
// myNum += 5;
// myNum -= 10;
// myNum *= 2;
// myNum /= 5;

// console.log(myNum)

// ------- notes


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this. previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
              computation =  prev + current
              break

            case '-':
              computation =  prev - current
              break

            case '*':
              computation =  prev * current
              break

            case '÷':
              computation =  prev / current
              break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return`${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
        
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})