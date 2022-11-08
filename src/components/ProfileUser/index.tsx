import { Avatar, Flex, Text } from "@chakra-ui/react";

type UserProps = {
  name: string;
  avatar: string;
  bio: string;
};

export default function ProfileUser({ name, avatar, bio }: UserProps) {

  return (
    <Flex direction='column' alignItems='center' gap='4'>
      <Avatar name={name} src={avatar} size='xl' />

      <Flex direction='column' alignItems='center'>
        <Text>{name}</Text>
        <Text color='gray.500'>{bio}</Text>
      </Flex>
    </Flex>
  )
}