let firstInput = prompt("Enter your first value for calculation:");
let secondInput = prompt("Enter your second value for calculation:");

firstInput = parseInt(firstInput);
secondInput = parseInt(secondInput);

const resultOfSum = firstInput + secondInput;
console.log(resultOfSum);
document.write("Result: "+ resultOfSum + "<br>");