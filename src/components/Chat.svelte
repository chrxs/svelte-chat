<script>
  import { onMount, afterUpdate } from "svelte";

  import User from "./User.svelte";
  import Message from "./Message.svelte";

  export let messages = [];
  export let users = [];
  export let sendMessage;

  let message = "";
  let inputEl;
  let messagesEl;
  let prevMessageCount = messages.length;

  onMount(() => {
    messagesEl.scrollTo(0, messagesEl.scrollHeight);
    inputEl.focus();
  });

  afterUpdate(() => {
    if (messages.length !== prevMessageCount) {
      messagesEl.scrollTo({
        left: 0,
        top: messagesEl.scrollHeight,
        behavior: "smooth",
      });
    }

    prevMessageCount = messages.length;
  });

  function handleSubmit() {
    if (message.length > 0) {
      sendMessage(message);
      message = "";
    }
  }
</script>

<svelte:head>
  <title>{`Chat (${messages.length})`}</title>
</svelte:head>

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
    bind:this={messagesEl}
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

<style>
  .users-container {
    flex: 0;
    padding: 10px;
    display: flex;
  }
  .users {
    background: #fff;
    padding: 20px;
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  .messages-container {
    flex: 1;
    overflow: auto;
  }

  .messages {
    padding: 20px;
  }

  .form-container {
    flex: 0;
    padding: 0 10px 10px;
  }

  .form {
    padding: 20px;
    background: #fff;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .form input {
    flex: 1;
    padding: 10px;
    font-family: inherit;
    font-size: 18px;
  }

  .form button {
    border: none;
    background: rgb(150, 72, 235);
    cursor: pointer;
    color: white;
    padding: 0 20px;
    font-family: inherit;
    font-size: 18px;
    transition: all 0.15s ease-out;
  }

  .form button[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }
</style>
