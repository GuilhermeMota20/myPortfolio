import { Box, Image } from "@chakra-ui/react";
import { Profile } from "../../pages";

interface BannerProps {
    results: Profile;
}

export default function Banner({ results }: BannerProps ) {
    return (
        <Box w='100vw' h='170px' bg='gray.500'>
            <Image
                width='100vw'
                height='170px'
                objectFit='cover'
                src={results.data.profile_banner.url}
            />
        </Box>
    )
}