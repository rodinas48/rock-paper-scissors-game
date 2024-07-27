//score span
const playerScore = document.querySelector(".pScore");
const computerScore = document.querySelector(".cScore");
let score = 0;
let comScore = 0;
// players' hand
const playerHand = document.querySelector(".player");
const playerImg = document.querySelector(".player img");
const computerHand = document.querySelector(".computer");
const computerImg = document.querySelector(".computer img");

//btns
const handsBtns = document.querySelectorAll(".handBtn");
const playAgainBtn = document.querySelector(".playAgain");
const resetBtn = document.querySelector(".reset");
const rulesBtn = document.querySelector(".rules");
const exitBtn = document.querySelector('.exit');
// modal
const modal = document.querySelector('.overlay');
//end game msg
const endMsg = document.querySelector(".endMsg");

// Function to trigger animation by toggling classes
function triggerAnimation(element, animationClass) {
  // Remove the animation class
  element.classList.remove(animationClass);
  // Re-add the animation class after a small delay
  setTimeout(() => {
    element.classList.add(animationClass);
  }, 10);
}

// start game function
function playGame(index) {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // Reset animation by removing and re-adding the classes
  triggerAnimation(playerImg, "animatePlayer");
  triggerAnimation(computerImg, "animateComputer");

  setTimeout(() => {
    switch (index) {
      // in case you choose rock
      case 0:
        playerImg.src = "./images/rock.png";
        if (randomNumber === 1) {
          computerImg.src = "./images/robotRock.png";
          endMsg.textContent = "It's a Draw";
        } else if (randomNumber === 2) {
          computerImg.src = "./images/paperRobot.png";
          endMsg.textContent = "Computer WINS!";
          computerScore.textContent = ++comScore;
        } else {
          computerImg.src = "./images/scissorRobot.png";
          endMsg.textContent = "You WIN!";
          playerScore.textContent = ++score;
        }
        break;
      // in case you choose paper
      case 1:
        playerImg.src = "./images/paper.png";
        if (randomNumber === 1) {
          computerImg.src = "./images/robotRock.png";
          endMsg.textContent = "You WIN!";
          playerScore.textContent = ++score;
        } else if (randomNumber === 2) {
          computerImg.src = "./images/paperRobot.png";
          endMsg.textContent = "It's a Draw";
        } else {
          computerImg.src = "./images/scissorRobot.png";
          endMsg.textContent = "Computer WINS!";
          computerScore.textContent = ++comScore;
        }
        break;
      // in case you choose scissors
      case 2:
        playerImg.src = "./images/scissor.png";
        if (randomNumber === 1) {
          computerImg.src = "./images/robotRock.png";
          endMsg.textContent = "Computer WINS!";
          computerScore.textContent = ++comScore;
        } else if (randomNumber === 2) {
          computerImg.src = "./images/paperRobot.png";
          endMsg.textContent = "You WIN!";
          playerScore.textContent = ++score;
        } else {
          computerImg.src = "./images/scissorRobot.png";
          endMsg.textContent = "It's a Draw";
        }
        break;
    }
  }, 3000);
}
// handle click events to hands' btns and start game
handsBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    handsBtns.forEach((btn) => {
      btn.classList.add("greyBtn");
    });
    playGame(index);
  });
});
// reset all game components
function resetElements() {
   handsBtns.forEach((btn) => {
     btn.classList.remove("greyBtn");
   });
   playerImg.src = "./images/rock.png";
   computerImg.src = "./images/robotRock.png";
   endMsg.textContent = "";
}
// play again btn
function playAgain() {
  playAgainBtn.addEventListener('click', resetElements)
}
playAgain();
// reset game
function reset() {
  resetBtn.addEventListener('click', () => {
    score = 0;
    playerScore.textContent = score;
    comScore = 0;
    computerScore.textContent = comScore;
    resetElements();
  })
}
reset();

function showRules() {
  rulesBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  })
}
showRules();
function closeModal() {
  exitBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  })
}
closeModal();