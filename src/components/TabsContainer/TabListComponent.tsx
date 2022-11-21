import { Skeleton, Stack, Tab, TabList, useColorModeValue } from "@chakra-ui/react";

export default function TabListsComponent() {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    return (
        <Stack alignItems='center'>
            <Skeleton isLoaded>
                <TabList bg={colorModeValue} p='.3rem' rounded='md' boxShadow='md' w='100%' maxW='320px'>
                    <Tab rounded='md'>Projects</Tab>
                    <Tab rounded='md'>Skills</Tab>
                </TabList>
            </Skeleton>
        </Stack>
    )
}