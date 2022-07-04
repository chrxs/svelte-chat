# Svelte Chat App

## 3 Add CSS

### App component
`src/App.svelte` add:
```
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
```

### Chat component
`src/components/Chat.svelte` add:
```
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
```

### Message component
`src/components/Message.svelte` add:
```
<style>
  .message-container {
    display: flex;
    padding: 10px 0;
  }

  .message {
    background: #fff;
    color: #000;
    padding: 10px 20px;
    border-radius: 8px;
  }

  .author {
    color: #fff;
    font-size: 12px;
    margin-top: 10px;
  }
</style>
```

### NameForm component
`src/components/NameForm.svelte` add:
```
<style>
  .form-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .form {
    display: flex;
    flex-direction: row;
    font-size: 22px;
    gap: 20px;
  }

  .form input {
    background: none;
    border: none;
    border-bottom: solid 2px #fff;
    color: #fff;
    font-family: inherit;
    font-size: inherit;
    padding: 10px 0;
    transition: all 0.15s ease;
  }

  .form input:focus {
    outline: none;
    border-color: rgb(150, 72, 235);
  }

  .form button {
    border: none;
    background: rgb(150, 72, 235);
    cursor: pointer;
    color: white;
    padding: 10px 20px;
    font-family: inherit;
    font-size: inherit;
    transition: all 0.15s ease-out;
  }

  .form button[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }
</style>
```

### User component
`src/components/User.svelte` add:

```
<style>
  .user {
    border-radius: 1000px;
    padding: 5px 10px;
    color: #fff;
  }
</style>
```
