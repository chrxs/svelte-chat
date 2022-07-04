<script>
  import { format } from "date-fns";

  export let text;
  export let author;
  export let time;
  export let isYou = false;
</script>

<div
  class="message-container"
  style:flex-direction={isYou ? "row" : "row-reverse"}
  style:text-align={isYou ? "left" : "right"}
  style:padding-right={isYou ? "100px" : "0"}
  style:padding-left={isYou ? "0" : "100px"}
>
  <div>
    <div
      class="message"
      style:border-bottom-right-radius={isYou ? "8px" : "2px"}
      style:border-bottom-left-radius={isYou ? "2px" : "8px"}
    >
      {text}
    </div>
    <div
      class="author"
    >
      {author} - {format(new Date(time), "HH:mm")}
    </div>
  </div>
</div>

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
