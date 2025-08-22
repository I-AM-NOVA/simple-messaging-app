const io = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
  socket.emit("send_message", "Hello from test client!");
});

socket.on("receive_message", (msg) => {
  console.log("Message from server:", msg);
});

console.log("Client")