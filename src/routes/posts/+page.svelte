<script lang="ts">
  import Title from '$lib/components/Title.svelte';
  export let data;
  console.log(data.posts);
  //below is destructured to make easier to read is not necessary but makes easier to read
  const { posts } = data;
</script>

<div class="container">
  <div class="text-center"><Title title="Each Day of Sailing" /></div>

  <div class="post-grid">
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
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="56" height="70" fill="none"
            ><g clip-path="url(#clip0_11_15)"
              ><path
                fill="#000"
                class="path"
                fill-rule="evenodd"
                d="M27.683 0C12.509-.044 8.689 11.799 8.702 18.797c.029 15.09 7.753 26.643 19.164 45.475 11.149-19.033 18.658-30.355 18.658-45.418C46.524 11.416 42.858.046 27.683 0Zm-.184 9.53a9.448 9.448 0 1 1 .003 18.896 9.448 9.448 0 0 1-.003-18.897Z"
                clip-rule="evenodd"
              /><path
                stroke="#000"
                class="stroke"
                stroke-linecap="round"
                stroke-width="1.618"
                d="M38.895 54.575c5.553.703 10.058 1.903 12.768 3.4 2.71 1.498 3.46 3.204 2.128 4.835-1.331 1.63-4.667 3.088-9.453 4.13-4.787 1.042-10.735 1.606-16.857 1.598-6.122-.009-12.05-.588-16.798-1.643-4.748-1.054-8.032-2.52-9.306-4.155-1.274-1.634-.463-3.337 2.3-4.828 2.763-1.49 7.311-2.679 12.89-3.367"
              /></g
            ><defs
              ><clipPath id="clip0_11_15"><path fill="#fff" d="M0 0h55.227v69.347H0z" /></clipPath
              ></defs
            ></svg
          > -->

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

        <h4 class="pb-4">{post.excerpt}</h4>
        <img class="pb-4" src={post.image.url} alt="im alt text" />
        <a
          class="text-2xl underline decoration-1 hover:underline-offset-8"
          href="/posts/{post.slug}">Continued</a
        >
      </article>
    {/each}
  </div>
</div>

<style>
  :root {
    --clr-primary-400: 263 55% 52%;
    --clr-secondary-400: 217 19% 35%;
  }
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /*body {
     display: grid;
    place-content: center;
    min-height: 100vh; 
    background-color: hsl(210 46% 95%);
  } */

  /* Make images easier to work with 
  img,
  picture {
    max-width: 100%;
    display: block;
  }  */

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
      'five';

    padding-block: 2rem;
    width: min(95%, 76rem);
    margin-inline: auto;
  }
  .flex {
    display: flex;
    align-items: center;
  }

  .day {
    font-size: var(--fs-400);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  }

  .day:nth-child(1) {
    grid-area: one;
    background-color: hsl(220, 80%, 20%);
    color: white;
  }

  .day:nth-child(1) path.map-marker {
    fill: white;
  }

  .day:nth-child(2) {
    grid-area: two;
    background-color: lightgrey;
  }

  .day:nth-child(3) {
    grid-area: three;
    background-color: beige;
  }

  .day:nth-child(4) {
    grid-area: four;
    background-color: hsl(133, 6%, 27%);
    color: white;
  }

  .day:nth-child(4) path.map-marker {
    fill: white;
  }

  .day:nth-child(5) {
    grid-area: five;
    background-color: beige;
    background-image: url('./sailboat-hr-test-op.svg');
    background-repeat: no-repeat;
    background-position: center 95%;
  }

  @media screen and (min-width: 33em) {
    .post-grid {
      grid-template-areas:
        'one one'
        'two three'
        'five five'
        'four four';
    }
  }

  @media screen and (min-width: 38em) {
    .post-grid {
      grid-template-areas:
        'one one'
        'two five'
        'three five'
        'four four';
    }
  }

  @media screen and (min-width: 54em) {
    .post-grid {
      grid-template-areas:
        'one one two'
        'five five five'
        'three four four';
    }
  }

  @media screen and (min-width: 75em) {
    .post-grid {
      grid-template-areas:
        'one one two five'
        'three four four five';
    }
  }
</style>
