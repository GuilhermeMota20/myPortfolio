import { Flex, useBreakpointValue } from "@chakra-ui/react";
import SocialItems from "../components/SocialItems";
import UserBar from "../components/UserBar";

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
      <UserBar />
      <SocialItems />

    </Flex>
  )
}