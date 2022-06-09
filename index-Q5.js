/*Q#5: Store a secret number (ranging from 1 to 10) in a variable. Prompt
user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show “Close
enough to the correct answer”.*/ 

var storedNumber=5;
var guessedNumber=parseInt(prompt("Guess the Number: "));
if (storedNumber===guessedNumber){
    alert("Bingo! Correct answer.")
}
else if(storedNumber===guessedNumber+1){
    alert("Close to the actual Number");
}
else{
    alert("Your guess is incorrect");
}