import { Avatar, Badge, Box, Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, Text } from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import ButtonCvDownload from "../ButtonCvDownload";
import ButtonsSocial from "../ButtonsSocial";
import Banner from "./Banner";

interface UserProps {
  name: string;
  avatar: string;
  bio: string;
  isLoading: boolean;
};

export default function ProfileUser({ name, avatar, bio, isLoading }: UserProps) {
  return (
    <Box as="section" mt='-5rem'>
      <Skeleton startColor='#FC0238' endColor='#FF3936' height='170px' filter='auto' blur={isLoading ? 0 : '2px'} isLoaded={isLoading}>
        <Banner />
      </Skeleton>

      <Stack spacing={9} alignItems='center'>
        <Flex mt='-3rem' direction='column' alignItems='center' gap='4'>
          <SkeletonCircle size='24' isLoaded={isLoading}>
            <Avatar name={name} src={avatar} size='xl' boxShadow='xl' />
          </SkeletonCircle>

          <SkeletonText isLoaded={isLoading} noOfLines={4} spacing='4'>
            <Flex direction='column' alignItems='center'>
              <Text>{name}</Text>

              <Text color='gray.500'>{bio}</Text>

              <Badge mt='4px' ml='1' colorScheme='green'>
                Open to work! 🫡
              </Badge>
            </Flex>
          </SkeletonText>
        </Flex>

        <Skeleton isLoaded={isLoading}>
          <HStack>
            <ButtonCvDownload icon={<FiDownload />} />
            <ButtonsSocial icon={<FaGithubAlt />} linkHref='https://github.com/GuilhermeMota20' />
            <ButtonsSocial icon={<ImLinkedin2 />} linkHref='https://www.linkedin.com/in/guilherme-santosmotabernardo/' />
          </HStack>
        </Skeleton>
      </Stack>
    </Box>
  )
}