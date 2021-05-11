const button = document.getElementById("clickButton");
document.getElementById("noclick").addEventListener("click", () => {
  console.log("click body");
});
const scoreElement = document.getElementById("score");

let score = 0;

const setScore = (clickScore = 0) => {
  localStorage.setItem("clickScore", clickScore);
  scoreElement.innerHTML = clickScore;
};

const recoverScore = () => {
  const clickScore = localStorage.getItem("clickScore");

  if (clickScore) {
    setScore(clickScore);
    score = clickScore;
  }
};

const getRandomNumberWithin = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};

document.addEventListener("click", (event) => {
  const isButtonClick = button.contains(event.target);
  console.log({ isButtonClick });

  if (isButtonClick) {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetWidth;
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    const minX = 0;
    const minY = 0;

    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    const newX = getRandomNumberWithin(minX, maxX);
    const newY = getRandomNumberWithin(minY, maxY);

    button.style.position = "absolute";
    button.style.left = newX;
    button.style.top = newY;

    // Update score
    score++;
    setScore(score);
  } else {
    score = 0;
    setScore(score);
  }
});

// Restore previous score
recoverScore();
