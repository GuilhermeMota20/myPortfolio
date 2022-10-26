import { Flex, useBreakpointValue } from "@chakra-ui/react";
import ProfileUser from "../components/ProfileUser";
import SocialItems from "../components/SocialItems";

export default function Home() {

  const isWideVersio = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex
      as='section'
      w='100%'
      h='100vh'
      maxW={580}
      mx='auto'
      px='6'
      direction='column'
      alignItems='center'
      justify='center'
      gap={20}
    >
      <ProfileUser />
      <SocialItems />

    </Flex>
  )
}