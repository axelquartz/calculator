// Container Display
let containerDisplay = document.querySelector('#container-display');
let displayArray = []
let calculateArray = []
let numberArray = []
containerDisplay.innerHTML = displayArray;

// Event listener for each number of the calculator

// Key7
let key7 = document.querySelector('#key7');
key7.addEventListener('click', press7 = function(){

    if(calculateArray == ''){
        displayArray.push(7)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(7)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key8
let key8 = document.querySelector('#key8');
key8.addEventListener('click', press8 = function(){
    if(calculateArray == ''){
        displayArray.push(8)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(8)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key9
let key9 = document.querySelector('#key9');
key9.addEventListener('click', press9 = function(){
    if(calculateArray == ''){
        displayArray.push(9)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(9)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key4
let key4 = document.querySelector('#key4');
key4.addEventListener('click', press4 = function(){
    if(calculateArray == ''){
        displayArray.push(4)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(4)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key5
let key5 = document.querySelector('#key5');
key5.addEventListener('click', press5 = function(){
    if(calculateArray == ''){
        displayArray.push(5)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(5)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key6
let key6 = document.querySelector('#key6');
key6.addEventListener('click', press6 = function(){
    if(calculateArray == ''){
        displayArray.push(6)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(6)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key9
let key9 = document.querySelector('#key9');
key9.addEventListener('click', press9 = function(){
    if(calculateArray == ''){
        displayArray.push(9)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(9)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key9
let key9 = document.querySelector('#key9');
key9.addEventListener('click', press9 = function(){
    if(calculateArray == ''){
        displayArray.push(9)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(9)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key9
let key9 = document.querySelector('#key9');
key9.addEventListener('click', press9 = function(){
    if(calculateArray == ''){
        displayArray.push(9)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(9)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key9
let key9 = document.querySelector('#key9');
key9.addEventListener('click', press9 = function(){
    if(calculateArray == ''){
        displayArray.push(9)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(9)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key "/"
let keyDivide = document.querySelector('#key-divide');
keyDivide.addEventListener('click', function pressDivide(){
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)
})

// Key "="
let keyEqual = document.querySelector('#key-equal');
keyEqual.addEventListener('click', function pressEqual(){
    numberArray = numberArray.join('')
    numberArray = Number(numberArray)
    calculateArray = Number(calculateArray)
    // console.log(calculateArray / numberArray)
    containerDisplay.innerHTML = calculateArray / numberArray;
})


// Function of each operator
// let add = function add(val1, val2){
//     return val1 + val2;
// }
// let subtract = function subtract(val1, val2){
//     return val1 - val2;
// }
// let multiply = function multiply(val1, val2){
//     return val1 * val2;
// }
// let divide = function divide(val1, val2){
//     return val1 / val2;
// }

// function operate(calculation, val1, val2){
//     if (calculation == 'sum'){
//      return add(val1, val2)
//     }else if(calculation == 'subtract'){
//         return subtract(val1, val2)
//     }else if(calculation == 'multiply'){
//         return multiply(val1, val2)
//     }else{
//     return divide(val1, val2)
// }}



// operate([0], 3,5)