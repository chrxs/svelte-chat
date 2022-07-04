import { writable, derived } from "svelte/store";
import uniqid from "uniqid";

const WEBSOCKET_URL = null;
// const WEBSOCKET_URL = "ws://6.tcp.eu.ngrok.io:10609";

export const users = writable([]);
export const messages = writable([]);

export const uid = uniqid();

const socket = new WebSocket(
  `${WEBSOCKET_URL || "ws://localhost:1337"}?uid=${uid}`
);

// Connection opened
socket.addEventListener("open", function (_event) {
  console.log("It's open");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  if (!event.data) {
    return;
  }

  const { type, data } = JSON.parse(event.data);

  switch (type) {
    case "users":
      users.set(data.map((user) => ({ ...user, isYou: user.uid === uid })));
      break;

    case "user":
      users.update((users) =>
        [...users, data].map((user) => ({ ...user, isYou: user.uid === uid }))
      );
      break;

    case "messages":
      messages.set(
        data.map((message) => ({ ...message, isYou: message.authorId === uid }))
      );
      break;

    case "message":
      messages.update((messages) =>
        [...messages, data].map((message) => ({
          ...message,
          isYou: message.authorId === uid,
        }))
      );
  }
});

export const sendMessage = (message) => {
  if (socket.readyState <= 1) {
    socket.send(message);
  }
};

export const nameSubmitted = derived(users, ($users) =>
  Boolean($users.find((user) => user.uid === uid))
);
