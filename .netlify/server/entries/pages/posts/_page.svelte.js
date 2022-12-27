import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as add_attribute } from "../../../chunks/index.js";
import { T as Title } from "../../../chunks/Title.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--clr-primary-400:263 55% 52%;--clr-secondary-400:217 19% 35%}.svelte-1g5kimf.svelte-1g5kimf,.svelte-1g5kimf.svelte-1g5kimf::before,.svelte-1g5kimf.svelte-1g5kimf::after{box-sizing:border-box}h2.svelte-1g5kimf.svelte-1g5kimf{font-size:1.8rem;font-weight:bolder}h3.svelte-1g5kimf.svelte-1g5kimf{font-size:1.5rem;font-weight:bold}h4.svelte-1g5kimf.svelte-1g5kimf{line-height:1.7}.container.svelte-1g5kimf.svelte-1g5kimf{width:min(95%, 76rem);margin:0 auto}.post-grid.svelte-1g5kimf.svelte-1g5kimf{display:grid;gap:1.5rem;grid-auto-columns:1fr;grid-template-areas:'one'\r\n      'two'\r\n      'three'\r\n      'four'\r\n      'five'\r\n      'six'\r\n      'seven';width:min(95%, 76rem)}.flex.svelte-1g5kimf.svelte-1g5kimf{display:flex;align-items:center}.day.svelte-1g5kimf.svelte-1g5kimf{font-size:var(--fs-400);padding:2rem;border-radius:0.5rem;box-shadow:2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25)}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(1){grid-area:one;background-color:hsl(220, 80%, 20%);--tw-text-opacity:1;color:hsl(var(--nc) / var(--tw-text-opacity))}.day.svelte-1g5kimf:nth-child(1) path.map-marker.svelte-1g5kimf{fill:hsl(var(--nc) / var(--tw-text-opacity))}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(2){grid-area:two;background-color:lightgrey;color:hsl(0, 0%, 13%)}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(3){grid-area:three;background-color:beige;color:hsl(0, 0%, 13%)}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(4){grid-area:four;background-color:hsl(133, 6%, 27%);--tw-text-opacity:1;color:hsl(var(--nc) / var(--tw-text-opacity));background-image:url('./sailboat-hr-test-op.svg');background-repeat:no-repeat;background-position:center 92%}.day.svelte-1g5kimf:nth-child(4) path.map-marker.svelte-1g5kimf{fill:hsl(var(--nc) / var(--tw-text-opacity))}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(5){grid-area:five;background-color:beige;color:hsl(0, 0%, 13%)}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(6){grid-area:six;background-color:beige;background-color:hsl(220, 80%, 20%);--tw-text-opacity:1;color:hsl(var(--nc) / var(--tw-text-opacity))}.day.svelte-1g5kimf:nth-child(6) path.map-marker.svelte-1g5kimf{fill:hsl(var(--nc) / var(--tw-text-opacity))}.day.svelte-1g5kimf.svelte-1g5kimf:nth-child(7){grid-area:seven;background-color:lightgrey;color:hsl(0, 0%, 13%)}@media screen and (min-width: 33em){.post-grid.svelte-1g5kimf.svelte-1g5kimf{grid-template-areas:'one one'\r\n        'two three'\r\n        'five five'\r\n        'four four'}}@media screen and (min-width: 38em){.post-grid.svelte-1g5kimf.svelte-1g5kimf{grid-template-areas:'one one'\r\n        'two three'\r\n        'four three'\r\n        'five five'\r\n        'six seven'}}@media screen and (min-width: 54em){.post-grid.svelte-1g5kimf.svelte-1g5kimf{grid-template-areas:'one one two'\r\n        'three four four'\r\n        'five six seven'}}@media screen and (min-width: 75em){.post-grid.svelte-1g5kimf.svelte-1g5kimf{grid-template-areas:'one one two two'\r\n        'three four four five'\r\n        'six six seven seven'}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"container py-12 svelte-1g5kimf"}"><div class="${"text-center svelte-1g5kimf"}">${validate_component(Title, "Title").$$render($$result, { title: "Each Day of Sailing" }, {}, {})}</div>
  <blockquote class="${"prose py-5 lg:prose-2xl svelte-1g5kimf"}"><p class="${"max-w-[42rem] italic svelte-1g5kimf"}">Perseverance is the hard work you do after you get tired of doing the hard work you already
      did * <span class="${"text-base svelte-1g5kimf"}">~ this quote reminds me of preparing for this challenge ~ Amy</span></p></blockquote>

  <div class="${"post-grid m-auto sm:m-0 svelte-1g5kimf"}">${each(posts.posts, (post) => {
    return `<article class="${"day svelte-1g5kimf"}"><div class="${"flex pb-4 svelte-1g5kimf"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"35"}" height="${"35"}" viewBox="${"0 0 24 24"}" class="${"svelte-1g5kimf"}"><path class="${"map-marker svelte-1g5kimf"}" fill="${"#000000"}" d="${"M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"}"></path></svg>

          

          <div class="${"pl-4 svelte-1g5kimf"}"><h2 class="${"svelte-1g5kimf"}"><a class="${"text-2xl underline decoration-1 hover:underline-offset-8 svelte-1g5kimf"}" href="${"/posts/" + escape(post.slug, true)}">${escape(post.title)}</a></h2>

            <h3 class="${"svelte-1g5kimf"}">${escape(post.subtitle)}</h3>
          </div></div>

        <h4 class="${"pb-4 lg:prose-xl svelte-1g5kimf"}">${escape(post.excerpt)}</h4>
        <img class="${"pb-4 svelte-1g5kimf"}"${add_attribute("src", post.image.url, 0)}${add_attribute("alt", post.alt_text, 0)}>
        <a class="${"text-2xl underline decoration-1 hover:underline-offset-8 svelte-1g5kimf"}" href="${"/posts/" + escape(post.slug, true)}">Continued</a>
      </article>`;
  })}</div>
  <p class="${"pt-4 svelte-1g5kimf"}">*quote credit: Newt Gingrich</p>
</div>`;
});
export {
  Page as default
};
