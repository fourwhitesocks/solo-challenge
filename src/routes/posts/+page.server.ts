

import { postquery } from '$lib/data/db';
//postquery is the function from db.js

export async function load() {
  //const response = await fetch('https:had-graph-cms-master-link');

  //const users = await response.json();
  //console.log(users)



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
`)
  return {
    posts
  }

}
