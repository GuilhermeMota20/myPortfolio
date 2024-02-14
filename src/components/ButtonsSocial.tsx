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
  return (
    <Link href={linkHref ? linkHref : ''}>
      {linkHref
        ?
        <a target='_blank'>
          <Tooltip label={labelTooltip} placement='bottom' hasArrow >
            <Button
              rightIcon={icon}
              iconSpacing={0}
              colorScheme='red'
              variant='solid'
              disabled={!linkHref && true}
            />
          </Tooltip>
        </a>
        :
        <Tooltip label={labelTooltip} placement='bottom' hasArrow >
          <Button
            rightIcon={icon}
            iconSpacing={0}
            colorScheme='red'
            variant='ghost'
            disabled={!linkHref && true}
          />
        </Tooltip>
      }
    </Link>
  )
}