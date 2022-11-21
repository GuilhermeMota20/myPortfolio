import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import TabListsComponent from "./TabListComponent";
import CardProjectList, { CardProjectProps } from "./TabPanelProject/CardProjectList";
import TabItemSkills from "./TabPanelSkills/TabPanelSkills";

export default function TabsContainer() {

    return (
        <Box as="section" w='100%' maxW='760px'>
            <Tabs variant='soft-rounded' colorScheme="red" isFitted >
                <TabListsComponent />

                <TabPanels w='100%' pt='2rem'>
                    <TabPanel>
                        <CardProjectList />
                    </TabPanel>

                    <TabPanel>
                        <TabItemSkills />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}