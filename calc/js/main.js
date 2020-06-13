const initValue = 0;
var displayValue = '';
var firstNumber = 0;
var secondNumber = 0;
var currentAction = '_';

function reset() {
  firstNumber = 0;
  secondNumber = 0;
  currentAction = '_';

  displayValue = initValue;
  showDisplayValue();
  displayValue = '';
}


function showDisplayValue() {
  const display = document.getElementById('display');
  if (displayValue < 0) {
    displayValue = Math.abs(displayValue);
    display.classList.add('minus');
  } else {
    display.classList.remove('minus');
  }
  display.innerText = displayValue;
}

function setNumber(num) {
console.log(num);
  if (num === '.') {
    if (displayValue.indexOf('.') === -1 && num === '.'){
      displayValue += '.';
    }
  } else {
    displayValue += num;
  }

  showDisplayValue();
}

function doAction(action) {
  const display = document.getElementById('display');
  if (display.classList.contains('minus')){
    secondNumber = +displayValue * -1;
  } else{
    secondNumber = +displayValue;
  }
  
  
  switch (currentAction) {

    /** Действие по + */
    case '+':
      firstNumber = firstNumber + secondNumber; 
    break;

    /** Действие по - */
    case '-':
      firstNumber = firstNumber - secondNumber; 
    break;
    
    /** Действие по * */
    case '*':
      firstNumber = firstNumber * secondNumber; 
    break;
    
    /** Действие по / */
    case '/':
      firstNumber = firstNumber / secondNumber; 
    break;

    /** Действие по % */
    case '%':
      firstNumber = firstNumber * (secondNumber / 100);
    break;
    
    /** Первый "проход" */
    case '_':
      firstNumber = secondNumber;
    break;

  }
  currentAction = action;

  displayValue = firstNumber;
  showDisplayValue();
  displayValue = '';
}

function doInvert() {
  const display = document.getElementById('display');
  if (!display.classList.contains('minus')){
    const numValue = (+displayValue) * -1;
    displayValue = numValue + '';
    showDisplayValue();
  } else{
    showDisplayValue();
  }
}