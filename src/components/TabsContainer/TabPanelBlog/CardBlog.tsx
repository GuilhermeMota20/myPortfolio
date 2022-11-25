import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function CardBlog() {
    return (
        <Stack w='100%' h='200px' borderRadius='md' border='1px' borderStyle='dashed' borderColor='white' filter='auto' brightness='70%'>
            <Flex w='100%' h='100%' alignItems='center' justifyContent='center'>
                <Text fontSize='1rem'>Content currently unavailable. Please come back soon 😶‍🌫️</Text>
            </Flex>
        </Stack>
    )
}