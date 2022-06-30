# Svelte Chat App
## 2 HTML markup and Components
Create `src/components` directory

### Chat Component
 `src/components/Chat.svelte` add:
```
<script></script>

<div class="users-container">
  <div class="users">
    <!-- USERS here -->
  </div>
</div>

<div class="chat-container">
  <div class="messages-container">
    <div class="messages">
      <!-- MESSAGES here -->
    </div>
  </div>

  <div class="form-container">
    <form class="form">
      <input
        type="text"
        placeholder="message..."
      />
      <button type="submit">Send</button>
    </form>
  </div>
</div>

<style></style>
```

### Message Component
`src/components/Message.svelte` add:
```
<script></script>

<div class="message-container">
  <div>
    <div class="message">
      Hello there!
    </div>
    <div class="author">
      Author - 16:30
    </div>
  </div>
</div>

<style></style>

```

### NameForm Component
`src/components/NameForm.svelte` add:
```
<script></script>

<div class="form-container">
  <form class="form">
    <input type="text" placeholder="Your name..." />
    <button type="submit">Send</button>
  </form>
</div>

<style></style>
```

### User Component
`src/components/User.svelte` add:
```
<script></script>

<div class="user">
  Name
</div>

<style></style>
```

### Import NameForm component into App
`src/App.svelte` add:

```
<script>
  import NameForm from "./components/NameForm.svelte";
</script>

<main>
  <NameForm />
</main>
```
