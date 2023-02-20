<script lang="ts">
  import { marked } from 'marked';
  export let data: any;
</script>

<svelte:head>
  <title>{data.post.title} | Amy's Lake Erie Solo Challenge 2022</title>
  <meta
    name="description"
    content="A description of {data.post
      .title} in my 2022 sailing adventure competing in the Lake Erie Solo Challenge"
  />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>

<div class="container mx-auto max-w-3xl px-4 pt-12 pb-7">
  <article class="prose">
    <img class="rounded-lg shadow-lg" src={data.post.image.url} alt={data.post.alt_text} />
    <h1 class="title-ch-limit text-4xl font-semibold md:text-5xl xl:text-6xl">
      {data.post.title}
    </h1>

    <section class="prose-lg prose sm:prose-xl">
      {@html marked.parse(data.post.day_story)}
    </section>
  </article>
</div>

<style>
  img {
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / 0.25);
  }
</style>
