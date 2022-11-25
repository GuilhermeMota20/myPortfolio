import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import "@fontsource/poppins";
import "@fontsource/righteous";
import type { AppProps } from 'next/app';
import { QueryClient } from 'react-query';
import { makeServer } from '../services/mirage';
import "../styles/default.scss";
import { theme } from '../styles/theme';

const queryClient = new QueryClient();

makeServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
