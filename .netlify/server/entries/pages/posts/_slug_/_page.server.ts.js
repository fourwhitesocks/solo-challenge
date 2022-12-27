import { e as error } from "../../../../chunks/index2.js";
import { p as postquery } from "../../../../chunks/db.js";
async function load({ params }) {
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
`);
  if (post) {
    return post;
  }
  throw error(404, "not found");
}
export {
  load
};
