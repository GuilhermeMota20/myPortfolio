import { Flex, Heading, Image } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' alignItems='center' gap='1rem'  my='auto' mx='auto' >
                <Image w='80px' h='80px' src='/LavaLamp.gif' />
                <Heading fontSize='1rem'>Carregando...</Heading>
            </Flex>
        </Flex>
    )
}