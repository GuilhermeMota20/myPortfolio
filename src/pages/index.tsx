import { Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import PreLoader from "../components/PreLoader";
import ProfileUser from "../components/ProfileUser";
import TabsContainer from "../components/TabsContainer";
import { getProfile } from "../services/hooks/useProfile";
import { getProjects } from "../services/hooks/useProject";
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

export const getStaticProps: GetStaticProps = async ()=> {
  const { resultsProfile } = await getProfile();
  const { projectsPagination } = await getProjects();
  
  return {
    props: {
      resultsProfile,
      projectsPagination,
    }
  }
}