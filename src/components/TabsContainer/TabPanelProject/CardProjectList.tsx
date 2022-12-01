import { Box, Button, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { Project, ProjectsProps } from "../../../pages";
import CardProject from "./CardProject";

export default function CardProjectList({ projectsPagination }: ProjectsProps) {
    const [isLoad, setIsLoad] = useState(false);
    const [nextPage, setNextPage] = useState(projectsPagination?.next_page);
    const [currentPage, setCurrentPage] = useState(1);
    const [projects, setProjects] = useState<Project[]>(projectsPagination?.results);

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(true);
        }, 3600);
    }, []);

    async function handleNextPage(): Promise<void> {
        if (currentPage !== 1 && nextPage === null) {
            return;
        };

        const projectResults = await fetch(`${nextPage}`)
            .then(response => response.json());

        setNextPage(projectResults.next_page);
        setCurrentPage(projectResults.page);

        const newProjects = projectResults. results.map(project => {
            return {
                uid: project.uid,
                image_url: project.image_url,
                title: project.title,
                description: project.description,
                link_git: project.link_git,
                link_demo: project.link_git,
            }
        })

        setProjects([...projects, ...newProjects]);
    };

    return (
        <Stack spacing='2rem'>
            <SimpleGrid
                minChildWidth={240}
                spacing={9}
            >
                {projectsPagination.results.map(project => (
                    <Skeleton key={project.uid} isLoaded={isLoad}>
                        <CardProject key={project.uid} results={project} />
                    </Skeleton>
                ))}
            </SimpleGrid>

            {nextPage && (
                <Box w='100%'>
                    <Button width='200px' mx='auto' color='primary.100' variant='ghost' onClick={handleNextPage}>Load more projects</Button>
                </Box>
            )}
        </Stack>
    )
}