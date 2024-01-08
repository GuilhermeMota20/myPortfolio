import { Button, Tooltip } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";
import { ColorModeValue } from "./Utilities/ColorModeValue";

interface ButtonCvDownloadProps {
  labelTooltip?: string;
  icon: ReactJSXElement;
  archiveDownload?: string;
}

export default function ButtonCvDownload({ labelTooltip, icon, archiveDownload }: ButtonCvDownloadProps) {
  const { isColorMode } = ColorModeValue();

  return (
    <Link href={archiveDownload ? archiveDownload : ''} download={archiveDownload && true}>
      <Tooltip label={labelTooltip} placement='left' hasArrow >
        <Button
          rightIcon={icon}
          iconSpacing={0}
          color='primary.900'
          bg={isColorMode.firstColorModeValue}
          boxShadow='md'
          variant='solid'
          disabled
        />
      </Tooltip>
    </Link>
  )
}