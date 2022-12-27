import * as server from '../entries/pages/posts/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/posts/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/posts/_page.svelte-1c577f1e.js';
export { server };
export const imports = ["_app/immutable/components/pages/posts/_page.svelte-1c577f1e.js","_app/immutable/chunks/index-953fe873.js","_app/immutable/chunks/Title-26907288.js"];
export const stylesheets = ["_app/immutable/assets/_page-0d7a5daf.css","_app/immutable/assets/Title-ac628d48.css"];
export const fonts = [];
