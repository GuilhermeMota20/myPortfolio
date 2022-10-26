import { Avatar, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AvatarUser from "./AvatarUser";

type UserProps = {
  name: string;
  avatar: string;
  bio: string;
};

export default function ProfileUser() {

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
    <AvatarUser name={myUser.name} avatar={myUser.avatar} bio={myUser.bio} />
  )
}