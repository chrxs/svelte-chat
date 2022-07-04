## 5 Connect components to Store and make it all work

### Store.js
In `src/strore.js`:

Add web socket event listener:
```
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
```

Also to `src/store.js` import `"derived"`:
`import { writable, derived } from "svelte/store";`

and add exported function:
```
export const nameSubmitted = derived(users, ($users) =>
  Boolean($users.find((user) => user.uid === uid))
);
```

### NameForm component
`src/components/NameForm.svelte`
```
<script>
  export let sendName;

  let name = "";

  const handleSubmit = () => {
    sendName(name);
  };
</script>
```

```
<div class="form-container">
  <form
    class="form"
    on:submit|preventDefault={handleSubmit} // (1)
  >
    <input
      type="text"
      bind:value={name} // (2)
      placeholder="Your name..."
    />
    <button type="submit" disabled={name.length === 0}>Send</button>
  </form>
</div>
```

### User component
`src/components/User.svelte`
```
<script>
  export let name;
  export let color = "black";
  export let isYou = false;
</script>

<div class="user" style:background={color}>
  {name}
  {#if isYou}
    (you)
  {/if}
</div>
```

### Message Component
`src/components/Message.svelte`
```
<script>
  import { format } from "date-fns";

  export let text;
  export let author;
  export let time;
  export let isYou = false;
</script>

<div
  class="message-container"
  style:flex-direction={isYou ? "row" : "row-reverse"}
  style:text-align={isYou ? "left" : "right"}
  style:padding-right={isYou ? "100px" : "0"}
  style:padding-left={isYou ? "0" : "100px"}
>
  <div>
    <div
      class="message"
      style:border-bottom-right-radius={isYou ? "8px" : "2px"}
      style:border-bottom-left-radius={isYou ? "2px" : "8px"}
    >
      {text}
    </div>
    <div
      class="author"
    >
      {author} - {format(new Date(time), "HH:mm")}
    </div>
  </div>
</div>
```

### Chat component
`src/components/Chat.svelte`
```
<script>
  import User from "./User.svelte";
  import Message from "./Message.svelte";

  export let messages = [];
  export let users = [];
  export let sendMessage;

  let message = "";

  function handleSubmit() {
    if (message.length > 0) {
      sendMessage(message);
      message = "";
    }
  }
</script>
```
```
<div class="users">
  {#each users as { uid, ...user }}
    <User {...user} />
  {/each}
</div>
```
```
<div class="messages">
  {#each messages as { author, text, time, isYou }, i}
    <Message {author} {text} {time} {isYou} />
  {/each}
 </div>
```
```
<form class="form" on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    bind:value={message}
    placeholder="message..."
  />
  <button type="submit" disabled={message.length === 0}>Send</button>
</form>
```

### App component
In `src/App.svelte` :
import:
```
<script>
  import { users, messages, nameSubmitted, sendMessage } from "./store.js";
  import NameForm from "./components/NameForm.svelte";
  import Chat from "./components/Chat.svelte";
</script>
```

```
<main>
  {#if !$nameSubmitted}
    <NameForm sendName={sendMessage} />
  {:else}
    <Chat messages={$messages} users={$users} {sendMessage} />
  {/if}
</main>
```

### Should now work!
