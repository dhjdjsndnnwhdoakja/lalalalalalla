const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const restartButton = document.getElementById('restartButton');

let noCount = 0;
const aggressiveMessages = [
  "Are you deadass??????",
  "ARE YOU DEADASS?????????",
  "ARE YOU DEADASS??????",
  "SERIOUSLY??????",
  "I CAN'T BELIEVE THIS!!!!",
  "FINE, I'LL ASK AGAIN!!!!",
];

noButton.addEventListener('click', () => {
  if (noCount < aggressiveMessages.length - 1) {
    noCount++;
  }
  noButton.textContent = aggressiveMessages[noCount];
});

yesButton.addEventListener('click', () => {
  alert("YAY! I'm so happy! 😊");
  restartButton.classList.remove('hidden');
});

restartButton.addEventListener('click', () => {
  noCount = 0;
  noButton.textContent = "No";
  restartButton.classList.add('hidden');
});