import { Avatar, Badge, Box, Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { ProfileProps } from "../../pages";
import ButtonCvDownload from "../ButtonCvDownload";
import ButtonsSocial from "../ButtonsSocial";
import Banner from "./Banner";

export default function ProfileUser({ resultsProfile }: ProfileProps) {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 2600);
  }, []);

  return (
    <Box as="section" mt='-5rem'>
      {resultsProfile.results.map(profile => (
        <>
          <Skeleton startColor='#FC0238' endColor='#FF3936' height='170px' filter='auto' blur={isLoad ? 0 : '2px'} isLoaded={isLoad}>
            <Banner results={profile} />
          </Skeleton>

          <Stack spacing={9} alignItems='center'>

            <Flex key={profile.uid} mt='-3rem' direction='column' alignItems='center' gap='4'>
              <SkeletonCircle size='24' isLoaded={isLoad}>
                <Avatar
                  name={profile.data.profile_name}
                  src={profile.data.profile_avatar.url}
                  size='xl'
                  boxShadow='xl' />
              </SkeletonCircle>

              <SkeletonText isLoaded={isLoad} noOfLines={4} spacing='4'>
                <Flex direction='column' alignItems='center'>
                  <Text>{profile.data.profile_name}</Text>

                  <Text color='gray.500'>{profile.data.profile_work}</Text>

                  <Badge mt='4px' ml='1' colorScheme='green'>
                    {profile.data.profile_desntonibilidade}
                  </Badge>
                </Flex>
              </SkeletonText>
            </Flex>

            <Skeleton isLoaded={isLoad}>
              <HStack>
                <ButtonCvDownload icon={<FiDownload />} />
                <ButtonsSocial icon={<FaGithubAlt />} linkHref={profile.data.profile_git.url} />
                <ButtonsSocial icon={<ImLinkedin2 />} linkHref={profile.data.profile_linkedin.url} />
              </HStack>
            </Skeleton>
          </Stack>
        </>
      ))}
    </Box>
  )
}