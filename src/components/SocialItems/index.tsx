import { Flex, SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

import { BsFillFilePersonFill } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { TfiGithub } from 'react-icons/tfi';

export default function SocialItems() {

    var BgLinkedin = 'linkedin_gradient.900';
    var BgGithub = 'github_gradient.900';
    var BgCurriculo = 'primary_gradient.900';

    return (
        <Flex w='100%' direction='column'>
            <SimpleGrid
                w='100%'
                gap='4'
                minChildWidth='180px'
                alignItems='flex-start'
                mb={4}
            >
                <Item
                    href="https://www.linkedin.com/in/guilherme-santosmotabernardo/"
                    title="LinkedIn"
                    bgColor={BgLinkedin}
                    icon={GrLinkedinOption}
                />
                <Item
                    href="https://github.com/GuilhermeMota20"
                    title="Github"
                    bgColor={BgGithub}
                    icon={TfiGithub}
                />
            </SimpleGrid>

            <Item
                href="https://curriculo-weld.vercel.app/"
                title="Curriculo"
                bgColor={BgCurriculo}
                icon={BsFillFilePersonFill}
            />
        </Flex>
    )
}