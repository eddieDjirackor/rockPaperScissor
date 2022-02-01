const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Wrong Input');
  }
  };
  //getUserChoice('stone');
  //console.log(getUserChoice('stone'));
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
      default:
      return 'wrong input';
    }
  };
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    }
    if (userChoice === 'bomb') {
      return 'You Animal, You win';
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'You lose';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return 'You win';
    }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'You lose';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      return 'You win';
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'You lose';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      return 'You win';
    }
  };
  //console.log(determineWinner('paper', 'scissors'));
  
  const playGame = () => {
    let userChoice = getUserChoice('rOcK');
    let computerChoice = getComputerChoice();
    console.log(`Your choice ${userChoice}, my choice ${computerChoice}`);
    return determineWinner(userChoice, computerChoice);
  };
  console.log(playGame());