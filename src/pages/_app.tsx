import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import "@fontsource/poppins";
import "@fontsource/righteous";
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import "../styles/default.scss";
import { QueryClient, QueryClientProvider } from 'react-query';
// import { makeServer } from '../services/mirage';

const queryClient = new QueryClient();

// makeServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
