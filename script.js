const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "Yay! You just made me the happiest person alive! 💍❤️";
});

noBtn.addEventListener("mouseover", () => {
  // Button runs away when hovered
  const x = Math.random() * window.innerWidth * 0.6;
  const y = Math.random() * window.innerHeight * 0.6;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
