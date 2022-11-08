import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfileUser from "../components/ProfileUser";

type ProfileProps = {
  name: string;
  avatar: string;
  bio: string;
};

export default function Home({ name, avatar, bio }: ProfileProps) {

  const isWideVersio = useBreakpointValue({
    base: true,
    lg: false,
  })

  const [myUser, setMyUser] = useState<ProfileProps>({
    name: '',
    avatar: '',
    bio: '',
  });

  useEffect(() => {
    fetch('https://api.github.com/users/GuilhermeMota20')
      .then(response => response.json())
      .then(data =>
        setMyUser({
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
        })
      );
  }, []);

  return (
    <Flex
      as='section'
      w='100%'
      h='100vh'
      maxW={580}
      mx='auto'
      px='6'
      direction='column'
      alignItems='center'
      justify='center'
      gap={20}
    >
      <ProfileUser avatar={myUser.avatar} bio={myUser.bio} name={myUser.name} />
    </Flex>
  )
}