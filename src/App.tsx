import { Routes, Route } from "react-router-dom";
import { Form, Home } from "./components";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://frontend-take-home.fetchrewards.com/",
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Form />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
