<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import '../app.css';

  onMount(async () => {
    themeChange(false);
  });
</script>

<div id="scroll-to-here" />
<Navbar />

<main class="py-9 md:py-12">
  <slot />
</main>

<Footer />
