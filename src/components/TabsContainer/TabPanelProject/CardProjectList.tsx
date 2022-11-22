import { Box, Flex, SimpleGrid, Skeleton, SkeletonText, Text, useDisclosure, useFocusEffect } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { useDBDev } from "../../../services/hooks/useDBDev";
import CardProject from "./CardProject";
import ModalProjects from "./ModalPorjects";

export interface CardProjectProps {
    id: string;
    title: string;
    description: string;
    image_url: string;
    link_git: string;
    link_demo: string;
}

export default function CardProjectList() {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const { data, error, isLoading, isFetching, isSuccess } = useDBDev();
    const [currentProjectDetail, setCurrentProjectDetail] = useState<CardProjectProps>();
    const [isLoad, setIsLoad] = useState(false);

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoad(true);
        }, 3600);
    }, []);

    function handleViewModal(currentProject: CardProjectProps): void {
        onOpen();
        setCurrentProjectDetail(currentProject);
    };

    return (
        <>
            {error ? (
                <Flex justify='center'>
                    <Text>Ocorreu um erro ao obter os projetos.</Text>
                </Flex>
            ) : (
                <SimpleGrid
                    minChildWidth={240}
                    spacing={9}
                >
                    {data?.projects.map(project => (
                        <Skeleton key={project.id} isLoaded={isLoad}>
                            <CardProject data={project} viewModal={handleViewModal} />
                        </Skeleton>
                    ))}
                </SimpleGrid>
            )}

            <ModalProjects data={currentProjectDetail} isOpen={isOpen} onClose={onClose} />
        </>
    )
}