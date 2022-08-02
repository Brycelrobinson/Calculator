let screen = document.querySelector('#screen');
let numBtns = document.querySelectorAll('.numBtn');
let oprBtns = document.querySelectorAll('.oprBtn');
let equals = document.querySelector('#equals');
let clearBtn = document.querySelector('#clear');

let startNum = [];
let firstNum = 0;
let secondNum = 0;
let operator = '';


//clear button
clearBtn.addEventListener('click', () => clear());

//Stores Value of each button clicked in 'startNum' & prints to screen
numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        screen.textContent += numBtn.textContent;
        startNum.push(numBtn.textContent);
    });
});


//Prints Operator, Concatenates 'startNum' into 'firstNum', and stores operator
oprBtns.forEach(oprBtn => {
    oprBtn.addEventListener('click', () => {
        screen.textContent += ' ' + oprBtn.textContent + ' ';
        firstNum += Number(startNum.join(''));
        startNum = [];
        operator = oprBtn.textContent;
    })
});


//Concatenates 'startNum' into 'secondNum', calls operate();
equals.addEventListener('click', () => {
    secondNum = Number(startNum.join(''));
    operate(firstNum, operator, secondNum);
});


//Math Functions
function add(a,b){
    let item = Number(a) + Number(b);
    clear();
    firstNum = item;
    return screen.textContent = item;
  
}

function subtract(a,b) {
    let item = Number(a) - Number(b);
    clear();
    firstNum = item;
    return screen.textContent = item;
}

function multiply(a,b){
    let item = Number(a) * Number(b);
    clear();
    firstNum = item;
    return screen.textContent = item;
}

function divide(a,b){
    let item = Number(a) / Number(b);
    clear();
    firstNum = item;
    return screen.textContent = item;
}



//decides which Math Function to call
function operate(first, opr, second){

    switch(opr){
        case '+': return add(first, second);
        case '-': return subtract(first, second);
        case '*': return multiply(first, second);
        case '/': return divide(first, second);
        
        default: return 'Error';
    }

}

//Clers Screen
function clear(){
    screen.textContent = '';
    startNum = [];
    firstNum = 0;
    secondNum = 0;
    operator = '';
}