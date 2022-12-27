export const prerender = true

import { error } from '@sveltejs/kit';
import { postquery } from '$lib/data/db';
//postquery is the function from db.js


export async function load({ params }) {

  const post = await postquery(`

  post(where:{ slug: "${params.slug}" }){
    title
    excerpt
    slug
    image {
      url(transformation:{image:{resize:{fit:crop, height: 503, width:503}}})
    }
    alt_text
   day_story 
  }
`)

  if (post) {
    return post;
  }

  throw error(404, "not found");
}







