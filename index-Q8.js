/*Write a program that takes input a number from user & state whether
the number is positive, negative or zero.*/
var userNumber=parseFloat(prompt("Enter your Number: "));
if (userNumber>0){
    console.log("The input number is positive");
}
else if(userNumber<0){
    console.log("The input number is negative");
}
else{
    console.log("The input number is zero")
}