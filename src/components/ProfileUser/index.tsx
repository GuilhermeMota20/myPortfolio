import { Avatar, Badge, Box, Flex, HStack, Stack, Tag, Text } from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { ProfileProps } from "../../types";
import ButtonCvDownload from "../ButtonCvDownload";
import ButtonsSocial from "../ButtonsSocial";
import Banner from "./Banner";
import style from './style.module.scss';

export default function ProfileUser({ resultsProfile }: ProfileProps) {
  return (
    <Box as="section" mt='-7rem'>
      {resultsProfile.map(profile => (
        <Box key={profile.uid}>
          <Banner results={profile} />

          <Stack spacing={9} alignItems='center'>

            <Flex key={profile.uid} mt='-1.8rem' direction='column' alignItems='center' gap='4'>
              <Avatar
                className={style.avatar}
                name={profile.data.profile_name}
                src={profile.data.profile_avatar.url}
                size='2xl'
                boxShadow='xl'
              />{' '}

              <Flex direction='column' alignItems='center'>
                <Text>{profile.data.profile_name}</Text>

                <Text color='gray.500'>{profile.data.profile_work}</Text>

                <Flex flexWrap='wrap' direction='row' alignItems='center' justify='center' maxW='600px' textTransform='uppercase'>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Reactjs
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    TypeScript
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Nextjs
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Tailwind-css
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    chakra-ui
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Material-ui
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Shadcn-ui
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    SASS
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Zustand
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Yup
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Stripe
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Firebase
                  </Tag>
                  <Tag variant='solid' colorScheme='gray' mt='4px' ml='1'>
                    Convex
                  </Tag>
                </Flex>
              </Flex>
            </Flex>

            <HStack>
              <ButtonCvDownload
                icon={<FiDownload />}
                archiveDownload={profile.data.profile_download.url}
              />
              <ButtonsSocial
                icon={<FaGithubAlt />}
                linkHref={profile.data.profile_git.url}
                labelTooltip="Go to Github"
              />
              <ButtonsSocial
                icon={<ImLinkedin2 />}
                linkHref={profile.data.profile_linkedin.url}
                labelTooltip="Go to LinkedIn"
              />
              <ButtonsSocial
                icon={<SiInstagram />}
                linkHref={profile.data.profile_instagram.url}
                labelTooltip="Go to Instagram"
              />
            </HStack>
          </Stack>
        </Box>
      ))}
    </Box>
  )
}