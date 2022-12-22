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

<div class="container mx-auto max-w-3xl px-4 pt-12 pb-7">
  <article class="prose">
    <img class="" src={data.post.image.url} alt={data.post.alt_text} />
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
  blockquote {
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding-left: 1.0666667em;
    font-weight: 500;
    font-style: italic;
    color: var(--tw-prose-quotes);
    border-left-width: 0.25rem;
    border-left-color: var(--tw-prose-quote-borders);
    quotes: '\201C''\201D''\2018''\2019';
  }
</style>
