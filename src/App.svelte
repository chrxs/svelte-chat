<script>
  import { users, messages, nameSubmitted, sendMessage } from "./store.js";
  import NameForm from "./components/NameForm.svelte";
  import Chat from "./components/Chat.svelte";
</script>

<main>
  {#if !$nameSubmitted}
    <NameForm sendName={sendMessage} />
  {:else}
    <Chat messages={$messages} users={$users} {sendMessage} />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 18px;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    border: none;
    background: #222;
  }

  main {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
</style>
