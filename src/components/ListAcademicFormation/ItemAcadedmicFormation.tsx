import { HStack, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { VscCircleFilled } from "react-icons/vsc";

interface ItemAcadedmicFormationProps {
    legend: string;
    academic: string;
    date: string;
}

export default function ItemAcadedmicFormation({ legend, academic, date }: ItemAcadedmicFormationProps) {
    return (
        <ListItem>
            <HStack>
                <ListIcon as={VscCircleFilled} color='gray.500' />
                <Text>{legend}</Text>
            </HStack>

            <Stack spacing={0} w='100%' color='gray.200' ml='2rem'>
                <Text>{academic}</Text>
                <Text>{date}</Text>
            </Stack>
        </ListItem>
    )
}