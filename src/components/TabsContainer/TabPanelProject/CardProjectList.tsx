import { Box, Button, CloseButton, Input, SimpleGrid, Skeleton, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { Project, ProjectsProps } from "../../../types";
import CardProject from "./CardProject";

export default function CardProjectList({ projectsPagination }: ProjectsProps) {
    const [projects, setProjects] = useState<Project[]>(projectsPagination.results);
    const [search, setSearch] = useState('');
    const [nextPage, setNextPage] = useState(projectsPagination.next_page);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoad, setIsLoad] = useState(false);
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(true);
        }, 3600);
    }, []);

    async function handleNextPage() {
        if (currentPage !== 1 && nextPage === null) {
            return;
        };

        const projectResults = await fetch(`${nextPage}`)
            .then(response => response.json())

        setNextPage(projectResults.next_page);
        setCurrentPage(projectResults.page);

        const newProjects = projectResults.results.map(project => {

            const buyProject = String(project.data.buy_project.url);

            return {
                uid: project.uid,
                data: {
                    banner: {
                        url: project.data.banner.url,
                    },
                    title: project.data.title,
                    skills: project.data.skills.map((skill) => {
                        return {
                            name_skills: skill.name_skills,
                        };
                    }),
                    repo_git: {
                        url: project.data.repo_git.url,
                        target: project.data.repo_git.target,
                    },
                    demo_site: {
                        url: project.data.demo_site.url,
                        target: project.data.demo_site.target,
                    },
                    buy_project: {
                        url: buyProject,
                    },
                }
            }
        })
        setProjects([...projects, ...newProjects]);
    };

    const filteredProjects = search.length > 0
        ? projects.filter(project => project.uid.includes(search))
        : [];

    function clearSearchInput() {
        search.length > 0
            ? setSearch('')
            : search;
    }

    console.log(filteredProjects)

    return (
        <Stack spacing='2rem'>
            <Box position='relative' maxW='40%'>
                <Input
                    variant='filled'
                    placeholder='Search by a project name'
                    
                    bgColor={colorModeValue}
                    _focus={{ borderColor: colorModeValue }}
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />

                {search.length > 0 && (
                    <CloseButton
                        alignSelf='flex-start'
                        position='absolute'
                        right='6px'
                        top={1}
                        onClick={clearSearchInput}
                    />
                )}
            </Box>

            <SimpleGrid
                minChildWidth={240}
                spacing={20}
            >
                {search.length > 0
                    ? (
                        filteredProjects.map((project) => {
                            return (
                                <Skeleton key={project.uid} isLoaded={isLoad}>
                                    <CardProject key={project.uid} results={project} />
                                </Skeleton>
                            )
                        })
                    ) : (
                        projects.map(project => (
                            <Skeleton key={project.uid} isLoaded={isLoad}>
                                <CardProject key={project.uid} results={project} />
                            </Skeleton>
                        ))
                    )
                }
            </SimpleGrid>

            {filteredProjects.length == 0 && search.length > 0 && (<Text textAlign='center'>Oppss...</Text>)}

            {nextPage && (
                <Box textAlign='center'>
                    <Button width='200px' mx='auto' color='gray.400' variant='ghost' onClick={handleNextPage}>Load more projects...</Button>
                </Box>
            )}
        </Stack>
    )
}