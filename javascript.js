// number & operand arrays to be used in calculations 

var numberArrayOne = [];
var numberArrayTwo = [];
var numberArrayThree = [];

var operandArrayOne = [];
var operandArrayTwo = [];
var operandArrayThree = [];

// inital status of operand which changes when an operand is selected

var operandOne = false;
var operandTwo = false;
var operandThree = false;

var currentOperator = '';
var lastButton = '';

var a = '';
var b = '';
var finalAnswer = [];

// calculator operands

const add = () => {
    x = a + b;    
};

const subtract = () => {
    x = a - b;
};
  
const multiply = () => { 
     console.log(a * b);
    //  finalAnswer.push();
};

const divide = () => {
    x = a / b;
};

const calculate = () => {
    console.log(operandArrayOne);

    if(finalAnswer.length < 1){
        switch(true){

            case (operandArrayOne.pop() === '/'):
                divide();
                break;
            case (operandArrayOne.pop() === '-'):
                subtract();
                break;
            case (operandArrayOne.pop() === '*'):
                multiply();
                break;
            case (operandArrayOne.pop() === '+'):
                add();
                break;
            default: 
            console.log("Switch statement error");
            
        }   
    } else {
        a = finalanswer;
        switch(true){

            case ((operandArrayOne.pop()) === '/'):
                divide();
                break;
            case (operandArrayOne.pop() === '-'):
                subtract();
                break;
            case ((operandArrayOne.pop()) === '*'):
                multiply();
                break;
            case (operandArrayOne.pop() === '+'):
                add();
                break;
            default:
            
        }   
    }
     
};

// operate function

// const operate = (operator, num1, num2) => {

//     switch (true) {
//         case (operator === '+'):
//             return add(num1, num2);
//             break;
//         case (operator === '-'):
//             return subtract(num1, num2);
//             break;

//         case (operator === '*'):
//             return multiply(num1, num2);
//             break;
//         case (operator === '/'):
//             return divide(num1, num2);
//             break;
//     }

// };

// Adding operands to a an array

const operandControl = (opp) => {
    switch(true){
        case numberArrayOne.length > 0:
            operandArrayOne.push(opp);
            console.log(operandArrayOne);
            break;
        case numberArrayTwo > 0:
            operandArrayTwo.push(opp);
            break;
        case numberArrayThree > 0:
            operandArrayThree.push(opp);
            break;
        default: 

    }
};

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
// being created when repeatedly pressing operand buttons

const controlFunction = (operandSymbol) => {
    if(lastButton === '+' || lastButton === '-' || lastButton === '/' || lastButton === '*'){    // errro with this
        console.log('Last equals operand');
    } else {  
        operandStatus();
        lastButton = 'operandSymbol';
    }
}

// Function which takes the number arrays and calculates final answer

const finalCalc = () => {

    switch(true){
        case numberArrayOne.length > 0:
            a = Number(numberArrayOne.join(''));
        case numberArrayTwo.length > 0:
            b = Number(numberArrayTwo.join(''));
        break;
        default:
    }
};


// operand buttons 

const operandEquals = document.querySelector('.btnEquals');
operandEquals.addEventListener('click', () => {
    finalCalc();
    calculate();
    console.log(operandArrayOne);

});

const operandDivide = document.querySelector('.btnDivide');
operandDivide.addEventListener('click', () => {
    currentOperator = '/';
    controlFunction('/');   
    operandControl(currentOperator);
       
});

const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    currentOperator = '*';
    controlFunction('*'); 
    operandControl(currentOperator);
   
});

const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    currentOperator = '-';
    controlFunction('-'); 
    operandControl(currentOperator);
});

const operandPlus = document.querySelector('.btnPlus');
operandPlus.addEventListener('click', () => {
    currentOperator = '+';
    controlFunction('+'); 
    operandControl(currentOperator);
});


// taking numbers as inputs for calulations

const numOne = document.querySelector('.btn1');
numOne.addEventListener('click', () => {
    displayFunction(1);
    lastButton = 1;
});

const numTwo = document.querySelector('.btn2');
numTwo.addEventListener('click', () => {
    displayFunction(2);
    lastButton = 2;
});

const numThree = document.querySelector('.btn3');
numThree.addEventListener('click', () => {
    displayFunction(3);
    lastButton = 3;
});

const numFour = document.querySelector('.btn4');
numFour.addEventListener('click', () => {
    displayFunction(4);
    lastButton = 4;
});

const numFive = document.querySelector('.btn5');
numFive.addEventListener('click', () => {
    displayFunction(5);
    lastButton = 5;
});

const numSix = document.querySelector('.btn6');
numSix.addEventListener('click', () => {
    displayFunction(6);
    lastButton = 6;
});

const numSeven = document.querySelector('.btn7');
numSeven.addEventListener('click', () => {
    displayFunction(7);
    lastButton = 7; 
});

const numEight = document.querySelector('.btn8');
numEight.addEventListener('click', () => {
    displayFunction(8);
    lastButton = 8;
});

const numNine = document.querySelector('.btn9');
numNine.addEventListener('click', () => {
    displayFunction(9);
    lastButton = 9;
});

const numZero = document.querySelector('.btn0');
numZero.addEventListener('click', () => {
    displayFunction(0);
    lastButton = 0;
});
