// Вивести діапазон чисел   

let number = prompt('Enter two number', '1 6');

let arrayNumbers = searchArrayNumbers(number);
checkValidation(arrayNumbers);
showRangeNumbers(arrayNumbers);

function searchArrayNumbers(number) {
  const arrayNumber = [];
    
  for(let i = 0; i < number.length; i++){
    if (Number(number[i])){
      arrayNumber.push(Number(number[i]));
    }
    else {
      continue;
    }
  }
  
  return arrayNumber;
}

function showRangeNumbers(num){
  const firstNumber =num[0];
  const secondNumber = num[1];
   
  if (firstNumber < secondNumber){
    for(let i = firstNumber + 1; i < secondNumber; i++){
      console.log(i);
    }
  }
  else if (firstNumber > secondNumber){
    for(let i = secondNumber + 1; i < firstNumber; i++){
      console.log(i);
    }
  }
}

function checkValidation(num){
  if(num.length != 2){
    throw 'Error';
  } 
}
