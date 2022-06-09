/* Q#10: Write a program that
a. Store correct password in a JS variable.
b. Asks the user to enter his/her password
c. Validate the two passwords:
       i. Check if user has entered password. If not, then give the
       message “ Please enter your password”
      ii. Check if both passwords are the same. If they are the
      same, show message “Correct! The password you
      entered matches the original password”. Show “Incorrect
      password” otherwise.*/
var storedpass="HiSo8-";
var inputPassword=prompt("Enter your password to login: ");
if (inputPassword!==""){
      console.log("User has entered the password");
      if (inputPassword===storedpass){
            console.log("Your password is correct, You are logged In.")
      }
      else{
            console.log("Your password is incorrect")
      }}
else{
      console.log("User hasn't entered the password");
}
