function playGame21(): void {
  let currentNumber: number = 0;

  while (currentNumber < 21) {
    const prompt = require("prompt-sync")({ sigint: true });
    const userNumber: number = parseInt(
      prompt("Your turn: Enter a number between 1 and 3: ")
    );
    if (userNumber < 1 || userNumber > 3) {
      console.log("invalid input. Please enter the number between 1 and 3");
      continue;
    }
    currentNumber += userNumber;
    console.log("Current number is ", currentNumber);
    if (currentNumber >= 21) {
      console.log("\nYou loss!");
      break;
    }
    let computerNumber: number = 4 - userNumber;
    currentNumber += computerNumber;
    console.log("Computer's turn: Computer adds", computerNumber);
    console.log("Current number is ", currentNumber);

    if (currentNumber >= 21) {
      console.log("\n You win !");
    }
  }
}
playGame21()