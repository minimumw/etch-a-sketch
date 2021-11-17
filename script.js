"use strict";

// Query Selectors
const canvas = document.querySelector(".canvas");
const button = document.querySelector("#reset-btn");
const canvasBlocks = document.querySelector(".canvas-block");

// Set up canvas (user input and creating divs)
const canvasSetup = function () {
  let divs = parseInt(prompt("How many squares per side (MAX: 100)"));
  const divInsert = `<div class="canvas-block"></div>`;
  canvas.style.setProperty("--grid-rows", divs);
  canvas.style.setProperty("--grid-cols", divs);
  for (let i = 0; i < divs * divs; i++) {
    canvas.insertAdjacentHTML("afterbegin", divInsert);
  }
};

canvasSetup();
