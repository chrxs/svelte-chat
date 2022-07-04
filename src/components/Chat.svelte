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
