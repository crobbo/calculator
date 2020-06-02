var numberArrayOne = [];
var numberArrayTwo = [];
var operandArrayOne = [];
var lastButtonArray = [];
var lastCalculated = [];

var a = '';
var b = '';

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

    a = '';
    b = '';
    numberArrayOne = [];
    numberArrayTwo = [];
    operandArrayOne = [];
    lastButtonArray = [];
};

// function which adds numbers to Number Arrays & chooses the correct array to add it to

const addNumArray = (num) => {
    if(numberArrayTwo > 0){
        numberArrayTwo.push(num);
    } else if(lastButtonArray[lastButtonArray.length - 1] === '/' || lastButtonArray[lastButtonArray.length - 1] === '*' || lastButtonArray[lastButtonArray.length - 1] === '-' || lastButtonArray[lastButtonArray.length - 1] === '+'){
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
    if(numberArrayOne.length > 0 && numberArrayTwo.length > 0){
        a = Number(numberArrayOne.join(''));
        b = Number(numberArrayTwo.join(''));
        calculate();
    } else if(lastCalculated.length > 0 && numberArrayOne.length > 0){
        a = lastCalculated[lastCalculated.length - 1];
        b = Number(numberArrayOne.join(''));
        calculate();      
    } 
    
    else {
        console.log('a & b values have not been set')
    }
};

// operand buttons 

const operandEquals = document.querySelector('.btnEquals');
operandEquals.addEventListener('click', () => {
    // addOperandArray('=');
    addButtonArray('='); 
    operandControl();
       
});

const operandDivide = document.querySelector('.btnDivide');
operandDivide.addEventListener('click', () => {
    addOperandArray('/');
    addButtonArray('/');
    operandControl();    
});

const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    addOperandArray('*');
    addButtonArray('*');
    operandControl(); 
});

const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    addOperandArray('-');
    addButtonArray('-');
    operandControl();
    
});

const operandPlus = document.querySelector('.btnPlus');
operandPlus.addEventListener('click', () => {
    addOperandArray('+');
    addButtonArray('+');
    operandControl();
});


// number buttons 

const numOne = document.querySelector('.btn1');
numOne.addEventListener('click', () => {
    addNumArray(1);
    addButtonArray(1);
        
});

const numTwo = document.querySelector('.btn2');
numTwo.addEventListener('click', () => {
    addNumArray(2);
    addButtonArray(2);
   
});

const numThree = document.querySelector('.btn3');
numThree.addEventListener('click', () => {
    addNumArray(3);
    addButtonArray(3);
    
});

const numFour = document.querySelector('.btn4');
numFour.addEventListener('click', () => {
    addNumArray(4);
    addButtonArray(4);
    
});

const numFive = document.querySelector('.btn5');
numFive.addEventListener('click', () => {
    addNumArray(5);
    addButtonArray(5);
});

const numSix = document.querySelector('.btn6');
numSix.addEventListener('click', () => {
    addNumArray(6);
    addButtonArray(6);
    
});

const numSeven = document.querySelector('.btn7');
numSeven.addEventListener('click', () => {
    addNumArray(7);
    addButtonArray(7);
});

const numEight = document.querySelector('.btn8');
numEight.addEventListener('click', () => {
    addNumArray(8);
    addButtonArray(8);
});

const numNine = document.querySelector('.btn9');
numNine.addEventListener('click', () => {
    addNumArray(9);
    addButtonArray(9);
});

const numZero = document.querySelector('.btn0');
numZero.addEventListener('click', () => {
    addNumArray(0);
    addButtonArray(0);
});