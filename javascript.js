//calculator operands

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//operate function

const operate = (operator, num1, num2) => {

    switch (true) {
        case (operator === '+'):
            return add(num1, num2);
            break;
        case (operator === '-'):
            return subtract(num1, num2);
            break;

        case (operator === '*'):
            return multiply(num1, num2);
            break;
        case (operator === '/'):
            return divide(num1, num2);
            break;
    }

};

// User inputs 

var numberArrayOne = [];
var numberArrayTwo = [];
var numberArrayThree = [];

var operandOne = false;
var operandTwo = false;
var operandThree = false;

var currentOperator = '';

// function that chooses correct array to add the number to.
const displayFunction = (num) => {
    switch (true) {
        case (!operandOne):
            numberArrayOne.push(num);
            console.log(numberArrayOne);
            break;
        case (!operandTwo):
            numberArrayTwo.push(num);
            console.log(numberArrayTwo);
            break;
        case (!operandThree):
            numberArrayThree.push(num);
            break;
        default:
    }
};

// setting the status of the operand 

const operandDivide = document.querySelector('.btnDivide');
operandDivide.addEventListener('click', () => {
    currentOperator = '/';
    switch (false) {
        case (operandOne):
            operandOne = true;
            break;
        case (operandTwo):
            operandTwo = true;
            break;
        case (operandThree):
            operandThree = true;
            break;
        default:
            console.log("Error");

    }
});

// };

const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    currentOperator = '*';
    switch (false) {
        case (operandOne):
            operandOne = true;
            break;
        case (operandTwo):
            operandTwo = true;
            break;
        case (operandThree):
            operandThree = true;
            break;
        default:

    }
});


const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    currentOperator = '-';
    switch (false) {
        case (operandOne):
            operandOne = true;
            break;
        case (operandTwo):
            operandTwo = true;
            break;
        case (operandThree):
            operandThree = true;
            break;
        default:

    }
});


const operandPlus = document.querySelector('.btnPlus');
operandPlus.addEventListener('click', () => {
    currentOperator = '+';
    switch (false) {
        case (operandOne):
            operandOne = true;
            break;
        case (operandTwo):
            operandTwo = true;
            break;
        case (operandThree):
            operandThree = true;
            break;
        default:

    }
});



// taking numbers as inputs for calulations

const numOne = document.querySelector('.btn1');
numOne.addEventListener('click', () => {
    displayFunction(1);
});

const numTwo = document.querySelector('.btn2');
numTwo.addEventListener('click', () => {
    displayFunction(2);
});

const numThree = document.querySelector('.btn3');
numThree.addEventListener('click', () => {
    displayFunction(3);
});

const numFour = document.querySelector('.btn4');
numFour.addEventListener('click', () => {
    displayFunction(4);
});

const numFive = document.querySelector('.btn5');
numFive.addEventListener('click', () => {
    displayFunction(5);
});

const numSix = document.querySelector('.btn6');
numSix.addEventListener('click', () => {
    displayFunction(6);
});

const numSeven = document.querySelector('.btn7');
numSeven.addEventListener('click', () => {
    displayFunction(7);
});

const numEight = document.querySelector('.btn8');
numEight.addEventListener('click', () => {
    displayFunction(8);
});

const numNine = document.querySelector('.btn9');
numNine.addEventListener('click', () => {
    displayFunction(9);
});

const numZero = document.querySelector('.btn0');
numZero.addEventListener('click', () => {
    displayFunction(0);
});
