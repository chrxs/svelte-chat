# Svelte Chat App

## 9 Animate message in
`src/components/Message.svelte`
```
<script>
  import { scale, fade } from "svelte/transition"; // (1)
  import { elasticOut } from "svelte/easing"; // (2)
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
      transition:scale|local={{ // (3)
        duration: 500,
        delay: 200,
        opacity: 0,
        start: 0.5,
        easing: elasticOut,
      }}
    >
      {text}
    </div>
    <div
      class="author"
      transition:fade|local={{ // (4)
        duration: 200,
        delay: 300,
      }}
    >
      {author} - {format(new Date(time), "HH:mm")}
    </div>
  </div>
</div>
```
