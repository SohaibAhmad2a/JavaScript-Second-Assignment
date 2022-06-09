/*Q#7: Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

var firstNumber=parseFloat(prompt("Please Enter your First Number: "));
var operator=prompt("Please choose an Opertor from the set of following Operators +,-,*,/,%: ");
var secondNumber=parseFloat(prompt("please Enter your Second Number"));
if (operator==="*"){
    console.log(firstNumber*secondNumber);
}
else if (operator==="+"){
    console.log(firstNumber+secondNumber);
}
else if (operator==="-"){
    console.log(firstNumber-secondNumber);
}
else if (operator==="/"){
    console.log(firstNumber/secondNumber);
}
else {
    console.log(firstNumber%secondNumber);
}