import { Box, Image } from "@chakra-ui/react";
import { Profile } from "../../types";
import { WideVersion } from "../Utilities/isWideVersion";

interface BannerProps {
  results: Profile;
};

export default function Banner({ results }: BannerProps) {

  const isWideVersio = WideVersion();

  const hasBanner = results.data.profile_banner?.url;

  return (
    <>
      {hasBanner === 'undefined'
        ? (
          <Box w='100vw' h={isWideVersio ? '120px' : '170px'} />
        ) : (
          <Box w='100vw' h={isWideVersio ? '120px' : '170px'}>
            <Image
              width='100vw'
              height='200px'
              objectFit='cover'
              src={hasBanner}
            />
          </Box >
        )
      }
    </>
  )
}
