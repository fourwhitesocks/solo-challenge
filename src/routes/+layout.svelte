<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import '../app.css';

  onMount(async () => {
    themeChange(false);
  });
</script>

<Navbar />

<main class="">
  <slot />
</main>
