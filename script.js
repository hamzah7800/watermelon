let score = 0;
let clickPower = 1;
let autoClickers = 0;
let cps = 10;
let multiplier = 1;
let autoIntervals = [];

const melon = document.getElementById("melon");
const scoreDisplay = document.getElementById("score");
const autoCountDisplay = document.getElementById("autoCount");
const clickPowerDisplay = document.getElementById("clickPower");
const cpsDisplay = document.getElementById("cps");
const multiplierDisplay = document.getElementById("multiplier");

function updateUI() {
  scoreDisplay.textContent = `Watermelons: ${Math.floor(score)}`;
  autoCountDisplay.textContent = autoClickers;
  clickPowerDisplay.textContent = clickPower;
  cpsDisplay.textContent = cps;
  multiplierDisplay.textContent = `${multiplier}x`;
}

melon.addEventListener("click", () => {
  score += clickPower * multiplier;
  updateUI();
});

function buy(item) {
  if (item === "auto" && score >= 100) {
    score -= 100;
    autoClickers++;
    const interval = setInterval(() => {
      score += cps * multiplier;
      updateUI();
    }, 1000);
    autoIntervals.push(interval);
  } else if (item === "cps" && score >= 200) {
    score -= 200;
    cps += 10;
  } else if (item === "gold" && score >= 500) {
    score -= 500;
    multiplier *= 2;
  } else if (item === "click" && score >= 150) {
    score -= 150;
    clickPower += 1;
  }
  updateUI();
}

document.getElementById("codeButton").addEventListener("click", () => {
  const code = prompt("Enter your bonus code:");
  if (code === "superspeed") {
    const interval = setInterval(() => {
      score += 1 * multiplier;
      updateUI();
    }, 0.2);
    autoIntervals.push(interval);
    alert("✅ Ultra Auto Clicker Unlocked!");
  } else if (code === "2xcps") {
    multiplier *= 2;
    alert("✅ 2x Multiplier Activated!");
    updateUI();
  } else {
    alert("❌ Invalid code.");
  }
});

updateUI();
