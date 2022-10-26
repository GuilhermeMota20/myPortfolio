import { Avatar, Flex, Text } from "@chakra-ui/react";

interface AvatarUserProps {
  name: string;
  avatar: string;
  bio: string;
}

export default function AvatarUser({ name, avatar, bio }: AvatarUserProps) {
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