// components/src/service/socketService.ts
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:3000"; // can i automate this?
let socket: Socket | null = null;
let userID: string | null = null; // lowercase 'string'
// : Socket | null: Type annotation (TypeScript).
// Socket: The variable can hold an instance of the Socket type (probably from a library like socket.io-client).
// | null: Tjhe variable can also be null, representing no active connection.
// = null: The variable is initialized to null, meaning there is no socket connection at the star
 
export const initSocket = () => {
  if (!socket) {
    socket = io(SERVER_URL, { transports: ["websocket"] });
    socket.on("connect", () => {
    console.log(" Connected baby lets go Mr/Mrs:", socket?.id);
    userID = socket?.id;
    console.log("Contact is :", userID);
    });
    
    socket.on("disconnect", () => console.log(" Disconnected"));
  }
};
export const getUserID = () => userID;


export const sendMessage = (msg: string) => {
  socket?.emit("send_message", msg);
};

export const onMessageReceived = (callback: (msg: string) => void) => {
  socket?.on("receive_message", callback);
};

// okay, i want to add updates from the ever i can clearly see the socket.id, user id is it possible for me to use this to add personalized features in the main code 
// like a message from one end has a particular color features like that by maybe clling the socket ,id