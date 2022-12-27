import { p as postquery } from "../../../chunks/db.js";
async function load() {
  const posts = await postquery(`
    posts {
      graphic {
        url
      }
        title
        subtitle
        excerpt
        slug
      image {
        url(transformation:{image:{resize:{fit:crop, height: 275, width:275}}})
      }
      alt_text
    }  
`);
  return {
    posts
  };
}
export {
  load
};
