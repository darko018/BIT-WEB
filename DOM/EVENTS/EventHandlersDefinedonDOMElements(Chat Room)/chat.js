var messageElement = document.querySelector('#message');
var textAreaElement = document.querySelector('.chat-area');
var sendButton = document.querySelector('#button');


function appendMessage() {
  // if input text box is empty, exit the function
  if (messageElement.value === '') {
    return;
  }
  
  // create new message bubble
  var newMessage = messageBubble(messageElement.value, );

  // add newMessage to chat area (textAreaElement)
  textAreaElement.appendChild(newMessage);

  // reset input text box
  messageElement.value = '';
}



function messageBubble(message, time) {

  // create outter div
  var messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');

  // create text-container
  var textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  

  // create new p tag with our message
  // textContainer.innerHTML = '<p class="message-text">' + message + '</p>';
  var messageParagraph = document.createElement('p');
  messageParagraph.classList.add('message-text');
  messageParagraph.textContent = message;

 

  // add messageParagraph to textContainer
  textContainer.appendChild(messageParagraph);

 

  // add textContainer and timeContainer to messageContainer
  messageContainer.appendChild(textContainer);
 


  return messageContainer;
}


// add click event on send button element
sendButton.onclick = appendMessage;

// add on key down event on input text box
messageElement.onkeydown = function (event) {
  if (event.code === 'Enter') {
    appendMessage()
  }
};


