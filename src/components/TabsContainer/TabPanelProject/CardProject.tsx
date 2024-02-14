import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Divider, Flex, Heading, Image, Stack, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { FaGithubAlt, FaPager } from "react-icons/fa";
import { Project } from "../../../types";
import ButtonsSocial from "../../ButtonsSocial";
import { ColorModeValue } from "../../Utilities/ColorModeValue";

interface CardProjectProps {
  results: Project;
};

export default function CardProject({ results }: CardProjectProps) {
  const { isColorMode } = ColorModeValue();

  return (
    <Card maxW={460} maxH={560} h='100%' boxShadow='lg' rounded='lg' bg={isColorMode.firstColorModeValue} mx='auto' key={results.uid}>
      <CardBody h='100%' display='flex' flexDirection='column' justifyContent='space-between'>
        <Image
          src={results.data.banner.url}
          alt={results.data.title}
          borderTopRadius='lg'
          objectFit='cover'
          w='100%'
          h='200px'
        />

        <Stack spacing='2rem' p='1rem'>
          <Heading letterSpacing='.6rem' fontWeight='normal' fontSize='1.2rem'>{results.data.title.toUpperCase()}</Heading>

          <Wrap>
            {results.data.skills.map(skill => {
              return (
                <WrapItem key={skill.name_skills}>
                  <Tag key={skill.name_skills} variant='solid' colorScheme='gray' textTransform='uppercase'>
                    {skill.name_skills}
                  </Tag>
                </WrapItem>
              )
            })}
          </Wrap>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter p='1rem'>
        <Stack spacing='1rem' w='100%'>
          <Flex w='100%' display='flex' justifyContent='space-between' gap='1rem'>
            <Flex gap='1rem'>
              <ButtonsSocial
                icon={<FaGithubAlt />}
                linkHref={results.data.repo_git.url}
                color="teal"
                bg={isColorMode.secondColorModeValueSecond}
                labelTooltip="Go to Github"
              />
              <ButtonsSocial
                icon={<FaPager />}
                linkHref={results.data.demo_site.url}
                color="teal"
                bg={isColorMode.secondColorModeValueSecond}
                labelTooltip="Go to site demo"
              />
            </Flex>
          </Flex>
        </Stack>

      </CardFooter>
    </Card>
  )
}