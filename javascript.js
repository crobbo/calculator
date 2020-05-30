// calculator operands

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// operate function

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
// number arrays to be used in calculations 

var numberArrayOne = [];
var numberArrayTwo = [];
var numberArrayThree = [];

// inital status of operand which changes when an operand is selected

var operandOne = false;
var operandTwo = false;
var operandThree = false;

var currentOperator = '';
var lastButton = '';


// setting the status of the operand to true when selected

const operandStatus = () => {
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
};

// Function which adds numbers to an array based on operand status

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


// A function which controls when numbers are added to a new array to prevent excessive new arrays
// which would cause calclator to mis-calculate

const controlFunction = (operandSymbol) => {
    if(lastButton === '+' || lastButton === '-' || lastButton === '/' || lastButton === '*'){    // errro with this
        console.log('Last equals operand');
    } else {  
        operandStatus();
        lastButton = 'operandSymbol';
    }
}

// Function which takes the number arrays and calculates final answer

const finalCalc = (numberArrayOne, numberArrayTwo, numberArrayThree) => {

    switch(true){
        case numberArrayOne.length > 0:
            return a = Number(numberArrayOne.join(''));
        case numberArrayTwo.length > 0:
            return b = Number(numberArrayTwo.join(''));
        case numberArrayThree.length > 0:
            return c = Number(numberArrayThree.join(''));
        default:
    }




};


// operand buttons 

const operandDivide = document.querySelector('.btnEquals');
operandDivide.addEventListener('click', () => {
   
    finalCalc();
});

const operandDivide = document.querySelector('.btnDivide');
operandDivide.addEventListener('click', () => {
    currentOperator = '/';
    controlFunction('/');      
});


const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    currentOperator = '*';
    controlFunction('*'); 
   
});


const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    currentOperator = '-';
    controlFunction('-'); 
});


const operandPlus = document.querySelector('.btnPlus');
operandPlus.addEventListener('click', () => {
    currentOperator = '+';
    controlFunction('+'); 
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
