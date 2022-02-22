import { ApolloProvider } from "@apollo/client";

import { client } from "./utils/client";

import { Home } from "./pages/Home";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Home />
    </ApolloProvider>
  );
}

export default App;
