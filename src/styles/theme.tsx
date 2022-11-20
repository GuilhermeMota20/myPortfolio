import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig  = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    colors: {
        gray: {
            900: "#0d1117",
            800: "#181B23",
            700: "#1F2029",
            600: "#4B4D63",
            500: "#616480",
            400: "#797D9A",
            300: "#9699B0",
            200: "#B3B5C6",
            100: "#D1D2DC",
            50: "#F2F3F5",
        },
        primary: {
            900: 'rgba(238,55,77,1)',
            100: 'rgba(246,92,110,1)'
        },
    },
    fonts: {
        heading: `'Righteous'`,
        body: `'Poppins'`,
    },
});