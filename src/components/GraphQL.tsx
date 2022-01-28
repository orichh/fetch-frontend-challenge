import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://frontend-take-home.fetchrewards.com/",
});

// const restLink = new RestLink({
//   uri: "https://swapi.dev/api/",
// });

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const query = gql`
  query Test {
    pleaseeee @rest(type: "praying", path: "form") {
      states {
        label: name
        abra: abbreviation
      }
    }
  }
`;
// const query = gql`
//   query Lukeeeee {
//     personnnnn @rest(type: "Personn", path: "people/1/") {
//       height
//     }
//   }
// `;

client.query({ query }).then((response) => {
  console.log(response.data);
});

export const Test = () => {
  return (
    <ApolloProvider client={client}>
      <div>hello</div>
    </ApolloProvider>
  );
};
