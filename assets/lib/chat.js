function appendMessage(message) {
  document.getElementById("messages").insertAdjacentHTML('beforeend',
      '<div class="flex justify-start mb-4">\n' +
    '    <div>\n' +
    '        <div\n' +
    '            class="ml-2 py-3 px-4 bg-accent-dark rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white mb-2"\n' +
    '        >' + message +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'
    );
}

window.onload = function () {
  let ws = new WebSocket('ws://0.0.0.0:9501');
  ws.onmessage = function (event) {
    console.log(event.data);
    appendMessage(event.data)
  }
  ws.onopen = function () {
    appendMessage("Connected to WebSocket!");
  }
  ws.onclose = function () {
    appendMessage("Connection closed");
  }
  ws.onerror = function () {
    appendMessage("Error happens");
  }
  let messageInput = document.getElementById('message-input');
  messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      ws.send(document.getElementById("message-input").value);
      messageInput.value = ''
    }
  });
}
