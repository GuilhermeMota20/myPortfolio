import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ProjectsProps } from "../../pages";
import TabListsComponent from "./TabListComponent";
import CardBlog from "./TabPanelBlog/CardBlog";
import CardProjectList from "./TabPanelProject/CardProjectList";

export default function TabsContainer({ projectsPagination }: ProjectsProps) {
    return (
        <Box as="section" w='100%' maxW='1200px'>
            <Tabs variant='soft-rounded' colorScheme="red" isFitted >
                {/* <TabListsComponent /> */}

                <TabPanels w='100%' pt='2rem'>
                    <TabPanel>
                        <CardProjectList projectsPagination={projectsPagination} />
                    </TabPanel>

                    {/* <TabPanel>
                        <CardBlog />
                    </TabPanel> */}
                </TabPanels>
            </Tabs>
        </Box>
    )
}