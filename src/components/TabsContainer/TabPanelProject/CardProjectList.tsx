import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useState } from 'react';
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
    const { data, error, isLoading } = useDBDev();
    const [currentProjectDetail, setCurrentProjectDetail] = useState<CardProjectProps>();

    function handleViewModal(currentProject: CardProjectProps): void {
        onOpen();
        setCurrentProjectDetail(currentProject);
    };

    return (
        <>
            <SimpleGrid
                minChildWidth={240}
                spacing={9}
            >
                {data?.projects.map(project => (
                    <CardProject key={project.id} data={project} viewModal={handleViewModal} />
                ))}
            </SimpleGrid>

            <ModalProjects data={currentProjectDetail} isOpen={isOpen} onClose={onClose} />
        </>
    )
}