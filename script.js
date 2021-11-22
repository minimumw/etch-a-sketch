"use strict";

// Query Selectors
const canvas = document.querySelector(".canvas");
const resetBtn = document.getElementById("reset-btn");

// Set up canvas (user input and creating divs)
const canvasSetup = function () {
  let blocks = parseInt(prompt("How many squares per side (MAX: 100)"));
  const divInsert = `<div class="canvas-block"></div>`;
  canvas.style.setProperty("--grid-rows", blocks);
  canvas.style.setProperty("--grid-cols", blocks);
  for (let i = 0; i < blocks * blocks; i++) {
    canvas.insertAdjacentHTML("afterbegin", divInsert);
  }
};
canvasSetup();

// Reset function; calls canvas setup and block listener to get app back to usable state
const clearCanvas = function () {
  canvas.innerHTML = "";
  canvasSetup();
  blockListener();
};

const blockListener = function () {
  document.querySelectorAll(".canvas-block").forEach((el) => {
    el.addEventListener("mouseenter", function () {
      el.style.backgroundColor = "black";
    });
  });
};
blockListener();

// Event Listeners
resetBtn.addEventListener("click", clearCanvas);
