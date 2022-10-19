import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/timotejgerzelj/30daysrsvpproject",
  cache: new InMemoryCache(),
});

export default client;