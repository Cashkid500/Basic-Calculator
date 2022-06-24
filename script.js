// takes the operand and operator input
let number1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operator (type +, -, * or / ): ");
let number2 = parseFloat(prompt("Enter second number: "));

let result;

// using if...else if... else
if (operator === "+") {
    result = number1 + number2;
} else if (operator === "-") {
    result = number1 - number2;
} else if (operator === "*") {
    result = number1 * number2;
} else {
    result = number1 / number2;
}

// display the result
console.log(` ${number1} ${operator} ${number2} = ${result}`);
alert(result);