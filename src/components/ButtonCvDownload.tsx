import { Button, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";

interface ButtonCvDownloadProps {
    labelTooltip?: string;
    icon: ReactJSXElement;
    archiveDownload?: string;
}

export default function ButtonCvDownload({ labelTooltip, icon, archiveDownload }: ButtonCvDownloadProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    return (
        <Link href={archiveDownload ? archiveDownload : ''} download={archiveDownload && true}>
            <Tooltip label={labelTooltip} placement='left' hasArrow >
                <Button
                    rightIcon={icon}
                    iconSpacing={0}
                    color='primary.900'
                    bg={colorModeValue}
                    boxShadow='md'
                    variant='solid'
                    disabled={!archiveDownload && true}
                />
            </Tooltip>
        </Link>
    )
}