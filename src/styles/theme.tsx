import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#0d1117",
            "800": "#181B23",
            "700": "#1F2029",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        },
        primary: {
            "900": 'rgba(238,55,77,1)',
            "800": 'rgba(246,92,110,1)'
        },
        primary_gradient: {
            "900": 'linear-gradient(58deg, rgba(238,55,77,1) 0%, rgba(246,92,110,1) 100%)'
        },
        linkedin_gradient: {
            "900": 'linear-gradient(90deg, rgba(111, 139, 231, 1) 0%, rgba(47, 41, 157, 1) 100%)'
        },
        github_gradient: {
            "900": 'linear-gradient(58deg, #1f9b95 8%, #3983b4 98%);'
        }
    },
    fonts: {
        heading: `'Poppins'`,
        body: `'Poppins'`,
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50',
            }
        }
    }
})