const max = prompt("enter max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("you have exit the game");
    console.log(`the number was ${random}`);
    break;
  }

  if (guess == random) {
    console.log(`correct guess the number was ${random}`);
    break;
  } else if (guess < random) {
    guess = prompt("your guess was too small, try again!");
  } else {
    guess = prompt("your guess was too large, try again!");
  }
}
