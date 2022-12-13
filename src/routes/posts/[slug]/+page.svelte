<script lang="ts">
  import type { DataType } from 'src/types/data.types';
  import { marked } from 'marked';
  //export let data: DataType[];
  //export let datatype: DataType[];
  export let data: data.ALL;
  //https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
  //let title: string;

  console.log(data);
</script>

<div class="container mx-auto max-w-xl px-4">
  <img class="pb-4" src={data.post.image.url} alt="im alt text" />
  <h1 class="title-ch-limit text-4xl font-semibold dark:text-white md:text-5xl xl:text-6xl">
    {data.post.title}
  </h1>
  <!-- <p>{data.post.excerpt}</p> -->
  <!-- <div class="prose">{data.post.main_content.html}</div> -->
  <!-- svelte-ignore missing-declaration -->
  <article class="prose prose-lg">{@html marked.parse(data.post.day_story)}</article>
  <article class="prose">
    {@html data.post.extra_rich_text.html}
  </article>
</div>

<!-- <p>{@html data.post.excerpt}</p>
 this worked also but think it's for mixed html content field-->
<style>
</style>
