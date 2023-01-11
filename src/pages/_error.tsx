import { Button, Flex, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../components/Header";

function PageError() {
    const isWideVersio = useBreakpointValue({
        base: true,
        lg: false,
      });

    return (
        <Stack
            as='main'
            userSelect='none'
            w='100%'
            h='100vh'
            mx='auto'
            px='6'
            direction='column'
            alignItems='center'
            gap={9}
        >
            <Header />

            <Flex minWidth='220px' h='100vh' alignItems='center' justifyContent='center'>
                <Stack textAlign='center' spacing='1rem'>
                    <Heading fontSize={isWideVersio ? '6rem' : '9rem'} letterSpacing='1.4rem'>404</Heading>

                    <Stack spacing='2rem'>
                        <Text>Whoooops... this page is not exist.</Text>

                        <Link href='/'>
                            <Button colorScheme="gray">Go home</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default PageError
