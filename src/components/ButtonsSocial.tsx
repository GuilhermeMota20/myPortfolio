import { Button, Tooltip } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";
import { ColorModeValue } from "./Utilities/ColorModeValue";

interface ButtonsSocialProps {
  linkHref?: string;
  labelTooltip?: string;
  icon: ReactJSXElement;
  color?: string;
  bg?: string;
}

export default function ButtonsSocial({ linkHref, labelTooltip, icon, color, bg }: ButtonsSocialProps) {
  const { isColorMode } = ColorModeValue();

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
              bg={!bg ? isColorMode.firstColorModeValue : bg}
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
            bg={!bg ? isColorMode.firstColorModeValue : bg}
            boxShadow='md'
            disabled={!linkHref && true}
          />
        </Tooltip>
      }
    </Link>
  )
}