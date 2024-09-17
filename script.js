// Conectar ao WebSocket
var ws = new WebSocket("ws://192.168.0.200:81/");

// Seleciona o elemento de status
var statusElement = document.getElementById("status");

// Quando a conexão for estabelecida
ws.onopen = function() {
  statusElement.innerText = "Conectado";
  statusElement.classList.remove("disconnected");
  statusElement.classList.add("connected");
};

// Quando a conexão for encerrada
ws.onclose = function() {
  statusElement.innerText = "Desconectado";
  statusElement.classList.remove("connected");
  statusElement.classList.add("disconnected");
};

// Quando receber dados do servidor
ws.onmessage = function(event) {
  var sensorValues = event.data.split(",");
  document.getElementById("sensor1").innerText = "Sensor 1: " + sensorValues[0];
  document.getElementById("sensor2").innerText = "Sensor 2: " + sensorValues[1];
  document.getElementById("sensor3").innerText = "Sensor 3: " + sensorValues[2];
  document.getElementById("sensor4").innerText = "Sensor 4: " + sensorValues[3];
  document.getElementById("sensor5").innerText = "Sensor 5: " + sensorValues[4];
};

// Se houver erro
ws.onerror = function(error) {
  console.log("Erro de WebSocket: ", error);
};
