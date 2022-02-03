import React, { ReactNode, useState } from "react";
import { Link, Stack, VariantType } from "@mui/material";

interface PageLinkPropTypes {
  to?: string;
  onClick?: CallableFunction;
  onHover?: CallableFunction;
  variant: VariantType;
  additionalStyles?: Object;
  children: ReactNode;
}

function PageLink(props: PageLinkPropTypes) {
  const [hover, setHovered] = useState(false);

  return (
    <Link
      variant={props.variant}
      color="primary"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      sx={{
        textDecoration: "none",
        opacity: hover ? "100%" : "85%",
        // paddingX: ({ spacing }) => spacing(5),
        padding: 0,
        cursor: "pointer",
        ...props.additionalStyles,
      }}
      href={props.to}
      onClick={() => (props.onClick ? props.onClick() : null)}
      onMouseEnter={() => (props.onHover ? props.onHover(true) : null)}
      onMouseLeave={() => (props.onHover ? props.onHover(false) : null)}
    >
      <Stack direction="row" justifyContent="space-between">
        {props.children}
      </Stack>
    </Link>
  );
}

export default PageLink;
