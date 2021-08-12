let userscore = 0;
let computerscore = 0;
const whowins = document.querySelector("#whowins");
const score = document.querySelector("#score");
function startGame(e) {
  let userChoice = e;
  let computerChoices = ["apple", "windows", "linux"];
  let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  let winner = compare(userChoice, computerChoice);
  whowins.classList = "";

  if (winner == "User") {
    whowins.innerHTML = winner + " wins";
    whowins.classList.add(" win");
  } else if (winner == "Computer") {
    whowins.innerHTML = winner + " wins";
    whowins.classList.add("lose");
  } else {
    whowins.innerHTML = winner;
    whowins.classList.add("tie");
  }

  score.innerHTML = `<span class="sides">User: ${userscore}</span>
<span class="sides">Computer: ${computerscore}</span>`;
}
function compare(choice1, choice2) {
  if (choice1 === choice2) {
    return "It´s a tie!";
  } else if (choice1 === "apple") {
    if (choice2 === "linux") {
      userscore++;
      return "User";
    } else if (choice2 === "windows") {
      computerscore++;
      return "Computer";
    }
  } else if (choice1 === "windows") {
    if (choice2 === "linux") {
      computerscore++;
      return "Computer";
    } else if (choice2 === "apple") {
      userscore++;
      return "User";
    }
  } else if (choice1 === "linux") {
    if (choice2 === "windows") {
      userscore++;
      return "User";
    } else if (choice2 === "apple") {
      computerscore++;
      return "Computer";
    }
  }
}
