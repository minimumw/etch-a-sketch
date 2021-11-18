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

const clearCanvas = function () {
  canvas.innerHTML = "";
  canvasSetup();
  blockListener();
};

// canvas.addEventListener("mouseenter", function (e) {
//   if (e.target.classList.contains("canvas-block")) console.log("hi");
// });

const blockListener = function () {
  document.querySelectorAll(".canvas-block").forEach((el) => {
    el.addEventListener("mouseenter", function () {
      el.style.backgroundColor = "black";
    });
  });
};
blockListener();

resetBtn.addEventListener("click", clearCanvas);
