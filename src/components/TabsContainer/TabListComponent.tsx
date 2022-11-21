import { Skeleton, Stack, Tab, TabList, useColorModeValue } from "@chakra-ui/react";
import { GlobalProps } from "../../interface/global";

export default function TabListsComponent(prop : GlobalProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    return (
        <Stack alignItems='center'>
            <Skeleton isLoaded={prop.isLoading}>
                <TabList bg={colorModeValue} p='.3rem' rounded='md' boxShadow='md' w='100%' maxW='320px'>
                    <Tab rounded='md'>Projects</Tab>
                    <Tab rounded='md'>Skills</Tab>
                </TabList>
            </Skeleton>
        </Stack>
    )
}