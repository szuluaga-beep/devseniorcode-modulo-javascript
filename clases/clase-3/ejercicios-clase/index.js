const container = document.getElementById("container");

for (let i = -100; i <= 100; i++) {
  const square = document.createElement("div");

  if (i % 2 === 0) {
    square.classList.add("square-even");
    square.textContent = `🤝 + ${i}`;
  } else {
    square.textContent = `🫂 + ${i}`;
    square.classList.add("square-odd");
  }

  container.appendChild(square);
}
