import { Avatar, Badge, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { ProfileProps } from "../../types";
import ButtonCvDownload from "../ButtonCvDownload";
import ButtonsSocial from "../ButtonsSocial";
import Banner from "./Banner";

export default function ProfileUser({ resultsProfile }: ProfileProps) {
  return (
    <Box as="section" mt='-7rem'>
      {resultsProfile.results.map(profile => (
        <Box key={profile.uid}>
          <Banner results={profile} />

          <Stack spacing={9} alignItems='center'>

            <Flex key={profile.uid} mt='-1.8rem' direction='column' alignItems='center' gap='4'>
              <Avatar
                name={profile.data.profile_name}
                src={profile.data.profile_avatar.url}
                size='2xl'
                boxShadow='xl' 
              />{' '}

              <Flex direction='column' alignItems='center'>
                <Text>{profile.data.profile_name}</Text>

                <Text color='gray.500'>{profile.data.profile_work}</Text>

                <Badge mt='4px' ml='1' colorScheme='green'>
                  {profile.data.profile_desntonibilidade}
                </Badge>
              </Flex>
            </Flex>

            <HStack>
              <ButtonCvDownload icon={<FiDownload />} archiveDownload={profile.data.profile_download.url} />
              <ButtonsSocial icon={<FaGithubAlt />} linkHref={profile.data.profile_git.url} />
              <ButtonsSocial icon={<ImLinkedin2 />} linkHref={profile.data.profile_linkedin.url} />
              <ButtonsSocial icon={<SiInstagram />} linkHref={profile.data.profile_instagram.url} />
            </HStack>
          </Stack>
        </Box>
      ))}
    </Box>
  )
}