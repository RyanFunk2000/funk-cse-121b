// calculator.js
import Director from './functions.js';

// Triggers when submit button is entered.
function main() {
  const outputs = Director();
  renderOutputs(outputs);
}

// Listen for when submit button is entered.
document.querySelector("#submitInput").addEventListener("click", main);

// Render outputs to browser.
function renderOutputs(outputs) {
  // get the list element from the DOM
  const resultElement = document.querySelector("#results");
  // make sure it is empty
  resultElement.innerHTML = "";
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
  resultElement.innerHTML += `
    <p>At 00:00:00, time bonus starts at <b>${outputs.maxTimeBonus}</b> points.</p>
    <p>The rate at which time bonus subtracts is <b>${outputs.scoreRate}</b> points per second.</p>
    <p>The player has this amount of time to beat the stage before there is no time bonus remaining:
       <b>${outputs.timeLimit[0]}</b> or <b>${outputs.timeLimit[1]} seconds</b>.</p>`;
}