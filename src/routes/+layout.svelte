<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import '../app.css';

  try {
    if (typeof window !== 'undefined' && window) {
      const googleAnalyticsId = 'G-31QPTK36FD';
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);
    }
  } catch (error) {
    console.error('Failed to initialize Analytics');
  }

  onMount(async () => {
    themeChange(false);
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js"></script>
</svelte:head>

<div id="scroll-to-here" />
<Navbar />

<main class="">
  <slot />
</main>

<Footer />
