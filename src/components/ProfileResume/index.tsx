import { Heading, Stack, Text } from "@chakra-ui/react";

interface ProfileResumeProps {
    titleContainer: string;
    descriptionContent: string;
}

export default function ProfileResume({ descriptionContent, titleContainer }: ProfileResumeProps) {
    return (
        <Stack>
            <Heading color='primary.900' fontSize={20}>{titleContainer.toUpperCase()}</Heading>
            <Text>{descriptionContent}</Text>
        </Stack>
    )
}