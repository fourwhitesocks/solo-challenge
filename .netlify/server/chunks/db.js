import { GraphQLClient, gql } from "graphql-request";
async function postquery(q) {
  const graphcms = new GraphQLClient("https://api-us-east-1.hygraph.com/v2/cl7z1o3vo4a4z01uo2s4xcyiw/master");
  const query = gql`{${q}}`;
  const result = await graphcms.request(query);
  return result;
}
export {
  postquery as p
};
