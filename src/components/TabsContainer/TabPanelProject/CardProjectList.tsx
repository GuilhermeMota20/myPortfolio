import { Box, Button, Grid, GridItem, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { Project, ProjectsProps } from "../../../types";
import CardProject from "./CardProject";

export default function CardProjectList({ projectsPagination }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(projectsPagination.results);
  const [nextPage, setNextPage] = useState(projectsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);

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

  return (
    <Stack spacing='2rem'>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={16}>
        {projects.map(project => (
          <Skeleton key={project.uid} isLoaded={isLoad}>

            <GridItem w='100%' h='100%'>
              <CardProject key={project.uid} results={project} />
            </GridItem>
          </Skeleton>
        ))}
      </Grid>

      {projects.length == 0 && (<Text textAlign='center'>Oppss... nothing was found</Text>)}

      {nextPage && (
        <Box textAlign='center'>
          <Button width='200px' mx='auto' color='gray.400' variant='ghost' onClick={handleNextPage}>Load more projects...</Button>
        </Box>
      )}
    </Stack>
  )
}