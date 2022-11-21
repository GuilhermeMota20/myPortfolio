import { Button, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface ButtonCvDownloadProps {
    labelTooltip: string;
    icon: ReactJSXElement;
    archiveDownload?: string;
}

export default function ButtonCvDownload({ labelTooltip, icon }: ButtonCvDownloadProps) {
    const colorModeValue = useColorModeValue('gray.50', 'gray.700');

    return (
        <Tooltip label={labelTooltip} placement='left' hasArrow >
            <Button
                rightIcon={icon}
                iconSpacing={0}
                color='primary.900'
                bg={colorModeValue}
                boxShadow='md'
                variant='solid'
            />
        </Tooltip>
    )
}