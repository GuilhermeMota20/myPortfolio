import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useState } from 'react';
import CardProject from "./CardProject";
import ModalProjects from "./modalPorjects";

export interface CardProjectProps {
    id: string;
    title: string;
    description: string;
    image_url: string;
    link_git: string;
    link_demo: string;
}

interface CardsProjectsProps {
    cards: CardProjectProps[];
}

export default function CardProjectList({ cards }: CardsProjectsProps) {
    const { onOpen, isOpen, onClose } = useDisclosure();

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
                {cards.map(card => (
                    <CardProject key={card.id} data={card} viewModal={handleViewModal} />
                ))}
            </SimpleGrid>

            <ModalProjects data={currentProjectDetail} isOpen={isOpen} onClose={onClose} />
        </>
    )
}