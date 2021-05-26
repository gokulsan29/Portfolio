var secretNumber = 9;
var guess = Number(prompt("Guess a number"));
if(guess === secretNumber){
	alert("You got it");
}
else if (guess > secretNumber){
	alert("Too High, Try again");
}
else{
	alert("Too Low, Try again");
}