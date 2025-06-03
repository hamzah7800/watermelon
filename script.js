let score = 0;
let autoClickers = 0;
const melon = document.getElementById("melon");
const scoreDisplay = document.getElementById("score");
const autoDisplay = document.getElementById("autoCount");
const buyButton = document.getElementById("buyAuto");

function updateDisplay() {
  scoreDisplay.textContent = `Watermelons: ${score}`;
  autoDisplay.textContent = `AutoClickers: ${autoClickers}`;
}

melon.addEventListener("click", () => {
  score++;
  updateDisplay();
});

buyButton.addEventListener("click", () => {
  const cost = 100;
  if (score >= cost) {
    score -= cost;
    autoClickers++;
    startAutoClicker();
    updateDisplay();
  }
});

function startAutoClicker() {
  setInterval(() => {
    score += 10; // 10x click
    updateDisplay();
  }, 1000);
}
