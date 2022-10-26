import { ListIcon, ListItem } from "@chakra-ui/react";
import { ElementType } from "react";

interface ItemUserContactProps {
    icon: ElementType;
    legend: string;
}

export default function ItemUserContact({ icon, legend }: ItemUserContactProps) {
    return (
        <ListItem display='flex' alignItems='center'>
            <ListIcon as={icon} color='primary.900' />
            {legend}
        </ListItem>
    )
}