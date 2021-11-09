//rock paper scissors game

//set out the options

let options = ["rock", "paper", "scissors"]

//get computer to generate between options and save as a variable

function computerPlay() {
    //gen number between 0 & 1 times length of options
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//get human input, return choice, save it as a variable

function humanPlay() {
    let choice = window.prompt("type rock, paper or scissors");
    return choice.toLowerCase();
}

//function that plays a round of rock paper scissors

function playGame() {

    let round = 0;
    let comPoint = 0;
    let humPoint = 0;

    while (round < 5) {

        //set computer & human choice
        let computer = computerPlay();
        let human = humanPlay();

        //compare results
        if (computer == human) {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you tied");
        } else if (computer == "rock" && human == "paper") {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you win");
            humPoint = humPoint + 1;
        } else if (computer == "rock" && human == "scissors") {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you lose");
            comPoint = comPoint + 1;
        } else if (computer == "paper" && human == "rock") {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you lose");
            comPoint = comPoint + 1;
        } else if (computer == "paper" && human == "scissors") {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you win");
            humPoint = humPoint + 1;
        } else if (computer == "scissors" && human == "rock") {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you win");
            humPoint = humPoint + 1;
        } else if (computer == "scissors" && human == "paper") {
            console.log("computer: " + computer);
            console.log("human: " + human);
            console.log("you lose");
            comPoint = comPoint + 1;
        } else {
            console.log("you didn't pick rock, paper or scissors. you lose.")
            comPoint = comPoint + 1;
        }

        round = round + 1;

    }

    console.log(comPoint);
    console.log(humPoint);

    if (comPoint == humPoint) {
        console.log("you tied!");
    } else if (comPoint > humPoint) {
        console.log("the computer wins the game :(");
    } else {
        console.log("you win the game :)");
    }

}

playGame()