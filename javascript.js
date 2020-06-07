// number & operand arrays to be used in calculations 

var numberArrayOne = [];
var numberArrayTwo = [];
var numberArrayThree = [];

var operandArrayOne = [];
var operandArrayTwo = [];

// inital status of operand which changes when an operand is selected

var operandOne = false;
var operandTwo = false;
var operandThree = false;

var currentOperator = '';
var lastButton = '';

var a = '';
var b = '';
var finalAnswer = '';
var previousAnswer = ''

// calculator operands

const add = (x,y) => {
    finalAnswer = x + y; 
    console.log(finalAnswer);   
};

const subtract = (x,y) => {
    finalAnswer = x - y;
    console.log(finalAnswer);
};
  
const multiply = (x,y) => { 
    finalAnswer = x * y;
    console.log(finalAnswer);
    
};

const divide = (x,y) => {
    finalAnswer = x / y;
    console.log(finalAnswer);
};

const calculate = () => {
    console.log(operandArrayOne);
    if (operandArrayOne.length < 2){
        console.log("operandArrayOne.length < 2")
        switch(operandArrayOne[0]){   

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

    } else if(finalAnswer.length < 1){
        console.log("finalAnswer.length < 1");
        switch(operandArrayOne[operandArrayOne.length - 2]){     //changed operandArrayOne.pop())

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
    } else {
        console.log("Else Statement reached");
        a = finalAnswer;
        b = Number(numberArrayOne.join(''));
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
            console.log("Switch statement error");
            
        } 
    }
     
};

// adds last buttons to an array but only they have not been pressed. recongnses if opernad
// has already been pressed


// const lastButtonControl = (btn) => {
//     if()

// };

// add numbers to the correct array

const operandControl = (opp) => {
    if(numberArrayOne.length > 0){
        operandArrayOne.push(opp);
        console.log(operandArrayOne);
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
            break
        default:
}
};

// reset operand status after equals sign is pressed

const equalsReset = () => {
    numberArrayOne = [];
    numberArrayTwo = [];
    operandOne = false;
    operandTwo = false;
    
};

// stringing mutiply calculations together 

const stringCalc = () => {
    console.log("stringCalc being called")
    switch (true){
        case (finalAnswer > 0 || finalAnswer < 0) ||(numberArrayOne.length > 0 && numberArrayTwo.length > 0):
            console.log("condition one");
            finalCalc();
            calculate();
            equalsReset();
        break;        
        default:
            console.log("None")                                 

    } 
};

// Function which adds numbers to an array based on operand status

const displayFunction = (num) => {
    switch (true) {
        case (!operandOne):
            numberArrayOne.push(num);
            
            break;
        case (!operandTwo):
            numberArrayTwo.push(num);
            
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
    equalsReset();
    operandArrayOne.push('=');

});

const operandDivide = document.querySelector('.btnDivide');
operandDivide.addEventListener('click', () => {
    currentOperator = '/';
    controlFunction('/');   
    operandControl(currentOperator);
    stringCalc();   
       
    
});

const operandMultiply = document.querySelector('.btnMultiply');
operandMultiply.addEventListener('click', () => {
    currentOperator = '*';
    controlFunction('*'); 
    operandControl(currentOperator);
    console.log(numberArrayOne);
    console.log(numberArrayTwo);
    stringCalc();   
   
});

const operandMinus = document.querySelector('.btnMinus');
operandMinus.addEventListener('click', () => {
    currentOperator = '-';
    controlFunction('-'); 
    operandControl(currentOperator);
    stringCalc();   
});

const operandPlus = document.querySelector('.btnPlus');
operandPlus.addEventListener('click', () => {
    currentOperator = '+';
    controlFunction('+'); 
    operandControl(currentOperator);
    stringCalc();   
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

