<script lang="ts">
  import type { DataType } from 'src/types/data.types';
  import { marked } from 'marked';

  export let data: any;
  //https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
  //let title: string;

  console.log(data);
</script>

<div class="container mx-auto max-w-3xl px-4 pt-12 pb-7">
  <article class="prose">
    <img class="rounded-lg" src={data.post.image.url} alt={data.post.alt_text} />
    <h1 class="title-ch-limit text-4xl font-semibold dark:text-white md:text-5xl xl:text-6xl">
      {data.post.title}
    </h1>
    <!-- <p>{data.post.excerpt}</p> -->
    <!-- <div class="prose">{data.post.main_content.html}</div> -->
    <!-- svelte-ignore missing-declaration -->
    <section class="prose lg:prose-xl">
      {@html marked.parse(data.post.day_story)}
    </section>
    <!-- <article class="prose">
      {@html data.post.extra_rich_text.html}
    </article> -->
  </article>
</div>

<!-- <p>{@html data.post.excerpt}</p>
 this worked also but think it's for mixed html content field-->
<style>
</style>
