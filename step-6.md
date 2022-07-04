# Svelte Chat App

## 6 Make inputs auto focus

## NameForm component
`src/components/NameForm.svelte`

```
<script>
  import { onMount } from "svelte"; // (1)

  export let sendName;

  let name = "";

  const handleSubmit = () => {
    sendName(name);
  };

  let elm; // (2)

  onMount(() => { // (3)
    elm.focus();
  });
</script>

<div class="form-container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <input
      type="text"
      bind:value={name}
      bind:this={elm} // (4)
      placeholder="Your name..."
    />
    <button type="submit" disabled={name.length === 0}>Send</button>
  </form>
</div>
```

## Chat component
`src/components/Chat.svelte`
```
<script>
  import { onMount } from "svelte"; // (1)

  import User from "./User.svelte";
  import Message from "./Message.svelte";

  export let messages = [];
  export let users = [];
  export let sendMessage;

  let message = "";
  let inputEl; // (2)

  onMount(() => { // (3)
    inputEl.focus();
  });

  function handleSubmit() {
    if (message.length > 0) {
      sendMessage(message);
      message = "";
    }
  }
</script>

<div class="users-container">
  <div class="users">
    {#each users as { uid, ...user }}
      <User {...user} />
    {/each}
  </div>
</div>

<div class="chat-container">
  <div class="messages-container">
    <div class="messages">
      {#each messages as { author, text, time, isYou }, i}
        <Message {author} {text} {time} {isYou} />
      {/each}
    </div>
  </div>

  <div class="form-container">
    <form class="form" on:submit|preventDefault={handleSubmit}>
      <input
        type="text"
        bind:value={message}
        bind:this={inputEl} // (4)
        placeholder="message..."
      />
      <button type="submit" disabled={message.length === 0}>Send</button>
    </form>
  </div>
</div>
```
