import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { theme } from '../styles/theme';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon_gm.ico" type="image/x-icon" />
                    <title>Bem vindo | gmota</title>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}