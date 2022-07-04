# Svelte Chat App

## 4 Create Store
`src/store.js`:

```
import { writable } from "svelte/store";
import uniqid from "uniqid";

const WEBSOCKET_URL = null;
// const WEBSOCKET_URL = "ws://6.tcp.eu.ngrok.io:10609"; // from Chris

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

export const sendMessage = (message) => {
  if (socket.readyState <= 1) {
    socket.send(message);
  }
};
```

Import store into App component:
`src/App.svelte`:
```
<script>
  import "./store.js"; // <----- import
  import NameForm from "./components/NameForm.svelte";
</script>
```

in Dev console you should see "It's open".
