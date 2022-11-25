import { Button, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { Project } from "../../../pages";

interface ModalProjectProps {
    isOpen: boolean;
    onClose: () => void;
    results?: Project;
}

export default function ModalProjects({ isOpen, onClose, results }: ModalProjectProps) {
    return (
        <Modal key={results?.uid} onClose={onClose} size='xl' isOpen={isOpen} isCentered>
            <ModalOverlay backdropFilter='blur(5px)' />
            <ModalContent>
                <ModalHeader p={0} borderTopRadius='lg' >
                    <Image src={results?.data.banner.url} objectFit='cover' w='100%' h='200px' borderTopRadius='md' />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing='1rem' pt='1rem'>
                        <Heading letterSpacing='.6rem' fontSize='1.6rem'>{results?.data.title.toUpperCase()}</Heading>

                        {results?.data.description.map(description => {
                            return (
                                <Text key={description.text}>{description.text}</Text>
                            )
                        })}
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}