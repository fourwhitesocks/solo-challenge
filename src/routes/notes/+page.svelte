<h1>I'm a note</h1>
<!-- data sveltekit prefecth will prerender the fetch when user hovers over nav with mouse -->
<nav>
  <a href="/">Home</a>
  <a href="/posts" data-sveltekit-prefetch>Posts</a>
  <a href="/notes" data-sveltekit-prefetch>Notes</a>
</nav>

<picture>
  <img
    sizes="(max-width: 1400px) 100vw, 1400px"
    srcset="
  start-line-no-kite-op_yyxdi7_c_scale,w_200.webp 200w,
  start-line-no-kite-op_yyxdi7_c_scale,w_535.webp 535w,
  start-line-no-kite-op_yyxdi7_c_scale,w_973.webp 973w,
  start-line-no-kite-op_yyxdi7_c_scale,w_1003.webp 1003w,
  start-line-no-kite-op_yyxdi7_c_scale,w_1358.webp 1358w,
  start-line-no-kite-op_yyxdi7_c_scale,w_1400.webp 1400w"
    src="start-line-no-kite-op_yyxdi7_c_scale,w_1400.webp"
    alt=""
  />
</picture>

<style>
  nav {
    display: flex;
  }
  nav a {
    margin-right: 1rem;
  }

  h2,
  h3 {
    --flow-spacer: 1.5em;
  }

  .flow > * + * {
    margin-top: var(--flow-spacer, 0.75em);
  }
</style>
