//calculator operands

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

//operate function

const operate = (operator, num1, num2) => {

    switch(true){
        case (operator === '+'):
            return add(num1,num2);
            break;
        case (operator === '-'):
            return subtract(num1,num2);
            break;

        case (operator === '*'):
            return multiply(num1,num2);
            break;
        case (operator === '/'):
            return divide(num1,num2);
            break;
    }

};

// User inputs 

const numberArrayOne = [];
const numberArrayTwo = [];
const numberArrayThree = [];

const operandOne = false;
const operandTwo = false; 
const operandThree = false;

// function that chooses correct array to add the number to.
const displayFunction = (num) => {
    switch(true){
        case (!operandOne):
            numberArrayOne.push(num);
            console.log(numberArrayOne);
            break;
        case (!operandTwo):
            numberArrayTwo.push(num);
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
    switch(false){
        case (operandOne):
            operandOne === true;
            break;
        case (operandTwo):
            operandTwo === true;
            break;
        case (operandThree):
            operandThree === true;
            break;
        default:    

    }
});

// };

const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    switch(false){
        case (operandOne):
            operandOne === true;
            break;
        case (operandTwo):
            operandTwo === true;
            break;
        case (operandThree):
            operandThree === true;
            break;
        default:    

    }
});


const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    switch(false){
        case (operandOne):
            operandOne === true;
            break;
        case (operandTwo):
            operandTwo === true;
            break;
        case (operandThree):
            operandThree === true;
            break;
        default:    

    }
});


const operandPlus = document.querySelector('.btnPlus');
    operandPlus.addEventListener('click', () => {
    switch(false){
        case (operandOne):
            operandOne === true;
            break;
        case (operandTwo):
            operandTwo === true;
            break;
        case (operandThree):
            operandThree === true;
            break;
        default:    

    }
});



// taking numbers as inputs for calulations

const numOne = document.querySelector('.btn1');
    numOne.addEventListener('click', () => {
    displayFunction(1);
    console.log('1');
});

