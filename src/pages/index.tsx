import { Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import ProfileUser from "../components/ProfileUser";
import TabsContainer from "../components/TabsContainer";
import CardProject from "../components/TabsContainer/TabPanelProject/CardProject";
import { CardProjectProps } from "../components/TabsContainer/TabPanelProject/CardProjectList";
import { useDBDev } from "../services/hooks/useDBDev";

export default function Home() {
  const userData = {
    name: 'Guilherme Mota',
    bio: 'Frontend Developer',
    avatar: 'https://avatars.githubusercontent.com/u/70167159?v=4'
  }

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

      <TabsContainer />
      {/* {data?.projects.map(project => {
        return (
          <CardProject key={project.id} data={project} viewModal={handleViewModal} />
        )
      })} */}
    </Stack>
  )
}