//your JS code here. If required.
// Function to simulate delay using setTimeout wrapped in a Promise
async function displayMessage() {
  // Retrieve the values from the text and delay inputs
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  // Check if the inputs are valid
  if (text === '' || isNaN(delay) || delay <= 0) {
    alert("Please enter both text and a valid delay time.");
    return;
  }

  // Function to delay the message display using a Promise
  const delayMessage = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Wait for the specified delay
  await delayMessage(delay);

  // Display the message in the output div after the delay
  document.getElementById('output').innerText = text;
}

// Add an event listener for the button click
document.getElementById('btn').addEventListener('click', displayMessage);
