"use strict";

// Query Selectors
const canvas = document.querySelector(".canvas");
const button = document.querySelector("#reset-btn");

// Set up canvas (user input and creating divs)
const canvasSetup = function () {
  let divs = parseInt(prompt("How many squares per side (MAX: 100)"));
  const div = `<div class="canvas-block"></div>`;
  for (let i = 0; i < divs * divs; i++) {
    canvas.insertAdjacentHTML("afterbegin", div);
  }
};

canvasSetup();
