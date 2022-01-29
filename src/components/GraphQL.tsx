import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const restLink = new RestLink({
  uri: "https://frontend-take-home.fetchrewards.com/",
});

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

export const getData = () => {
  return client.query({ query });
};

export const Test = () => {
  const [data, setData] = useState();
  getData().then(({ data, loading, error }) => {
    if (loading) return loading;
    if (error) return error;
    if (data) {
      console.log(
        "🚀 ~ file: GraphQL.tsx ~ line 41 ~ getData ~ data",
        Array.isArray(data.pleaseeee.states)
      );

      setData(data.pleaseeee.states);
    }
  });

  return (
    <ApolloProvider client={client}>
      <Autocomplete
        autoHighlight
        id="auto-highlight"
        options={data ? data : [{ label: "loading", value: "loading" }]}
        // options={[{ label: "test", value: "test" }]}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="State" variant="standard" />
        )}
      />
    </ApolloProvider>
  );
};

const TestingResults = (props: any) => {
  console.log(
    "🚀 ~ file: GraphQL.tsx ~ line 50 ~ TestingResults ~ props",
    props
  );
  return <div>testing results</div>;
};
