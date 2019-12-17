function biggerNumber(input) {
    let firstNum = +(input.shift());
    let secondNum = +(input.shift());
    
  if (firstNum > secondNum){
    console.log(firstNum);
  } else {
    console.log(secondNum);
  }
}

biggerNumber(["10", "20"])