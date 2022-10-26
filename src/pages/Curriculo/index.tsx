import { Flex, Stack, Text } from "@chakra-ui/react";
import ListAcademicFormation from "../../components/ListAcademicFormation";
import ListUserContact from "../../components/ListUserContact";
import ProfileResume from "../../components/ProfileResume";
import ProfileUser from "../../components/ProfileUser";

export default function Curriculo() {
    return (
        <Flex as='section' maxWidth='1200px' mx='auto' my='4rem' borderRadius='4'>
            <Stack spacing='4rem' w='40%' bg='gray.800' p='2rem' >
                <Stack spacing='.6rem'>
                    <ProfileUser />
                    <Text textAlign='center' color='primary.900'>Frontend Developer Web</Text>
                </Stack>

                <ListUserContact />

                <ProfileResume titleContainer="perfil" descriptionContent="Eu sou responsável por solucionar problemas no mundo digital através da programação na web. Realizei alguns cursos técnicos e extra curriculares em grandes universidades. Possuo alguns meses de experiência e realizações na área" />

                <ListAcademicFormation titleContainer="formação" />

            </Stack>

            {/* Content Profile */}
            <Stack w='100%' bg='gray.700' p='2rem'>
                <Text>teste</Text>
            </Stack>

        </Flex>
    )
}