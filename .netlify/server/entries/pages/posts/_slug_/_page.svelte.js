import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../../chunks/index.js";
import { marked } from "marked";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-jfc07y{box-shadow:2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / 0.25)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"container mx-auto max-w-3xl px-4 pt-12 pb-7"}"><article class="${"prose"}"><img class="${"rounded-lg shadow-lg svelte-jfc07y"}"${add_attribute("src", data.post.image.url, 0)}${add_attribute("alt", data.post.alt_text, 0)}>
    <h1 class="${"title-ch-limit text-4xl font-semibold dark:text-white md:text-5xl xl:text-6xl"}">${escape(data.post.title)}</h1>

    <section class="${"prose lg:prose-xl"}"><!-- HTML_TAG_START -->${marked.parse(data.post.day_story)}<!-- HTML_TAG_END --></section></article>
</div>`;
});
export {
  Page as default
};
