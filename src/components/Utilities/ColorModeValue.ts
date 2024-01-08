import { useColorModeValue } from "@chakra-ui/react";

export function ColorModeValue() {
  const firstColorModeValue = useColorModeValue('gray.50', 'gray.800');
  const secondColorModeValueSecond = useColorModeValue('gray.50', 'gray.900');

  const isColorMode = {
    firstColorModeValue,
    secondColorModeValueSecond,
  };

  return {
    isColorMode
  };
}