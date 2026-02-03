let foundCount = 0;
const total = 5;

const messages = [
  "You found my heart 😏❤️",
  "Love detected 💘",
  "Okay Sherlock 😘",
  "You’re really good at this 🥰",
  "That one was meant for you 💌"
];

function found(el) {
  el.style.display = "none";
  foundCount++;

  document.getElementById("result").innerText =
    messages[Math.floor(Math.random() * messages.length)];

  if (foundCount === total) {
    setTimeout(() => {
      document.getElementById("result").innerText =
        "🎉 You completed the Valentine mission! Cheers to us 🥂❤️";
    }, 500);
  }
}
