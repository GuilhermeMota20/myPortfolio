import { Button, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";

interface ButtonsSocialProps {
    linkHref?: string;
    labelTooltip?: string;
    icon: ReactJSXElement;
    color?: string;
    bg?:string;
}

export default function ButtonsSocial({ linkHref, labelTooltip, icon, color, bg }: ButtonsSocialProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    return (
        <Link href={linkHref ? linkHref : ''}>
            {linkHref
                ?
                <a target='_blank'>
                    <Tooltip label={labelTooltip} placement='bottom' hasArrow >
                        <Button
                            rightIcon={icon}
                            iconSpacing={0}
                            color={!color ? 'primary.900' : color}
                            bg={!bg ? colorModeValue : bg}
                            boxShadow='md'
                            disabled={!linkHref && true}
                        />
                    </Tooltip>
                </a>
                :
                <Tooltip label={labelTooltip} placement='bottom' hasArrow >
                    <Button
                        rightIcon={icon}
                        iconSpacing={0}
                        color={!color ? 'primary.900' : color}
                        bg={!bg ? colorModeValue : bg}
                        boxShadow='md'
                        disabled={!linkHref && true}
                    />
                </Tooltip>
            }
        </Link>
    )
}