import { Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface SocialItemsProps {
    title: string;
    icon: ElementType;
    href: string;
    bgColor?: string;
}

export default function Item({ title, icon, href, bgColor }: SocialItemsProps) {
    return (
        <Link href={href} _hover={{ border: '1px solid #fff', borderRadius: 4 }}>
            <Stack bg={bgColor} alignItems='center' py='.8rem' borderRadius={4}>
                <Icon as={icon} w={6} h={6} />
                <Text>{title}</Text>
            </Stack>
        </Link>
    )
}