import { useBreakpointValue } from "@chakra-ui/react";

export function WideVersion() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return isWideVersion;
}