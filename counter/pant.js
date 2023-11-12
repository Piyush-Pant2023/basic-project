// Get the HTML elements
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countElement = document.getElementById("count");

// Initial count value
let count = 0;

// Update the count display
function updateCount() {
  countElement.textContent = count;
}

// Event listeners for the buttons
decrementButton.addEventListener("click", () => {
  count--;
  updateCount();
});

incrementButton.addEventListener("click", () => {
  count++;
  updateCount();
});

// Initialize the count display
updateCount();
