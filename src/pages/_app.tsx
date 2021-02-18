import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Provider } from "urql";
import theme from "../theme";

import { createClient } from "urql";
const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    // need this to be able to set cookie for login, registration
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
