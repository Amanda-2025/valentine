let foundCount = 0;
const totalItems = 4;

function foundItem(element) {
  element.style.display = "none"; // hide item after found
  foundCount++;
  
  // Random fun messages
  const messages = [
    "You caught my heart! 😏❤️",
    "Found the love! 🍫💘",
    "Cheater! Just kidding 😘",
    "Yay! You're good at finding love 🥰"
  ];

  document.getElementById("gameMessage").innerText = messages[Math.floor(Math.random() * messages.length)];

  if(foundCount === totalItems) {
    setTimeout(() => {
      document.getElementById("gameMessage").innerText = "🎉 You completed the Valentine mission! 🥂❤️";
    }, 500);
  }
}
