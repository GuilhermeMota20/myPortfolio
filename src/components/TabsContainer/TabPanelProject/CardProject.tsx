import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Badge, Button, ButtonGroup, Divider, Flex, Heading, Image, SimpleGrid, Stack, Text, useBreakpointValue, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import { Project } from "../../../types";
import ButtonsSocial from "../../ButtonsSocial";
import { FaGithubAlt, FaPager } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface CardProjectProps {
    results: Project;
}

export default function CardProject({ results }: CardProjectProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');
    const colorModeValueIcon = useColorModeValue('gray.50', 'gray.800');

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Card maxW={460} maxH={560} h='100%' boxShadow='lg' rounded='lg' bg={colorModeValue} mx='auto'>
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
                        <WrapItem>
                            <Badge colorScheme='green'>Nextjs</Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme='green'>Reactjs</Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme='green'>TypeScript</Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme='green'>chakraui</Badge>
                        </WrapItem>
                    </Wrap>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p='1rem'>
                <Stack spacing='1rem' w='100%'>
                    <Flex w='100%' display='flex' justifyContent='space-between' gap='1rem'>
                        <ButtonsSocial icon={<FaGithubAlt />} linkHref={results.data.repo_git.url} color="teal" bg={colorModeValueIcon} />
                        <ButtonsSocial icon={<FaPager />} linkHref={results.data.demo_site.url} color="teal" bg={colorModeValueIcon} />
                        <ButtonsSocial icon={<AiOutlineShoppingCart />} color="teal" />

                        {isWideVersion
                            ?
                            <Button variant='solid' colorScheme='teal' disabled>Buy now</Button>
                            : null
                        }
                    </Flex>

                    {!isWideVersion && <Button variant='solid' colorScheme='teal' disabled>Buy now</Button>}
                </Stack>
            </CardFooter>
        </Card>
    )
}