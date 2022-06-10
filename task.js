// Вивести діапазон чисел   

let number = prompt('Enter two number', '16');

let arrayNumbers = searchArrayNumbers(number);
checkValidation(arrayNumbers);
showRangeNumbers(arrayNumbers);

function searchArrayNumbers(number) {
  const arrayNumber = [];
    
  for(let i = 0; i < number.length; i++){
    let point = number[i];

    if (Number(point)){
      arrayNumber.push(Number(point));
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
