
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          color: "#FFFFFF",
          fontSize: "12px",
          bgColor: "#FFFFFF",
        },
      },
    },
    fonts: {
      body: `'Neue Haas Grotesk Display Pro', sans-serif`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
