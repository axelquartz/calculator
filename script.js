// Container Display
let containerDisplay = document.querySelector('#container-display');
containerDisplay.style.fontSize = '32px'

let displayArray = []
let calculateArray = []
let numberArray = []
containerDisplay.innerHTML = displayArray;

// Event listener for each number of the calculator

// Clear Key
let clearKey = document.querySelector('#container-clear');
clearKey.addEventListener('click', clearValues = function(){
    calculateArray = [];
    numberArray = [];
    displayArray = [];
    containerDisplay.innerHTML = displayArray;
})

// Key1
let key1 = document.querySelector('#key1');
key1.addEventListener('click', press1 = function(){
    if(calculateArray == ''){
        displayArray.push(1)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(1)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key2
let key2 = document.querySelector('#key2');
key2.addEventListener('click', press2 = function(){
    if(calculateArray == ''){
        displayArray.push(2)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(2)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key3
let key3 = document.querySelector('#key3');
key3.addEventListener('click', press3 = function(){
    if(calculateArray == ''){
        displayArray.push(3)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(3)
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

// Key0
let key0 = document.querySelector('#key0');
key0.addEventListener('click', press0 = function(){
    if(calculateArray == ''){
        displayArray.push(0)
        containerDisplay.innerHTML = displayArray.join('');
    }else{
        numberArray.push(0)
        containerDisplay.innerHTML = numberArray.join('');
    }
})

// Key "+"
let keyAdd = document.querySelector('#key-add');
keyAdd.addEventListener('click', function pressAdd(){
     keyAdd.classList.add('addIsClicked')
if (keyAdd.classList.contains('addIsClicked') && (numberArray.length == 0)){
     displayArray = displayArray.join('')
     displayArray = Number(displayArray)
     calculateArray.push(displayArray)
     keyAdd.classList.add('addIsClicked')

}else if(keyAdd.classList.contains('addIsClicked') && numberArray.length > 0){
        keyEqual.classList.add('equalIsClicked')
        numberArray = numberArray.join('')
        numberArray = Number(numberArray)
        calculateArray = Number(calculateArray)
    
        // Check wich operator key was pressed
        
        if (keyDivide.classList.contains('divideIsClicked')){ // Check if Divide Key was pressed in order to divide the 2 values
            calculateArray = containerDisplay.innerHTML = calculateArray / numberArray;
            numberArray = []
            keyDivide.classList.remove('divideIsClicked')
    
        } else if(keyMultiply.classList.contains('multiplyIsClicked')){ // Check if Multiply Key was pressed in order to multiply the 2 values
            calculateArray = containerDisplay.innerHTML = calculateArray * numberArray;
            numberArray = []
            keyMultiply.classList.remove('multiplyIsClicked')
    
        } else if(keyAdd.classList.contains('addIsClicked')){ // Check if Add Key was pressed in order to sum the 2 values
            calculateArray = containerDisplay.innerHTML = calculateArray + numberArray;
            numberArray = []
            keyAdd.classList.remove('addIsClicked')
    
        } else if(keySub.classList.contains('subIsClicked')){ // Check if Multiply Key was pressed in order to multiply the 2 values
            calculateArray = containerDisplay.innerHTML = calculateArray - numberArray;
            numberArray = []
            keySub.classList.remove('subIsClicked')
    
        }
    }else{
    displayArray = displayArray.join('')
     displayArray = Number(displayArray)
     calculateArray.push(displayArray)
     keyAdd.classList.add('addIsClicked')
}
})

// Key "-"
let keySub = document.querySelector('#key-sub');
keySub.addEventListener('click', function pressSub(){
    keySub.classList.add('subIsClicked')
if(keySub.classList.contains('subIsClicked')){
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)
    keySub.classList.add('subIsClicked')
    }else{
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)
    keySub.classList.add('subIsClicked')
    }
})

// Key "X"
let keyMultiply = document.querySelector('#key-multiply');
keyMultiply.addEventListener('click', function pressMultiply(){
    keyMultiply.classList.add('multiplyIsClicked')
    if(keyMultiply.classList.contains('multiplyIsClicked')){
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)
    keyMultiply.classList.add('multiplyIsClicked')
    }else{
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)
    keyMultiply.classList.add('multiplyIsClicked')    
    }
})

// Key "/"
let keyDivide = document.querySelector('#key-divide');
keyDivide.addEventListener('click', function pressDivide(){
    keyDivide.classList.add('divideIsClicked')
    if(keyDivide.classList.contains('divideIsClicked')){
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)
    }else{
    displayArray = displayArray.join('')
    displayArray = Number(displayArray)
    calculateArray.push(displayArray)    
    }
})

// Key "="
let keyEqual = document.querySelector('#key-equal');
keyEqual.addEventListener('click', function pressEqual(){
    keyEqual.classList.add('equalIsClicked')
    numberArray = numberArray.join('')
    numberArray = Number(numberArray)
    calculateArray = Number(calculateArray)

    // Check wich operator key was pressed
    
    if (keyDivide.classList.contains('divideIsClicked')){ // Check if Divide Key was pressed in order to divide the 2 values
        calculateArray = containerDisplay.innerHTML = calculateArray / numberArray;
        numberArray = []
        keyDivide.classList.remove('divideIsClicked')

    } else if(keyMultiply.classList.contains('multiplyIsClicked')){ // Check if Multiply Key was pressed in order to multiply the 2 values
        calculateArray = containerDisplay.innerHTML = calculateArray * numberArray;
        numberArray = []
        keyMultiply.classList.remove('multiplyIsClicked')

    } else if(keyAdd.classList.contains('addIsClicked')){ // Check if Add Key was pressed in order to sum the 2 values
        calculateArray = containerDisplay.innerHTML = calculateArray + numberArray;
        numberArray = []
        keyAdd.classList.remove('addIsClicked')

    } else if(keySub.classList.contains('subIsClicked')){ // Check if Multiply Key was pressed in order to multiply the 2 values
        calculateArray = containerDisplay.innerHTML = calculateArray - numberArray;
        numberArray = []
        keySub.classList.remove('subIsClicked')

    }
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

