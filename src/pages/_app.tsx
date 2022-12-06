import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import "@fontsource/poppins";
import "@fontsource/righteous";
import type { AppProps } from 'next/app';
import "../styles/default.scss";
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
