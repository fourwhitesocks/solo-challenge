<script>
  export let title = 'My Longest Sail';
</script>

<h1
  class="title-ch-limit text-center text-4xl font-semibold dark:text-white md:text-5xl lg:text-left xl:text-6xl"
>
  {title}
</h1>

<style>
  @media (min-width: 1024px) {
    .title-ch-limit {
      max-width: 8ch;
    }
  }
</style>
