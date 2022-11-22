import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ProfileUser from "../components/ProfileUser";
import TabsContainer from "../components/TabsContainer";

export default function Home() {
  const [load, setLoad] = useState(true);

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

      <TabsContainer />
    </Stack>
  )
}