<script>
  import NameForm from "./components/NameForm.svelte";
</script>

<main>
  <NameForm />
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
