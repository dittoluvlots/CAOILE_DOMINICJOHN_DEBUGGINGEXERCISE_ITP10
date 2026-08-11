const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput"); // changed #name to #nameInput to match the HTML IDs
const typingMessage = document.querySelector("#typingMessage");
const resultMessage = document.querySelector("#resultMessage");
const greetButton = document.querySelector("#greetButton");
const colorButton = document.querySelector("#colorButton");
const resetButton = document.querySelector("#resetButton"); // changed #resetBtn to #resetButton to match the HTML IDs


function displayGreeting() {
  const userName = nameInput.value.trim();
  if (userName === "") { // changed "=" to "===" for strict comparison instead of assignment
    resultMessage.textContent =
      "Please enter your name.";
  } else {
    heading.textContent = "Hello, " + userName;
    resultMessage.textContent =
      "The greeting was displayed successfully.";
  }
}

function showTypedText() {
  typingMessage.textContent =
    "You are typing: " + nameInput.value;
}

function changeBackground() {
  document.body.style.backgroundColor = "lightblue"; // put lightblue inside quotation mark
  console.log("Background color changed.");
}

function resetPage() {
  heading.textContent = "Event-Driven Webpage";
  nameInput.value = "";
  typingMessage.textContent = "You are typing:";
  resultMessage.textContent =
    "Enter your name and select an action.";
  document.body.style.backgroundColor = "#f3f4f6";
}

greetButton.addEventListener("click", displayGreeting); //removed the parenthesis in displaygreeting so the function is referenced instead of execute
colorButton.addEventListener("click", changeBackground); //Changed the invalid event name “clicked” to “click”. 
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypedText); // changed "change" to input so the message updates live while typing
console.log("JavaScript file loaded successfully.");