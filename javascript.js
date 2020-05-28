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