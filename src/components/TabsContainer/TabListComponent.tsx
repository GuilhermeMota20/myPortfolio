import { Skeleton, Stack, Tab, TabList } from "@chakra-ui/react";
import { ColorModeValue } from "../Utilities/ColorModeValue";

export default function TabListsComponent() {
  const { isColorMode } = ColorModeValue();

  return (
    <Stack alignItems='center'>
      <Skeleton isLoaded>
        <TabList bg={isColorMode.firstColorModeValue} p='.3rem' rounded='md' boxShadow='md' w='100%' maxW='320px'>
          <Tab rounded='md'>Projects</Tab>
          <Tab isDisabled rounded='md'>Blog</Tab>
        </TabList>
      </Skeleton>
    </Stack>
  )
}