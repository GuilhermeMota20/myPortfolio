import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ColorModeValue } from "../Utilities/ColorModeValue";
import styles from './style.module.scss';

export default function PreLoader() {
  const { isColorMode } = ColorModeValue();

  return (
    <Flex
      bg={isColorMode.secondColorModeValueSecond}
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'
      position='fixed'
      top={0}
      left={0}
      zIndex={20}
    >
      <Flex
        w='200px'
        height='200px'
        position='relative'
        justifyContent='center'
        direction='column'
      >
        <Box className={styles.title}>
          <Box className={styles.block}></Box>
          <Heading fontWeight='bold' className={styles.heading}>
            gmota
            <Box className={styles.box}></Box>
          </Heading>
        </Box>

        <Box className={styles.role}>
          <Box className={styles.block}></Box>
          <Text className={styles.text}>Web Developer</Text>
        </Box>
      </Flex>
    </Flex>
  )
}