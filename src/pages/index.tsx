import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ProfileUser from "../components/ProfileUser";
import TabsContainer from "../components/TabsContainer";
import { createClient } from "../services/prismicio";

export interface Project {
  uid: string;
  data: {
    banner: {
      url: string;
    };
    title: string;
    description: {
      text: string;
    }[];
    repo_git: {
      url: string;
      target: string;
    };
    demo_site: {
      url: string;
      target: string;
    };
  };
}

export interface ProjectsPagination {
  next_page: string;
  results: Project[];
}

export interface ProjectsProps {
  projectsPagination: ProjectsPagination;
}

export default function Home({ projectsPagination }: ProjectsProps ) {
  const [load, setLoad] = useState(true);

  console.log(projectsPagination);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  });

  if (load) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  };

  const userData = {
    name: 'Guilherme Mota',
    bio: 'Frontend Developer',
    avatar: 'https://avatars.githubusercontent.com/u/70167159?v=4'
  };

  return (
    <Stack
      as='main'
      userSelect='none'
      w='100%'
      h='100%'
      mx='auto'
      py='2rem'
      px='6'
      direction='column'
      alignItems='center'
      gap={9}
    >
      <Header />

      <ProfileUser avatar={userData.avatar} bio={userData.bio} name={userData.name} isLoading />

      <TabsContainer projectsPagination={projectsPagination} />

      {/* {projectsPagination.results?.map(project => (
        <Box bg='gray.700' w='100%' key={project.uid}>
          <Text>{project.uid}</Text>
          <Image src={project.data.banner.url} w='200px' h='200px' />
        </Box>
      ))} */}
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient({});

  const response = await prismic.getByType('projects', { pageSize: 2 });

  const projects = response.results.map(project => {
    return {
      uid: project.uid,
      data: {
        banner: {
          url: project.data.banner.url,
        },
        title: project.data.title,
        description: project.data.description.map(description=>  {
          return {
            text: [...description.text],
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
      }
    };
  });
  
  const projectsPagination = {
    next_page: response.next_page,
    results:  projects,
  };

  return {
    props: {
      projectsPagination
    }
  };
};