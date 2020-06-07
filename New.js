var numberArrayOne = [];
var numberArrayTwo = [];
var operandArrayOne = [];
var lastButtonArray = [];
var lastCalculated = [];

var a = '';
var b = '';

var calcString = '';

// reset calulator 

const reset = () => {
    numberArrayOne = [];
    numberArrayTwo = [];
    operandArrayOne = [];
    lastButtonArray = [];
    lastCalculated = [];
    a = '';
    b = '';
    calcString = '';
    userCalculation.textContent = calcString;
    display.appendChild(userCalculation);
}

// function which adds to calcString so it can be displayed

const addToString = (input) => {
   switch(true){
        case calcString.length < 1: 
           calcString += input;
           break;
        case calcString.charAt(calcString.length - 1) === '+' && input === '+':
           calcString = calcString.slice(0,-1) + input;
           break;
       case calcString.charAt(calcString.length - 1) === '-' && input === '-':
          calcString = calcString.slice(0,-1) + input;
           break; 
       case calcString.charAt(calcString.length - 1) === '/' && input === '/':
            calcString = calcString.slice(0,-1) + input;
           break; 
       case calcString.charAt(calcString.length - 1) === '*' && input === '*':
            calcString = calcString.slice(0,-1) + input;
            break; 
       default: 
            calcString += input;
        break; 
   }
   userCalculation.textContent = calcString;
   display.appendChild(userCalculation);
};

// function which shows final calculation

const displayAnswer = () => {
    calcString = lastCalculated[lastCalculated.length - 1];
    userCalculation.textContent = calcString;
    display.appendChild(userCalculation);
}; 

// Calculator operand functions 

const add = (x,y) => {
    lastCalculated.push(x + y); 
    console.log(lastCalculated[lastCalculated.length - 1]);   
};

const subtract = (x,y) => {
    lastCalculated.push(x - y); 
    console.log(lastCalculated[lastCalculated.length - 1]);  
};
  
const multiply = (x,y) => { 
    lastCalculated.push(x * y); 
    console.log(lastCalculated[lastCalculated.length - 1]);  
    
};

const divide = (x,y) => {
    lastCalculated.push(x / y); 
    console.log(lastCalculated[lastCalculated.length - 1]);  
};

// function to  calculate the answer

const calculate = () => {
    switch(operandArrayOne[operandArrayOne.length - 1]){   

        case '/':
            divide(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '+':
            add(a,b);
            break;
        default:         
    }   
    
    // calculation.textContent = lastCalculated[lastCalculated.length - 1];
    // display.appendChild(calculation);

    a = lastCalculated[lastCalculated.length -1];
    b = '';
    numberArrayOne = [];
    numberArrayTwo = [];
    lastButtonArray = [];
};

const stringCalculate = () => {
    switch(operandArrayOne[operandArrayOne.length - 2]){   

        case '/':
            divide(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '+':
            add(a,b);
            break;
        default:         
    }   

    // calculation.textContent = lastCalculated[lastCalculated.length - 1];
    // display.appendChild(calculation);

    a = lastCalculated[lastCalculated.length -1];
    b = '';
    numberArrayOne = [];
    numberArrayTwo = [];
    lastButtonArray = [];
};

// function which adds numbers to Number Arrays & chooses the correct array to add it to

const addNumArray = (num) => {
    if(numberArrayTwo.length > 0){
        numberArrayTwo.push(num);
    } else if(lastButtonArray[lastButtonArray.length - 1] === '/' || lastButtonArray[lastButtonArray.length - 1] === '*' 
    || lastButtonArray[lastButtonArray.length - 1] === '-' || lastButtonArray[lastButtonArray.length - 1] === '+' && numberArrayOne.length > 0){
        numberArrayTwo.push(num);
    } else {
        numberArrayOne.push(num);
    }      
};

// function whichs adds an operand to an operandArray 

const addOperandArray = (operand) => {
    operandArrayOne.push(operand);    
};

//function which adds button to lastButtonArray

const addButtonArray = (btn) => {
    lastButtonArray.push(btn);
};

// function which controls and checks the behaviour of an operand click. 

const operandControl = () => {
    switch(true){
        case numberArrayOne.length > 0 && numberArrayTwo.length > 0 && operandArrayOne[operandArrayOne.length - 2]
         === operandArrayOne[operandArrayOne.length - 1]: 
            console.log('CASE 1!');
            a = Number(numberArrayOne.join(''));
            b = Number(numberArrayTwo.join(''));
            calculate();
            break;
        case numberArrayOne.length > 0 && numberArrayTwo.length > 0 && operandArrayOne[operandArrayOne.length - 2]
        !== operandArrayOne[operandArrayOne.length - 1]:
            a = Number(numberArrayOne.join(''));
            b = Number(numberArrayTwo.join(''));
            stringCalculate();
            break;         
        case (operandArrayOne[operandArrayOne.length - 2] !== operandArrayOne[operandArrayOne.length - 1] 
            && lastCalculated.length > 0 && numberArrayOne.length > 0):
            console.log('CASE 2!');
            b = Number(numberArrayOne.join(''));
            console.log('B = ' + b);
            console.log('A = ' + a);
            stringCalculate();
            break;
        case ((operandArrayOne[operandArrayOne.length - 2] === operandArrayOne[operandArrayOne.length - 1]) 
            && (lastCalculated.length > 0) && (numberArrayOne.length > 0)):
            console.log('CASE 3');
            b = Number(numberArrayOne.join(''));
            console.log(b);
            console.log(a);
            calculate();
            break;
        case (operandArrayOne[operandArrayOne.length - 2] !== operandArrayOne[operandArrayOne.length - 1] 
            && lastCalculated.length > 0 && numberArrayTwo.length > 0):
            console.log("CASE 4")
            b = Number(numberArrayTwo.join(''))
            stringCalculate();
            break;
        case (operandArrayOne[operandArrayOne.length - 2] === operandArrayOne[operandArrayOne.length - 1] 
            && lastCalculated.length > 0 && numberArrayTwo.length > 0):
            console.log("CASE 4")
            b = Number(numberArrayTwo.join(''))
            calculate();
            break;
        default: 
            console.log('Do nothing!');
            break;

    }
};


// operand buttons 

const operandEquals = document.querySelector('.btnEquals');
operandEquals.addEventListener('click', () => {
    addButtonArray('='); 
    if (operandArrayOne.length === 1){
        
        a = Number(numberArrayOne.join(''));
        b = Number(numberArrayTwo.join(''));
        calculate();
        
    } else if(numberArrayTwo.length > 0){
        
        b = Number(numberArrayTwo.join(''));
        calculate(); 
    } else {
        
        b = Number(numberArrayOne.join(''));
        calculate();
    }
    displayAnswer();
     
});

const operandDivide = document.querySelector('.btnDivide');
operandDivide.addEventListener('click', () => {
    addOperandArray('/');
    addButtonArray('/');
    operandControl();
    if(lastCalculated.length > 0){
        displayAnswer();
        calcString = lastCalculated[lastCalculated.length -1].toString();
    };       
    addToString('/');
});

const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    addOperandArray('*');
    addButtonArray('*');
    operandControl(); 
    if(lastCalculated.length > 0){
        displayAnswer();
        calcString = lastCalculated[lastCalculated.length -1].toString();
    };   
    addToString('*');
});

