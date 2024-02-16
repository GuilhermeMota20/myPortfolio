import { Box, Button, Flex, Grid, GridItem, Skeleton, Stack, Tag, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { getProjects } from "../../../services/hooks/useProject";
import { Project, ProjectsProps } from "../../../types";
import CardProject from "./CardProject";

export default function CardProjectList({ projectsPagination }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [nextPage, setNextPage] = useState(projectsPagination?.next_page);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 2300);
  }, []);

  useEffect(() => {
    setProjects(projectsPagination.results);
  }, [projectsPagination.results]);

  async function handleNextPage() {
    if (!nextPage) return;

    const { projectsPagination: nextPageData } = await getProjects(nextPage);

    setNextPage(nextPageData.next_page);
    setCurrentPage(currentPage + 1);

    setProjects([...projects, ...nextPageData.results]);
  };

  return (
    <Stack spacing='2rem'>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={16}>
        {projects?.map(project => (
          <Skeleton key={project.uid} isLoaded={isLoad}>
            <GridItem w='100%' h='100%'>
              <CardProject key={project.uid} results={project} />
            </GridItem>
          </Skeleton>
        ))}
      </Grid>

      {projects.length === 0 && (<Text textAlign='center'>Oppss... nothing was found</Text>)}

      {nextPage && (
        <Box textAlign='center'>
          <Button width='200px' mx='auto' color='gray.400' variant='ghost' onClick={handleNextPage}>Load more projects...</Button>
        </Box>
      )}
    </Stack>
  )
}