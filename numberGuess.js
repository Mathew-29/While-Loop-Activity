//While Loop Activity
let correctNumber = Math.floor(Math.random() * 10) + 1;

let guess;

while (guess !== correctNumber) {
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess > correctNumber) {
        alert("Too high!");
    } else if (guess < correctNumber) {
        alert("Too low!");
    } else {
        alert("Correct!");
    }
}
