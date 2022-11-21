import { Card, CardBody } from "@chakra-ui/card";
import { Image, Skeleton } from "@chakra-ui/react";
import { useState } from 'react';

interface CardProject {
    title: string;
    description: string;
    image_url: string;
    link_git: string;
    link_demo: string;
}

interface CardProjectProps {
    viewModal: (currentProject: {}) => void;
    data: CardProject;
}

export default function CardProject({ viewModal, data }: CardProjectProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Skeleton isLoaded={isLoading}>
            <Card maxW={350} boxShadow='md' rounded='lg' cursor='pointer' onClick={() => viewModal(data)}>
                <CardBody >
                    <Image
                        src={data.image_url}
                        alt={data.title}
                        borderRadius='lg'
                        objectFit='cover'
                        onLoad={() => setIsLoading(false)}
                    />
                </CardBody>
            </Card>
        </Skeleton>
    )
}