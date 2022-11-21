import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { CardProjectProps } from "./CardProjectList";

interface ModalProjectProps {
    isOpen: boolean;
    onClose: () => void;
    data?: CardProjectProps;
}

export default function ModalProjects({ isOpen, onClose, data }: ModalProjectProps) {
    return (
        <Modal key={data?.id} onClose={onClose} size='xl' isOpen={isOpen} scrollBehavior='outside'>
            <ModalOverlay backdropFilter='blur(5px)' />
            <ModalContent>
                <ModalHeader>{data?.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{data?.description}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}