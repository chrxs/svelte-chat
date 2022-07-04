<script></script>

<div class="form-container">
  <form class="form">
    <input type="text" placeholder="Your name..." />
    <button type="submit">Send</button>
  </form>
</div>

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
