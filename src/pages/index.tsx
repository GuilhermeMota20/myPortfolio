import { Stack } from "@chakra-ui/react";
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

export interface Profile {
  uid: string;
  data: {
    profile_banner: {
      url: string;
    };
    profile_avatar: {
      url: string;
    };
    profile_name: string;
    profile_work: string;
    profile_desntonibilidade: string;
    profile_git: {
      url: string;
    };
    profile_linkedin: {
      url: string;
    };
  }
}
export interface ProfileResult {
  results: Profile[];
}
export interface ProfileProps {
  resultsProfile: ProfileResult;
}

export default function Home({ resultsProfile,  projectsPagination}) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  });

  // if (load) {
  //   return (
  //     <>
  //       <Header />
  //       <Loading />
  //     </>
  //   )
  // };

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
      <ProfileUser resultsProfile={resultsProfile} />
      <TabsContainer projectsPagination={projectsPagination} />
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient({});

  const responseProfile = await prismic.getByType('profile');
  const responseProject = await prismic.getByType('projects', { pageSize: 4 });

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
    return {
      uid: project.uid,
      data: {
        banner: {
          url: project.data.banner.url,
        },
        title: project.data.title,
        // description: project.data.description.map(description => {
        //   return {
        //     text: [...description.text],
        //   };
        // }),
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