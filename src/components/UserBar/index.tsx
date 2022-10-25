import { Avatar, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AvatarUser from "./AvatarUser";

type UserProps = {
  name: string;
  avatar: string;
  bio: string;
};

export default function UserBar() {

  const [myUser, setMyUser] = useState<UserProps>({
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
    <Flex direction='column' alignItems='center' gap={12} w='100%'>
      <AvatarUser name={myUser.name} avatar={myUser.avatar} bio={myUser.bio} />
    </Flex>
  )
}