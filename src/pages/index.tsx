import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import ProfileUser from "../components/ProfileUser";
import TabsContainer from "../components/TabsContainer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const userData = {
    name: 'Guilherme Mota',
    bio: 'Frontend Developer',
    avatar: 'https://avatars.githubusercontent.com/u/70167159?v=4'
  }

  const dataCard = [
    {
      id: '1',
      title: 'teste 1',
      description: 'description 1',
      image_url: 'https://media-exp1.licdn.com/dms/image/D4D16AQHQDUewixmMAQ/profile-displaybackgroundimage-shrink_350_1400/0/1667331268258?e=1674086400&v=beta&t=t36u2F4bqWBKDFKoaGJbD6_zRul2MPaBgqMiDeb3Fw8',
      link_git: 'lalala',
      link_demo: 'lalala',
    },
    {
      id: '2',
      title: 'teste 2',
      description: 'description 2',
      image_url: 'https://media-exp1.licdn.com/dms/image/D4D16AQHQDUewixmMAQ/profile-displaybackgroundimage-shrink_350_1400/0/1667331268258?e=1674086400&v=beta&t=t36u2F4bqWBKDFKoaGJbD6_zRul2MPaBgqMiDeb3Fw8',
      link_git: 'lalala',
      link_demo: 'lalala',
    },
    {
      id: '3',
      title: 'teste 3',
      description: 'description 3',
      image_url: 'https://media-exp1.licdn.com/dms/image/D4D16AQHQDUewixmMAQ/profile-displaybackgroundimage-shrink_350_1400/0/1667331268258?e=1674086400&v=beta&t=t36u2F4bqWBKDFKoaGJbD6_zRul2MPaBgqMiDeb3Fw8',
      link_git: 'lalala',
      link_demo: 'lalala',
    },
  ]

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

      <TabsContainer data={dataCard} />
    </Stack>
  )
}