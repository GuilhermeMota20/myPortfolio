import { Button, Flex, Heading, Icon, Tooltip, useBreakpointValue, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi";
import { generateKey } from "crypto";
import { FaMoon, FaSun } from "react-icons/fa"


export default function Header() {
  const { toggleColorMode, colorMode, } = useColorMode();
  const colorModeValue = useColorModeValue('gray.50', 'gray.800');

  const isWideVersio = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      as='header'
      position='fixed'
      bg={colorModeValue}
      w='100%'
      h='60px'
      top={0}
      left={0}
      py='1rem'
      px='6'
      boxShadow='dark-lg'
      zIndex={10}
    >
      <Flex
        w='100%'
        maxW='760px'
        mx='auto'
        alignItems='center'
        justifyContent='space-between'
      >
        <Heading fontSize={isWideVersio ? '1rem' : '1.4rem'} >gmota</Heading>

        <Tooltip label={`Change theme to ${colorMode === 'light' ? 'dark' : 'light'} mode`} placement='right' hasArrow >
          <Button onClick={toggleColorMode} colorScheme='red' variant='ghost'>
            <Icon as={colorMode === 'light' ? FaMoon : FaSun} w='4' h='4' />
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  )
}