import { Box, Image } from "@chakra-ui/react";
import { Profile } from "../../types";

interface BannerProps {
    results: Profile;
}

export default function Banner({ results }: BannerProps ) {
    return (
        <Box w='100vw' h='170px'>
            <Image
                width='100vw'
                height='200px'
                objectFit='cover'
                src={results.data.profile_banner.url}
            />
        </Box>
    )
}