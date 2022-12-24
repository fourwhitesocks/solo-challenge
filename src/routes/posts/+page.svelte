<script lang="ts">
  import Title from '$lib/components/Title.svelte';
  export let data;
  console.log(data.posts);
  //below is destructured to make easier to read is not necessary but makes easier to read
  const { posts } = data;
</script>

<div class="container py-12">
  <div class="text-center"><Title title="Each Day of Sailing" /></div>
  <blockquote class="prose py-5 lg:prose-2xl">
    <p class="max-w-[42rem] italic">
      Perseverance is the hard work you do after you get tired of doing the hard work you already
      did * <span class="text-base"
        >~ this quote reminds me of preparing for this challenge ~ Amy</span
      >
    </p>
  </blockquote>

  <div class="post-grid m-auto sm:m-0">
    {#each posts.posts as post}
      <article class="day">
        <div class="flex pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
            <path
              class="map-marker"
              fill="#000000"
              d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"
            />
          </svg>

          <!-- <img src={post.graphic.url} alt="gps locator icon" /> -->

          <div class="pl-4">
            <h2>
              <a
                class="text-2xl underline decoration-1 hover:underline-offset-8"
                href="/posts/{post.slug}">{post.title}</a
              >
            </h2>

            <h3>{post.subtitle}</h3>
          </div>
        </div>

        <h4 class="pb-4 lg:prose-xl">{post.excerpt}</h4>
        <img class="pb-4" src={post.image.url} alt={post.alt_text} />
        <a
          class="text-2xl underline decoration-1 hover:underline-offset-8"
          href="/posts/{post.slug}">Continued</a
        >
      </article>
    {/each}
  </div>
  <p class="pt-4">*quote credit: Newt Gingrich</p>
</div>

<style>
  :root {
    --clr-primary-400: 263 55% 52%;
    --clr-secondary-400: 217 19% 35%;
  }

  /*[data-theme='dark'] {
    --bc: rgb(255, 0, 0);
  }*/
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bolder;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h4 {
    line-height: 1.7;
  }

  .container {
    width: min(95%, 76rem);
    margin: 0 auto;
  }
  .post-grid {
    display: grid;
    gap: 1.5rem;
    grid-auto-columns: 1fr;
    grid-template-areas:
      'one'
      'two'
      'three'
      'four'
      'five'
      'six'
      'seven';

    /*padding-block: 2rem; */
    width: min(95%, 76rem);
    /*margin-inline: auto; */
  }
  .flex {
    display: flex;
    align-items: center;
  }

  /*   blockquote {
    font-weight: 500;
    font-style: italic;
    color: var(--tw-prose-quotes);
    border-left-width: 0.25rem;
    border-left-color: var(--tw-prose-quote-borders);
    quotes: '\201C''\201D''\2018''\2019';
  } */

  .day {
    font-size: var(--fs-400);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  }

  .day:nth-child(1) {
    grid-area: one;
    background-color: hsl(220, 80%, 20%);
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
  }

  /*.day:nth-child(1)[data-theme='dark'] {
    color: --bc;
  } */

  .day:nth-child(1) path.map-marker {
    fill: hsl(var(--nc) / var(--tw-text-opacity));
  }

  .day:nth-child(2) {
    grid-area: two;
    background-color: lightgrey;
    color: hsl(0, 0%, 13%);
  }

  .day:nth-child(3) {
    grid-area: three;
    background-color: beige;
    color: hsl(0, 0%, 13%);
  }

  .day:nth-child(4) {
    grid-area: four;
    background-color: hsl(133, 6%, 27%);
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
    background-image: url('./sailboat-hr-test-op.svg');
    background-repeat: no-repeat;
    background-position: center 92%;
  }

  .day:nth-child(4) path.map-marker {
    fill: hsl(var(--nc) / var(--tw-text-opacity));
  }

  .day:nth-child(5) {
    grid-area: five;
    background-color: beige;

    color: hsl(0, 0%, 13%);
  }

  .day:nth-child(6) {
    grid-area: six;
    background-color: beige;
    background-color: hsl(220, 80%, 20%);
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
  }

  .day:nth-child(6) path.map-marker {
    fill: hsl(var(--nc) / var(--tw-text-opacity));
  }

  .day:nth-child(7) {
    grid-area: seven;

    background-color: lightgrey;
    color: hsl(0, 0%, 13%);
  }
  /* 528px */
  @media screen and (min-width: 33em) {
    .post-grid {
      grid-template-areas:
        'one one'
        'two three'
        'five five'
        'four four';
    }
  }
  /* 608px */
  @media screen and (min-width: 38em) {
    .post-grid {
      grid-template-areas:
        'one one'
        'two five'
        'three five'
        'four four'
        'six six'
        'seven seven';
    }
  }
  /*54em is 864 px */
  @media screen and (min-width: 54em) {
    .post-grid {
      grid-template-areas:
        'one one two'
        'three four four'
        'five six seven';
    }
  }
  /* 75em is 1200px */
  @media screen and (min-width: 75em) {
    .post-grid {
      grid-template-areas:
        'one one two two'
        'three four four five'
        'six six seven seven';
    }
  }

  /*  /* 75em is 1200px 
   @media screen and (min-width: 75em) {
    .post-grid {
      grid-template-areas:
        'one one two two'
        'three four four five'
        'six six seven seven';
    }
  } */
</style>
