// Process user input and check if the number is odd or even
function processInput() {
    const userInput = document.getElementById("userInput").value;
    const result = document.getElementById("result");
    
    if (userInput === "") {
      result.textContent = "Please enter a number.";
      return;
    }
  
    const number = parseInt(userInput, 10);
  
    if (number % 2 === 0) {
      result.textContent = `The number ${number} is even.`;
    } else {
      result.textContent = `The number ${number} is odd.`;
    }
  }
  
  // Display numbers from 1 to 10 using a loop
  function displayNumbers() {
    const numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; // Clear previous content
  
    for (let i = 1; i <= 10; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = i;
      numberList.appendChild(listItem);
    }
  }
