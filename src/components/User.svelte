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

<style>
  .user {
    border-radius: 1000px;
    padding: 5px 10px;
    color: #fff;
  }
</style>
