import { Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import PreLoader from "../components/PreLoader";
import ProfileUser from "../components/ProfileUser";
import TabsContainer from "../components/TabsContainer";
import { createClient } from "../services/prismicio";

export default function Home({ resultsProfile, projectsPagination }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 7000);
  });

  return (
    <>
      {load && <PreLoader />}

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
        <ProfileUser resultsProfile={resultsProfile} />
        <TabsContainer projectsPagination={projectsPagination} />
      </Stack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient({});

  const responseProfile = await prismic.getByType('profile');
  const responseProject = await prismic.getByType('projects', {pageSize: 3});

  const profile = responseProfile.results.map(profile => {
    return {
      uid: profile.uid,
      data: {
        profile_banner: {
          url: profile.data.profile_banner.url,
        },
        profile_avatar: {
          url: profile.data.profile_avatar.url,
        },
        profile_name: profile.data.profile_name,
        profile_work: profile.data.profile_work,
        profile_desntonibilidade: profile.data.profile_desntonibilidade,
        profile_git: {
          url: profile.data.profile_git.url,
        },
        profile_linkedin: {
          url: profile.data.profile_linkedin.url,
        },
      }
    }
  });
  const resultsProfile = {
    results: profile,
  };

  const projects = responseProject.results.map(project => {

    const buyProject = String(project.data.buy_project.url); 

    return {
      uid: project.uid,
      data: {
        banner: {
          url: project.data.banner.url,
        },
        title: project.data.title,
        repo_git: {
          url: project.data.repo_git.url,
        },
        demo_site: {
          url: project.data.demo_site.url,
        },
        buy_project: {
          url: buyProject,
        },
      }
    }
  });
  const projectsPagination = {
    next_page: responseProject.next_page,
    results: projects,
  };

  return {
    props: {
      projectsPagination,
      resultsProfile,
    }
  };
};