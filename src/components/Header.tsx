import { Alert, AlertDescription, Button, CloseButton, Flex, Heading, Icon, Tooltip, useBreakpointValue, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";


export default function Header() {
  const { toggleColorMode, colorMode, } = useColorMode();
  const colorModeValue = useColorModeValue('gray.50', 'gray.800');

  const isWideVersio = useBreakpointValue({
    base: true,
    lg: false,
  });

  const {
    isOpen: isVisible,
    onClose,
  } = useDisclosure({ defaultIsOpen: true })

  return (
    <>
      {isVisible && !isWideVersio && (
        <Alert
          position='fixed'
          top={0}
          left={0}
          py='.6rem'
          w='100vw'
          // h='40px'
          bg='primary.900'
          zIndex={10}
        >
          <Flex
            w='100%'
            maxW='1200px'
            mx='auto'
            alignItems='center'
            justifyContent='center'
          >
            <AlertDescription>
              This site is under maintenance, soon we will have more features 😊
            </AlertDescription>
          </Flex>

          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right='16px'
            top={0}
            onClick={onClose}
          />
        </Alert>
      )}

      <Flex
        as='header'
        position='fixed'
        direction='column'
        bg={colorModeValue}
        w='100%'
        h='70px'
        top={isVisible && !isWideVersio ? '43px' : '0'}
        left={0}
        py='1rem'
        px='6'
        boxShadow='dark-lg'
        zIndex={10}
      >
        <Flex
          w='100%'
          maxW='1200px'
          mx='auto'
          alignItems='center'
          justifyContent='space-between'
        >
          <Heading fontSize={isWideVersio ? '1rem' : '1.4rem'} >gmota</Heading>

          {!isWideVersio
            ?
            <Tooltip label={`Change theme to ${colorMode === 'light' ? 'dark' : 'light'} mode`} placement='right' hasArrow >
              <Button onClick={toggleColorMode} colorScheme='red' variant='ghost'>
                <Icon as={colorMode === 'light' ? FaMoon : FaSun} w='4' h='4' />
              </Button>
            </Tooltip>
            :
            <Button onClick={toggleColorMode} colorScheme='red' variant='ghost'>
              <Icon as={colorMode === 'light' ? FaMoon : FaSun} w='4' h='4' />
            </Button>
          }
        </Flex>
      </Flex>
    </>
  )
}