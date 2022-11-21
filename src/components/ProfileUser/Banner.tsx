import { Box, Image } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Box w='100vw' h='170px' bg='gray.500'>
            <Image
                width='100vw'
                height='170px'
                objectFit='cover'
                src="/colorful.jpg"
            />
        </Box>
    )
}