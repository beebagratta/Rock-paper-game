let score = 0;
let player = document.querySelector(".player");
let compscore = document.querySelector(".comp");
let winner = document.querySelector(".winner");
const btn = document.querySelectorAll(".choice");
let compnumber = 0;
let usernumber = 0;

let playerwins = (user) => {
  user = player.innerText = `Player: ${usernumber}`;
};

let compwins = (comp) => {
  comp = compscore.innerText = `Computer: ${compnumber}`;
};

let compchoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randnum = Math.floor(Math.random() * 3);
  return options[randnum];
};

const drawgame = () => {
  console.log("It was draw");
};

const playgame = (userchoice) => {
  const comp = compchoice();
  if (userchoice === comp) {
    drawgame();
  } else if (userchoice === "rock" && comp === "paper") {
    winner.innerText = "comp wins";
    compnumber += 1;
    compwins(compnumber);
  } else if (userchoice === "rock" && comp === "scissor") {
    winner.innerText = "user wins";
    usernumber += 1;
    playerwins(usernumber);
  } else if (userchoice === "paper" && comp === "rock") {
    winner.innerText = "user wins";
    usernumber += 1;
    playerwins(usernumber);
  } else if (userchoice === "paper" && comp === "scissor") {
    winner.innerText = "comp wins";
    compnumber += 1;
    compwins(compnumber);
  } else if (userchoice === "scissor" && comp === "paper") {
    winner.innerText = "user wins";
    usernumber += 1;
    playerwins(usernumber);
  } else if (userchoice === "scissor" && comp === "rock") {
    winner.innerText = "comp wins";
    compnumber += 1;
    compwins(compnumber);
  }
};

btn.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
  });
});

