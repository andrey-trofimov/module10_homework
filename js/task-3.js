/* Task 3

1. Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:

2. Добавить в чат механизм отправки гео-локации:
При клике на кнопку «Гео-локация» необходимо отправить данные серверу 
и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. 
Сообщение, которое отправит обратно эхо-сервер, не выводить.
*/

document.addEventListener("DOMContentLoaded", task3);

function task3() {
  const textarea = document.querySelector(".chat__input");
  const btnSend = document.querySelector("#send");
  const btnGeo = document.querySelector("#geo");
  const exchangeDiv = document.querySelector(".chat-exchange");

  let websocket;
  const wsUrl = "wss://echo-ws-service.herokuapp.com";
  websocket = new WebSocket(wsUrl);

  const writeToChat = (message, style) => {
    let div = document.createElement("div");
    div.className = style;
    div.innerHTML = message;
    exchangeDiv.prepend(div);
  };

  const sendToServer = (message) => websocket.send(message);

  const sendMessage = () => {
    writeToChat(textarea.value, "chat-exchange__own");
    sendToServer(textarea.value);
    websocket.onmessage = (evt) => writeToChat(evt.data, "chat-exchange__answer");
    textarea.value = "";
  };

  const success = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let message = `
    <a href="https://www.openstreetmap.org/#map=17/${lat}/${lon}">Смотреть на карте</a><br>
    `;

    writeToChat(message, "chat-exchange__own");
    sendToServer(`${lat} ${lon}`);
    websocket.onmessage = (evt) => {};
  };

  const error = () => writeToChat("Гео-позиция не определена", "chat-exchange__own");

  const getGeo = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      writeToChat("Гео-локация не поддерживается", "chat-exchange__own");
    }
  };

  btnSend.addEventListener("click", sendMessage);
  btnGeo.addEventListener("click", getGeo);
}
