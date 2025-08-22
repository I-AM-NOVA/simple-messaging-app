const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: {
    origin: "*"
  }
});
let clientarray =[]

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  clientarray.push(socket.id)
  socket.on("send_message", (msg) => {
    console.log("Received:", msg);
    io.emit("receive_message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});
console.log("Live at 3000");
