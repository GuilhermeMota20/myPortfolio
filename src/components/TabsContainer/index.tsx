import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import TabListsComponent from "./TabListComponent";
import CardProjectList, { CardProjectProps } from "./TabPanelProject/CardProjectList";
import TabItemSkills from "./TabPanelSkills/TabPanelSkills";

interface ModalProps {
    data: CardProjectProps[];
}

export default function TabsContainer({ data }: ModalProps) {

    return (
        <Box as="section" w='100%' maxW='760px'>
            <Tabs variant='soft-rounded' colorScheme="red" isFitted >
                <TabListsComponent isLoading />

                <TabPanels w='100%' pt='2rem'>
                    <TabPanel>
                        <CardProjectList cards={data} />
                    </TabPanel>

                    <TabPanel>
                        <TabItemSkills />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}