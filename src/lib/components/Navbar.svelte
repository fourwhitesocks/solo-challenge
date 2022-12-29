<script>
  import ThemeSelect from '$lib/components/Theme-select.svelte';
</script>

<header
  class="navbar flex-col bg-neutral text-neutral-content shadow-lg selection:rounded-b-lg sm:flex-row"
>
  <div class="mx-2 px-2 lg:navbar-start">
    <span class="text-md font-bold"><a href="/">Amy's Lake Erie Solo Challenge 2022</a> </span>
  </div>
  <div class="navbar-center mx-2 px-2">
    <nav class="flex items-stretch">
      <!--  <a class="btn btn-ghost btn-sm rounded-btn" href={`/`}>Home</a>
        {#each pages as { title, slug }}
          <a class="btn btn-ghost btn-sm rounded-btn" href={`/${slug}`}
            >{title}</a>
        {/each} -->

      <a class="btn-ghost rounded-btn btn-sm btn" href="/">Home</a>
      <a class="btn-ghost rounded-btn btn-sm btn" href="/posts">MY DAYS</a>
    </nav>
  </div>
  <div class="sm:navbar-end">
    <ThemeSelect />
  </div>
</header>