const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    addOperandArray('-');
    addButtonArray('-');
    operandControl();
    if(lastCalculated.length > 0){
        displayAnswer();
        calcString = lastCalculated[lastCalculated.length -1].toString();
    };   
    addToString('-');
    
});

const operandPlus = document.querySelector('.btnPlus');
operandPlus.addEventListener('click', () => {
    addOperandArray('+');
    addButtonArray('+');
    operandControl();
    if(lastCalculated.length > 0){
        displayAnswer();
        calcString = lastCalculated[lastCalculated.length -1].toString();
    };   
    addToString('+');
});

const resetBtn = document.querySelector('.btnAc');
resetBtn.addEventListener('click', () => {
    reset();        
});

// number buttons 

const numOne = document.querySelector('.btn1');
numOne.addEventListener('click', () => {
    addNumArray(1);
    addButtonArray(1);
    addToString(1);
        
});

const numTwo = document.querySelector('.btn2');
numTwo.addEventListener('click', () => {
    addNumArray(2);
    addButtonArray(2);
    addToString(2);
   
});

const numThree = document.querySelector('.btn3');
numThree.addEventListener('click', () => {
    addNumArray(3);
    addButtonArray(3);
    addToString(3);
    
});

const numFour = document.querySelector('.btn4');
numFour.addEventListener('click', () => {
    addNumArray(4);
    addButtonArray(4);
    addToString(4);
    
});

const numFive = document.querySelector('.btn5');
numFive.addEventListener('click', () => {
    addNumArray(5);
    addButtonArray(5);
    addToString(5);
});

const numSix = document.querySelector('.btn6');
numSix.addEventListener('click', () => {
    addNumArray(6);
    addButtonArray(6);
    addToString(6);
    
    
});

const numSeven = document.querySelector('.btn7');
numSeven.addEventListener('click', () => {
    addNumArray(7);
    addButtonArray(7);
    addToString(7);
});

const numEight = document.querySelector('.btn8');
numEight.addEventListener('click', () => {
    addNumArray(8);
    addButtonArray(8);
    addToString(8);
});

const numNine = document.querySelector('.btn9');
numNine.addEventListener('click', () => {
    addNumArray(9);
    addButtonArray(9);
    addToString(9);
});

const numZero = document.querySelector('.btn0');
numZero.addEventListener('click', () => {
    addNumArray(0);
    addButtonArray(0);
    addToString(0);
});






// Show user their calculations

const display = document.querySelector('#display'); 
const userCalculation = document.createElement('p');
userCalculation.setAttribute('class', 'display-text');
