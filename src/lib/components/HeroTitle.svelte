<script>
  import Title from '$lib/components/Title.svelte';
</script>

<div class="title-ch-limit">
  <Title />
</div>

<style>
  @media (min-width: 1024px) {
    .title-ch-limit {
      --ch-limit: 8ch;
      max-width: var(--ch-limit);
    }
  }
</style>
