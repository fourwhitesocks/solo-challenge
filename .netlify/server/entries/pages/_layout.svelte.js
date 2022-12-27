import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import "theme-change";
const Theme_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mb-8"}"><select data-choose-theme class="${"select select-bordered select-primary select-xs bg-base-100 pr-9 text-base-content"}"><option disabled="${"disabled"}" selected="${"selected"}" value="${"Choose a theme"}">Choose a theme</option><option value="${"aqua"}">Aqua</option><option value="${"black"}">Black</option><option value="${"bumblebee"}">Bumblebee</option><option value="${"corporate"}">Corporate</option><option value="${"cupcake"}">Cupcake</option><option value="${"cyberpunk"}">Cyberpunk</option><option value="${"dark"}">Dark</option><option value="${"dracula"}">Dracula</option><option value="${"emerald"}">Emerald</option><option value="${"fantasy"}">Fantasy</option><option value="${"forest"}">Forest</option><option value="${"garden"}">Garden</option><option value="${"halloween"}">Halloween</option><option value="${"light"}">Light</option><option value="${"lofi"}">Lofi</option><option value="${"luxury"}">Luxury</option><option value="${"pastel"}">Pastel</option><option value="${"retro"}">Retro</option><option value="${"synthwave"}">Synthwave</option><option value="${"valentine"}">Valentine</option><option value="${"wireframe"}">Wireframe</option></select></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"navbar flex-col bg-neutral text-neutral-content shadow-lg selection:rounded-b-lg sm:flex-row"}"><div class="${"mx-2 px-2 lg:navbar-start"}"><span class="${"text-md font-bold"}"><a href="${"/"}">Lake Erie Solo Challenge 2022</a></span></div>
  <div class="${"navbar-center mx-2 px-2"}"><nav class="${"flex items-stretch"}">

      <a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/"}">Home</a>
      <a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/posts"}">MY DAYS</a></nav></div>
  <div class="${"sm:navbar-end"}">${validate_component(Theme_select, "ThemeSelect").$$render($$result, {}, {}, {})}</div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer grid-cols-1 justify-between justify-items-center gap-y-2 bg-neutral px-4 py-12 text-neutral-content md:flex"}"><a href="${"/privacy-policy"}">Privacy Policy</a>
  <a href="${"/"}">© Copyright 2023 Digital Pain Killers</a>
  <a aria-label="${"Link to top of page"}" aria-describedby="${"scroll to here"}" href="${"#scroll-to-here"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-10 w-10"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"}" clip-rule="${"evenodd"}"></path></svg></a>
</footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"scroll-to-here"}"></div>
${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<main class="${""}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
