
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
      url
    }
   day_story 
   extra_rich_text { html }
  }
`)

  if (post) {
    return post;
  }

  throw error(404, "not found");
}







