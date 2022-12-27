import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Badge, Button, Divider, Flex, Heading, Image, Stack, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithubAlt, FaPager } from "react-icons/fa";
import { Project } from "../../../types";
import ButtonsSocial from "../../ButtonsSocial";

interface CardProjectProps {
    results: Project;
}

export default function CardProject({ results }: CardProjectProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');
    const colorModeValueIcon = useColorModeValue('gray.50', 'gray.800');

    const hasLinkBuyProject = results.data.buy_project.url;

    return (
        <Card maxW={460} maxH={560} h='100%' boxShadow='lg' rounded='lg' bg={colorModeValue} mx='auto' key={results.uid}>
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
                                    <Badge colorScheme='green'>{skill.name_skills}</Badge>
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
                            <ButtonsSocial icon={<FaGithubAlt />} linkHref={results.data.repo_git.url} color="teal" bg={colorModeValueIcon} />
                            <ButtonsSocial icon={<FaPager />} linkHref={results.data.demo_site.url} color="teal" bg={colorModeValueIcon} />
                        </Flex>

                        <Link href={hasLinkBuyProject !== 'undefined' ? hasLinkBuyProject : ''}>
                            {hasLinkBuyProject === 'undefined'
                                ? (
                                    <Button variant='solid' colorScheme='teal' disabled>Buy now</Button>
                                ) : (
                                    <Button variant='solid' colorScheme='teal'>Buy now</Button>
                                )
                            }
                        </Link>
                    </Flex>
                </Stack>
            </CardFooter>
        </Card>
    )
}