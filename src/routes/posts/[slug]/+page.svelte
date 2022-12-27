<script lang="ts">
  import { marked } from 'marked';
  export let data: any;
</script>

<div class="container mx-auto max-w-3xl px-4 pt-12 pb-7">
  <article class="prose">
    <img class="rounded-lg shadow-lg" src={data.post.image.url} alt={data.post.alt_text} />
    <h1 class="title-ch-limit text-4xl font-semibold dark:text-white md:text-5xl xl:text-6xl">
      {data.post.title}
    </h1>

    <section class="prose lg:prose-xl">
      {@html marked.parse(data.post.day_story)}
    </section>
  </article>
</div>

<style>
  img {
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / 0.25);
  }
</style>
