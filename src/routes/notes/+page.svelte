<h1>I'm a note</h1>
<!-- data sveltekit prefecth will prerender the fetch when user hovers over nav with mouse -->
<nav>
  <a href="/">Home</a>
  <a href="/posts" data-sveltekit-prefetch>Posts</a>
  <a href="/notes" data-sveltekit-prefetch>Notes</a>
</nav>

<style>
  nav {
    display: flex;
  }
  nav a {
    margin-right: 1rem;
  }
</style>
