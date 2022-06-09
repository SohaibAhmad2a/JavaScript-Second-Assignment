/*Q#6: Write a program that checks whether the given input is an even
number or an odd number.*/ 

var inputNumber=parseInt(prompt("Enter your Number: "));
var remaindNumber;
remaindNumber=inputNumber%2;
if (remaindNumber===1||remaindNumber===-1){
    console.log("The input Number is Odd");
}
else {
    console.log("The input number is Even");
}