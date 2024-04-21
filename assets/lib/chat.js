function appendMessage(data) {
  console.log(data);
  document.getElementById("messages").insertAdjacentHTML('beforeend',
      '<div class="flex justify-start mb-4">\n' +
    '    <div>\n' +
    '        <div class="ml-3 px-1">' + data.from + '<span style="font-size: 0.65rem"> at ' + data.time + ' </span></div>\n' +
    '        <div\n' +
    '            class="ml-2 py-3 px-4 bg-accent-dark rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white mb-2"\n' +
    '        >' + data.message +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'
    );
}

function appendInformation(message) {
  document.getElementById("messages").insertAdjacentHTML('beforeend',
    '<div class="flex justify-start mb-4">\n' +
    '    <div>\n' +
    '        <div class="ml-3 px-1">Server</div>\n' +
    '        <div\n' +
    '            class="ml-2 py-3 px-4 bg-accent-dark rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white mb-2"\n' +
    '        >' + message +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'
  );
}

function updateScroll(){
  let element = document.getElementById("main-messages-container");
  element.scrollTop = element.scrollHeight;
}

window.onload = function () {
  let userBadge = document.getElementById('user-badge');
  let ws = new WebSocket('ws://0.0.0.0:9501?username=' + userBadge.dataset.username);
  ws.onmessage = function (event) {
    appendMessage(JSON.parse(event.data));
    updateScroll();
  }
  ws.onopen = function () {
    // appendInformation("Connected to WebSocket!");
  }
  ws.onclose = function () {
    appendInformation("Connection closed");
  }
  ws.onerror = function () {
    appendInformation("Error happens");
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
