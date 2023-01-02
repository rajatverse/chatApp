// Chat App JavaScript
// Get references to the necessary elements
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const chatForm = document.getElementById('chat-form');

// Add event listener for the chat form submission
chatForm.addEventListener('submit', (event) => {
  // Prevent the form from actually submitting
  event.preventDefault();

  // Get the message from the input field
  const message = messageInput.value;

  // Clear the input field
  messageInput.value = '';

  // Create a new element to hold the message
  const messageElement = document.createElement('div');
  messageElement.textContent = message;

  // Add the message element to the chat messages
  chatMessages.appendChild(messageElement);

  // Scroll the chat messages to the bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
