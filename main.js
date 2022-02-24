let userInput;

let getUserChoice = () => {
  userInput = window.prompt(`Let's play roshambo! Enter rock, paper, or scissors.`);
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    console.log(`You chose ${userInput}.`);
    return userInput;
  } else {
    window.alert('Please choose either rock, paper, or scissors.');
    return getUserChoice();
  }
};

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `I chose ${computerChoice} too. It's a tie.`;
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return `I chose paper. You lose!`
    } else {
      return `I chose scissors. You win!`
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return `I chose rock. You win!`;
    } else {
      return `I chose scissors. You lose!`;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return `I chose rock. You lose!`;
    } else {
      return `I chose paper. You win!`;
    }
  } else {
    return `Something went wrong....`
  }
};

let playGame = () => {
  let userChoice = getUserChoice();
  //console.log(userChoice);
  let computerChoice = getComputerChoice();
  //console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
