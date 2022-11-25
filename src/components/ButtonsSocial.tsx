import { Button, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";

interface ButtonsSocialProps {
    linkHref: string;
    labelTooltip?: string;
    icon: ReactJSXElement;
}

export default function ButtonsSocial({ linkHref, labelTooltip, icon }: ButtonsSocialProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    return (
        <Link href={linkHref}>
            <a target='_blank'>
                <Tooltip label={labelTooltip} placement='bottom' hasArrow >
                    <Button
                        rightIcon={icon}
                        iconSpacing={0}
                        color='primary.900'
                        bg={colorModeValue}
                        boxShadow='md'
                    />
                </Tooltip>
            </a>
        </Link>
    )
}