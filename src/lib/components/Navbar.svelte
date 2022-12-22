<script>
  import ThemeSelect from '$lib/components/Theme-select.svelte';
</script>

<header class="navbar rounded-b-lg bg-neutral text-neutral-content shadow-lg">
  <div class="navbar-start mx-2 px-2">
    <span class="text-lg font-bold"><a href="/">Solo Challenge 2022</a> </span>
  </div>
  <div class="navbar-center mx-2 px-2">
    <nav class="flex items-stretch">
      <!--  <a class="btn btn-ghost btn-sm rounded-btn" href={`/`}>Home</a>
        {#each pages as { title, slug }}
          <a class="btn btn-ghost btn-sm rounded-btn" href={`/${slug}`}
            >{title}</a>
        {/each} -->

      <a class="btn btn-ghost btn-sm rounded-btn" href="/">Home</a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">MY DAYS</a>
    </nav>
  </div>
  <div class="navbar-end">
    <ThemeSelect />
  </div>
</header>
