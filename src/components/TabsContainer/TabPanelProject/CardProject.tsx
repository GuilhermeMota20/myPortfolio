import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/react";
import { Project } from "../../../pages";

interface CardProjectProps {
    viewModal: (currentProject: {}) => void;
    results: Project;
}

export default function CardProject({ viewModal, results }: CardProjectProps) {
    return (
        <Card maxW={350} boxShadow='md' rounded='lg' cursor='pointer' onClick={() => viewModal(results)}>
            <CardBody >
                <Image
                    src={results.data.banner.url}
                    alt={results.data.title}
                    borderRadius='lg'
                    objectFit='cover'
                />
            </CardBody>
        </Card>
    )
}