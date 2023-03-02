<script lang="ts">
  export let dayone: string;
  export let daytwo: string;
  export let daythree: string;
  export let dayfour: string;
  export let dayfive: string;
  export let daysix: string;
  export let conclusion: string;
</script>

<!-- <div class="flex gap-6"> -->
<div class="flex pb-4">
  <a
    class="pr-4 underline decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={dayone}>Start</a
  >
  <a
    class="pr-4 underline decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={daytwo}>2</a
  >
  <a
    class="pr-4 underline decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={daythree}>3</a
  >
  <a
    class="underine pr-4 decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={dayfour}>4</a
  >
  <a
    class="pr-4 underline decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={dayfive}>5</a
  >

  <a
    class="pr-4 underline decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={daysix}>6</a
  >
  <a
    class=" underline decoration-1 hover:underline-offset-8 sm:text-xl md:text-2xl"
    href={conclusion}>Conclusion</a
  >
</div>

<style>
  /* Active links */
  a:active,
  a:focus {
    color: red;
  }
</style>
