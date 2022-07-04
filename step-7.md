# Svelte Chat App

## 7 Make messages auto scroll to bottom

## Chat component
`src/components/Chat.svelte`
```
<script>
  import { onMount, afterUpdate } from "svelte"; // (1)

  import User from "./User.svelte";
  import Message from "./Message.svelte";

  export let messages = [];
  export let users = [];
  export let sendMessage;

  let message = "";
  let inputEl;
  let messagesEl; // (2)
  let prevMessageCount = messages.length; // (3)

  onMount(() => {
    messagesEl.scrollTo(0, messagesEl.scrollHeight); // (4)
    inputEl.focus();
  });

  afterUpdate(() => { // (5)
    if (messages.length !== prevMessageCount) {
      messagesEl.scrollTo({
        left: 0,
        top: messagesEl.scrollHeight,
        behavior: "smooth",
      });
    }

    prevMessageCount = messages.length; // (6)
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
  <div
    class="messages-container"
    bind:this={messagesEl} // (7)
  >
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
        bind:this={inputEl}
        placeholder="message..."
      />
      <button type="submit" disabled={message.length === 0}>Send</button>
    </form>
  </div>
</div>
```
