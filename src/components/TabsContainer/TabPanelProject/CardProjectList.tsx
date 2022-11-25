import { SimpleGrid, Skeleton, useDisclosure } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, useState } from 'react';
import { Project, ProjectsProps } from "../../../pages";
import { createClient } from "../../../services/prismicio";
import CardProject from "./CardProject";
import ModalProjects from "./ModalPorjects";

export default function CardProjectList ( { projectsPagination }: ProjectsProps ) {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(true);
        }, 3600);
    }, []);

    const [currentProjectDetail, setCurrentProjectDetail] = useState<Project>();
    function handleViewModal(currentProject: Project): void {
        onOpen();
        setCurrentProjectDetail(currentProject);
    };

    // const [nextPage, setNextPage] = useState(projectsPagination?.next_page);
    // const [currentPage, setCurrentPage] = useState(1);
    // async function handleNextPage(): Promise<void> {
    //     if (currentPage !== 1 && nextPage === null) {
    //         return;
    //     };

    //     const projectResults = await fetch(`${nextPage}`)
    //         .then(response => response.json());

    //     setNextPage(projectResults.next_page);
    //     setCurrentPage(projectResults.page);

    //     const newProjects = projectResults.results.map(project => {
    //         return {
    //             uid: project.uid,
    //             image_url: project.image_url,
    //             title: project.title,
    //             description: project.description,
    //             link_git: project.link_git,
    //             link_demo: project.link_git,
    //         }
    //     })

    //     setProjects([...projects, ...newProjects]);
    // };

    return (
        <>
            <SimpleGrid
                minChildWidth={240}
                spacing={9}
            >
                {projectsPagination.results.map(project => (
                    <Skeleton key={project.uid} isLoaded={isLoad}>
                        <CardProject key={project.uid} results={project} viewModal={handleViewModal} />
                    </Skeleton>
                ))}
            </SimpleGrid>

            {/* {nextPage && (
                <Button onClick={handleNextPage}>Carregar mais projects</Button>
            )} */}

            <ModalProjects results={currentProjectDetail} isOpen={isOpen} onClose={onClose} />
        </>
    )
}