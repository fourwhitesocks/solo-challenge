import { c as create_ssr_component, e as escape } from "./index.js";
const Title_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 1024px){.title-ch-limit.svelte-1xgrhme{--ch-limit:8ch;max-width:var(--ch-limit)}}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "My Longest Sail" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<h1 class="${"title-ch-limit text-center text-4xl font-semibold dark:text-white md:text-5xl lg:text-left xl:text-6xl svelte-1xgrhme"}">${escape(title)}
</h1>`;
});
export {
  Title as T
};
